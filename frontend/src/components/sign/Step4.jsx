import { Head } from '../'
const Step4 = ({ isSending, onClick }) => {
  return (
    
    <div className="content">
      <Head head='Welcome' desc='Click Submit to Join Us' />
      <button onClick={onClick} 
        className="btn-primary p-3  w-full my-5"
        disabled={isSending}
      >
        {isSending ? 'Sending...' : 'Submit'}
      </button>
    </div>
  )
}

export default Step4