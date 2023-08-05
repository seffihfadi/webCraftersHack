import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Model, Step1, Step2, Step3, Step4 } from '../components'
import { useState, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { v4 } from 'uuid'
import { client } from '../config/sanity'

const SignUp = () => {

  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting user's location:", error);
          }
        );
      } else {
        console.log("Geolocation is not available in this browser.");
      }
    };

    getLocation();
  }, []);
  const snap = useSnapshot(state)
  const navigate = useNavigate()
  const [isSending, setIsSending] = useState(false)
  const [signupForm, setSignupForm] = useState({
    isprovider: snap.isprovider,
    text: '',
    password: '',
    tel: '',
    service: '',
    desc: ''
  })
  const isProvider = signupForm.isprovider == 'false' ? false : true

  const handleChange = (e) => {
    setSignupForm({...signupForm, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    if ((signupForm.text == '' || signupForm.password == '' || signupForm.tel == '') || (isProvider && (signupForm.service == '' || signupForm.desc == ''))) {
      state.msg = 'reload and fill in all inputs'
    } else {
      const uniqID = v4()
      localStorage.setItem('agroland-uid', uniqID)
      setIsSending(true)
      //console.log('signupForm', signupForm)
      const userDoc = {
        _id: signupForm.tel,
        _type: 'users',
        uniqID: uniqID,
        uname: signupForm.text,
        tel: signupForm.tel,
        location: {
          lng: location.latitude,
        lat: location.longitude,
        alt: 0
        },
        password: signupForm.password,
        isProvider: isProvider,
        desc: signupForm.desc,
        service: signupForm.service
      }
      
      client.create(userDoc).then(() => {
        setIsSending(false)
        navigate(snap.isprovider ? '/profile' : '/dashboard')
      }).catch((err) => {
        if (err) throw state.msg = `user with tel ${signupForm.tel} already exist`
      })
    }
  }

  const imgPath = `/src/assets/imgs/sign${snap.step}.png`

  const generateStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 onChange={handleChange} />
        break;
      case 2:
        return <Step2 onChange={handleChange} />
        break;
      case 3:
        return <Step3 onChange={handleChange} />
        break;
      case 4:
        return <Step4 isSending={isSending} onClick={handleSubmit} />
        break;
      default:
        return null
        break;
    }
  }
  

  return (
    <section className="sign up overflow-hidden transition-all">
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} key={snap.step} transition={{duration: .6}} style={{backgroundImage: `url(${imgPath})`}} className="cover overflow-hidden"></motion.div>
      <div className="form">
        {snap.msg && <Model msg={snap.msg} />}
        <motion.form 
          onSubmit={(e) => {e.preventDefault()}} 
          initial={{opacity: 0, x:200}} 
          animate={{opacity: 1, x:0}} 
          key={snap.step} 
          transition={{duration: .6}} 
          className='w-full'
        >
          { generateStep(snap.step) }
        </motion.form>
      </div>
    </section>
  )
}

export default SignUp