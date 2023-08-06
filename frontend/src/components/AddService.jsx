import farmer from '../assets/farmer.png'
import { Head, Input, Model } from '../components'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { client } from '../config/sanity'
import { v4 } from 'uuid'
import { useSnapshot } from 'valtio'
import state from '../store'

const AddService = () => {
  const { id } = useParams()
  const snap = useSnapshot(state)
  const navigate = useNavigate()
  const [isSending, setIsSending] = useState(false)
  const [addForm, setAddForm] = useState({
    text: '',
    price: '',
    desc: '',
  })
  const handleChange = (e) => {
    setAddForm({...addForm, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(addForm.text == '' || addForm.desc == '' || addForm.price == ''){
      state.msg = 'make sure to fill out the form'
    }else{
      setIsSending(true)
      const newServiceID = v4()
      const serviceDoc = {
        _id: newServiceID,
        _type: 'service',
        price: addForm.price,
        title: addForm.text,
        desc: addForm.desc,
        isAvailable: true

      }
      client
        .create(serviceDoc)
        .then(() => {
          client
            .patch(id)
            .setIfMissing({services: []})
            .insert('before', 'services[-1]', [{
              _key: v4(),
              id: newServiceID
            }])
            .commit().then(()=>{
              
              setIsSending(false)
              navigate(`/profile/${id}`)
            })            
          })
    } 
          
  }
  return (
    <section className="sign overflow-hidden transition-all">
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .6}} style={{backgroundImage: `url(${farmer})`}} className="cover overflow-hidden"></motion.div>
      <div className="form">
        {snap.msg && <Model msg={snap.msg} />}
        <motion.form 
          
          initial={{opacity: 0, x:200}} 
          animate={{opacity: 1, x:0}}
          transition={{duration: .6}} 
          className='w-full'
          
        >
        <div className="content">
          <Head head='Add Service' desc='Add Another Service' />
          <Input onChange={handleChange} name='text' title='Sevice Title' icon='construction' />
          <div className="grp">
            <label htmlFor='price'>Price</label>
            <input onChange={handleChange} name='price' type='number' placeholder='Enter The Price Per Hour' required={true} />
            <span className="material-symbols-rounded">euro</span>
          </div>
          
          <div className="grp">
            <label htmlFor="desc">Description</label>
            <textarea onChange={handleChange} name="desc" id="desc" cols="30" rows="5" placeholder='describe your service' required={true}></textarea>
            <span className="material-symbols-rounded">description</span>
          </div>
          <div className="flex justify-between items-center">
            <button disabled={isSending} onClick={handleSubmit} className="btn-primary ml-auto">{isSending ? 'Uploading...' : 'Add Service'}</button>
          </div>
        </div>
        </motion.form>
      </div>
    </section>
)}

export default AddService