import { Input, Head } from '../'
import { useSnapshot } from 'valtio'
import state from '../../store'

const Step2 = ({ onChange }) => {
  const snap = useSnapshot(state)

  return (
    <div className="content">
      <Head head='Sign Up' desc='Fill Your Informations' />
      <Input onChange={onChange} name='text' title='Username' icon='signature' />
      <Input onChange={onChange} name='tel' title='Phone Number' icon='phone_iphone' />
      <Input onChange={onChange} name='password' title='Password' icon='password' />
      <div className="flex justify-between items-center">
        <button onClick={() => {
          state.step = !snap.isprovider ? snap.step + 2 : snap.step + 1
          }} 
          className="btn-primary ml-auto"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Step2