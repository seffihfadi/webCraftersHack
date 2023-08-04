


const Service = () => {
  const services = [{title:'Harvesting machine',description:'These is professional maching to hervest your land and profit your money '},
  {title:'Planted patatoes machine',description:'These is professional maching to planted your land and profit your money '}]
  return (
    <div>
      <h2 className='text-2xl pt-10 pb-4'> Services :  </h2>
      <div className='grid grid-cols-3 grid-row-3 gap-8'>
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