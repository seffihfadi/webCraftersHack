import farmer from '../assets/farmer.png'
import { Head, Input, Model } from '../components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const AddService = () => {

  const handleChange = () => {

  }
  const handleSubmit = () => {
    
  }
  return (
    <section className="sign overflow-hidden transition-all">
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .6}} style={{backgroundImage: `url(${farmer})`}} className="cover overflow-hidden"></motion.div>
      <div className="form">
        <motion.form 
          
          initial={{opacity: 0, x:200}} 
          animate={{opacity: 1, x:0}}
          transition={{duration: .6}} 
          className='w-full'
          
        >
        <div className="content">
          <Head head='Add Service' desc='Add Another Service' />
          <Input onChange={handleChange} name='text' title='Sevice Title' icon='construction' />
          <Input onChange={handleChange} name='text' title='Price Per Hour' icon='euro' />
          
          <div className="grp">
            <label htmlFor="desc">Description</label>
            <textarea onChange={handleChange} name="desc" id="desc" cols="30" rows="5" placeholder='describe your service' required={true}></textarea>
            <span className="material-symbols-rounded">description</span>
          </div>
          <div className="flex justify-between items-center">
            <button onClick={handleSubmit} className="btn-primary ml-auto">Add</button>
          </div>
          
        </div>
        </motion.form>
      </div>
    </section>
)}

export default AddService