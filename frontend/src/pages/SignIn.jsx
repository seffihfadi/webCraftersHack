import imgPath from '../assets/imgs/sign2.png'
import { Link, useNavigate } from 'react-router-dom'
import { Head, Input, Model } from '../components'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { client } from '../config/sanity'
import { userByUnQuery } from '../config/serverData'


import { useSnapshot } from 'valtio'
import state from '../store'

const SignIn = () => {
  const navigate = useNavigate()
  const snap = useSnapshot(state)
  const [sending, setSending] = useState(false)
  const [loginForm, setLoginForm] = useState({
    text: '',
    password: ''
  })
  const handleChange = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    
    setSending(true)
    //console.log('loginForm', loginForm)
    client.fetch(userByUnQuery(loginForm.text)).then((data) => {
      //console.log('data', data)
      setSending(false)
      if(data.length > 0) {  // fix it soon (move it to backend)
        if (data[0].password === loginForm.password) {
          localStorage.setItem('agroland-uid', data[0].uniqID)
          //console.log('data', data)
          navigate(data[0].isProvider ? '/profile' : '/dashboard')
        }else{
          state.msg = 'wrong password'
        }
      }else{
        state.msg = 'username doesn\'t exist'
      }
    })
  }
  return (
    <section className="sign in overflow-hidden transition-all">
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .6}} style={{backgroundImage: `url(${imgPath})`}} className="cover overflow-hidden"></motion.div>
      <div className="form">
        {snap.msg && <Model msg={snap.msg} />}
        <motion.form 
          
          initial={{opacity: 0, x:200}} 
          animate={{opacity: 1, x:0}}
          transition={{duration: .6}} 
          className='w-full'
          
        >
        <div className="content">
          <Head head='Login' desc='Hello Welcome Back' />
          <Input onChange={handleChange} name='text' title='Username' icon='signature' />
          <Input onChange={handleChange} name='password' title='Password' icon='password' />
          <div className="flex justify-between items-center">
            <Link to='/reset-password' className="text-[#3BB143]">forget password ?</Link>
            <button onClick={handleSubmit} className="btn-primary" disabled={sending}>{sending ? 'Auth...' : 'Login'}</button>
          </div>
          <div className="or">or</div>
          <div className="flex justify-between items-center">
            <p>Don't have an account ?</p>
            <Link to='/signup' className="text-[#3BB143]">Create Account</Link>
          </div>
        </div>
        </motion.form>
      </div>
    </section>
  )
}

export default SignIn