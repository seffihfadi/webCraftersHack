import { client } from '../../config/sanity'
import { v4 } from 'uuid'
import { useSnapshot } from 'valtio'
import state from '../../store'
import { useNavigate } from 'react-router-dom'
import { Model } from '../../components'

const Ser = ({ user, service }) => {
  const navigate = useNavigate()
  const snap = useSnapshot(state)
  
  const handleRequest = () => {
    state.msg = 'your request has been sent'

    const requestDoc = {
      _type: 'requests',
      _id: v4(),
      farmer: snap.uid,
      serviceProvider: user.uniqID,
      service: service._id

    }
    client.create(requestDoc).then((data) => {
      console.log('data', data)
      navigate('/dashboard')
    })
  }
  return (
    
    <div className='overflow-hidden rounded-md shadow-lg'>
      {snap.msg && <Model msg={snap?.msg} />}
      <img className='w-full h-60' src={service?.img?.asset?.url} alt="" />
      <h3 className="px-3 my-4 text-xl text-[#032F3C] capitalize">{service?.title}</h3>
      <p className='px-3'>{service?.desc}</p>
      <p className='text-[#3BB143] px-3 my-5'>{service?.price}DZD / Hour</p>
      {snap.uid !== user?.uniqID && <button onClick={handleRequest} className='btn-primary m-4 float-right'>Request</button>}
    </div>
  )
}

export default Ser