import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { getCityFromCord } from './GetCityFromCord';
import { client } from '../config/sanity';
import { userByTelQuery } from '../config/serverData';
export const ProviderCard = (id) => {

  // const [cityData, setCityData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    client.fetch(userByTelQuery(id)).then((data) => {
      setUser(data[0])
      console.log(data[0])
    })
  }, [user?.uniqID])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getCityFromCord(user?.location?.lng,user?.location?.lat);
  //       setCityData(data);
  //     } catch (error) {
  //       console.log('Error fetching city data');
  //     }
  //   };
  //   fetchData();
  // }, [user?.location?.lng,user?.location?.lat,id]);

  return (
    <Link to={`/profile/${id}`} >
      <div className='bg-[#D9D9D9] py-4 flex flex-col justify-between  text-[#032F3C] px-3 rounded-2xl w-[250px] h-[350px] relative'>
      {user ? (
      <div className=' flex justify-around items-center'>
        {user.services[0]?.img.asset.url  && <img src={user.services[0]?.img.asset.url} className='rounded-[50%] w-[100px] h-[100px]'/>}
        <div> {user.uname}</div>
      </div>
      ) : (
        <div>Loading user data...</div>
      )}

        {user?.isAvailable && <div className='text-[#85D027] text-center'>{ user?.isAvailable ? 'available' : 'unavailable' }  </div>}
         {user?.services[0] &&<div> <div> service: {user?.services[0]?.title} </div> 
        <div>location :Setif algeria  </div>
        <div className='bg-[#85D027] w-fit py-2 px-3 text-[#000000] mx-auto rounded-xl'>Price per hour : {user?.services[0]?.price} DA </div> </div>}
        
      </div>
    </Link>
  )
}
