import {Link} from 'react-router-dom'
import { useSnapshot } from 'valtio'
import state from '../../store'

import Ser from './Ser'

const Service = ({ user }) => {
  const snap = useSnapshot(state)

  
  return (
    <div className='py-20'>
      <div className='flex justify-between items-center my-10'>
        <h2 className='text-xl capitalize'> Services That {user?.uname} Provide :  </h2>
        
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 grid-row-2 md:grid-row-3 gap-8'>
        {user?.services.map((service, index) => ( <Ser key={index} service={service} user={user} /> ))}
      </div>
    </div>
  )
}

export default Service