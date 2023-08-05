import farmer from '../assets/farmer.png'

const AddService = () => {

  return (
  <>  
    <div className=" flex bg-[#032F3C] text-white">
      <img src={farmer} className='h-[660px] w-[370px] lg:w-[500px] hidden md:block '/>
      <div className='flex-1 mt-14'>
        <h2 className='text-2xl text-center mt-10 mb-4'> Add service   </h2>
        <form method='POST'
        className='flex flex-col items-center mb-20  gap-8' 
        > 
          <div>
            <h2 className='py-4'> Service title </h2>
            <div className='relative'>
              <i className='material-symbols-rounded text-[#032F3C] absolute top-[7px] left-2'>title</i>
              <input className='bg-[#D9D9D9] pl-9 py-5 w-[350px] h-9 focus:outline-none text-[#032F3C] rounded-xl ' type='Text' required  placeholder='Service title'/>
            </div>
          </div>
          <div>
            <h2 className='pb-4'> Services description</h2>
            <div className='relative'>
              <i className='material-symbols-rounded text-[#032F3C] absolute top-3 left-2 '>info</i>
              <textarea className='bg-[#D9D9D9] pl-9 py-3 w-[350px] rounded-2xl h-[150px] text-[#032F3C] focus:outline-none' placeholder='Service description' required />
            </div>
          </div>
          <input type='submit' className='btn-primary hover:cursor-pointer' value ='Add service'/> 
        </form>
      </div>
    </div>
  </>
)}

export default AddService