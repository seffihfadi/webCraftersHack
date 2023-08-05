import { Head } from '../'
import { useSnapshot } from 'valtio'
import state from '../../store'
import { Link } from 'react-router-dom'

const Step1 = ({ onChange }) => {

  const snap = useSnapshot(state)
  return (
    <div className="content">
      <Head head='Sign Up' desc='Are You ?' />
      <div className="flex justify-between items-center">
        <button 
          value={false} 
          name='isprovider' 
          onClick={() => {state.step = snap.step + 1}} 
          onMouseDown={onChange} 
          className="btn-choise"
        >
          <span className="material-symbols-rounded">agriculture</span>
          A Farmer
        </button>
      </div>
      <div className="or">or</div>
      <div className="flex justify-between items-center">
        <button 
          value={true} 
          name='isprovider' 
          onClick={() => {
            state.step = snap.step + 1
            state.isprovider = true
          }} 
          onMouseDown={onChange} 
          className="btn-choise"
        >
          <span className="material-symbols-rounded">local_shipping</span>
          A Services Provider
        </button>
      </div>
      <div className="flex justify-between items-center mt-10">
        <p>Have an account ?</p>
        <Link to='/signin' className="text-[#3BB143]">Login</Link>
      </div>
    </div>
  )
}

export default Step1