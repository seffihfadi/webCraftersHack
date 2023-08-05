import { Input, Head } from '../'
import { useSnapshot } from 'valtio'
import state from '../../store'
const Step3 = ({ onChange }) => {
  const snap = useSnapshot(state)
  return (
    <div className="content">
      <Head head='Sign Up' desc='What kind of Service do you Provide' />
      <div className="grp">
        <label htmlFor="service">Service</label>
        <select defaultValue='' onChange={onChange} name="service" id='service'>
          <option value=""></option>
          <option value="expert">expert</option>
          <option value="worker">worker</option>
          <option value="machines">rental of machines and tools</option>
          <option value="transport">transportation</option>
        </select>
        <span className="material-symbols-rounded">handyman</span>
      </div>
      <div className="grp">
        <label htmlFor="desc">Description</label>
        <textarea onChange={onChange} name="desc" id="desc" cols="30" rows="8" placeholder='describe your service' required={true}></textarea>
        <span className="material-symbols-rounded">description</span>
      </div>



      <div className="flex justify-between items-center">
        <button onClick={() => {state.step = snap.step + 1}} className="btn-primary ml-auto">Next</button>
      </div>
    </div>
  )
}

export default Step3