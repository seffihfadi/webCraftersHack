import {Link} from 'react-router-dom'


const Service = () => {
  const services = [{title:'Harvesting machine',description:'These is professional maching to hervest your land and profit your money '},
  {title:'Planted patatoes machine',description:'These is professional maching to planted your land and profit your money '}]
  return (
    <div>
      <div className='flex justify-between items-center mb-5'>
        <h2 className='text-2xl mt-10 mb-4'> Services :  </h2>
        <button className="btn-primary h-10"><Link to='/add-service'> Add services </Link></button>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 grid-row-2 md:grid-row-3 gap-8'>
        {services.map((service, index) => (
          <div key={index} className='bg-white p-8 rounded-lg shadow-lg '>
            <h3 className="text-center pb-4 text-2xl text-[#032F3C] ">{service.title}</h3>
            <p className=" text-green-800">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service