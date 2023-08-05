import Swiper from 'swiper';
import { useEffect, useState } from 'react';
import {   Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import Footer from '../components/Footer'
import Service from '../components/profile/Service';
import { getCityFromCord } from '../components/GetCityFromCord';
const Profile = () => {
  
  let lat = 28.0339
  let lon = 1.6596

  const [cityData, setCityData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCityFromCord( lat, lon );
        setCityData(data);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchData();
  }, [lat, lon]);


  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Pagination,Navigation,Autoplay],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  // The notifications 
  const [active, setActive] = useState(false)
  const notification = ['you got a demand to job','thanj for joining as today',
  'it\'s 9:00pm you gotta gow','i hope you like our service','if you need somthing don\'t hesitate we always here for you ']

  const handleDeleteNotification = ()=>{
    console.log('delete')
  }



  const array= ['available','Employees',' 5 $','Algeria']
  const url = ['https://gonzalesequipment.com/wp-content/uploads/2018/05/farm-machines-and-their-uses.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55S_Ff6_mI2qyHItL4fTwvM4qrCh8B94hFkMGP5AvswIABraQ1_EZnM1daUwF6S7l63o&usqp=CAU',
  'https://khetigaadi.com/blog/wp-content/uploads/2018/08/Mechanization-of-Indian-Agriculture-1024x591-1_800x450.jpg'
  ,'https://i.ytimg.com/vi/d5PTKHRw2FQ/sddefault.jpg']
  return (
    <div>
      <div className='md:px-[140px] px-20 text-white bg-[#032F3C] pb-20'>
        <div className='flex justify-between items-center'>
          <h2 className='text-3xl pt-10 pb-16'> User profile  </h2>
          <div className='cursor-pointer' onClick={()=>{setActive(!active)}}>
            <i className='material-symbols-rounded'>Notifications</i>
            {active && 
              <div className='relative '>
                <div className='absolute w-[300px] h-[200px] rounded-2xl top-0 right-0 overflow-y-auto z-50 bg-white text-[#032F3C]'>
                  { notification.map((not,index)=>(
                      <div key={index} className='p-3 border-b-2 border-solid border-[#032F3C] flex justify-between'> {not} <button onClick={()=>{handleDeleteNotification()}}> <i className='material-symbols-rounded'>delete</i></button></div>
                  ))
                  }
                </div>
              </div>}
          </div>
        </div>
        <div className=' flex lg:flex-row gap-20 items-center flex-col'>
          {/*  the photo */}
            <swiper-container>
              <div className="swiper w-[420px] h-[350px] lg:h-[300px] lg:w-[400px] rounded-3xl">
                <div className="swiper-wrapper">
                  { url &&
                    url.map((ele,index)=>(
                      <div className="swiper-slide " key={index} >
                        <img src={ele} alt="machine" className='w-full h-full' />
                      </div>  
                    ))
                  }
                </div>
                <div className='swiper-button-next'></div>
                <div className='swiper-button-prev'></div>
                <div className="swiper-pagination"></div>
              </div>
            </swiper-container>
            <div className='flex flex-col'>
              {/*  to manage the notification */}
              <h2 className='py-6'>Status : <span className='text-[#339041]'> {array[0]} </span> </h2>
              <h3 className='py-4'> Type of service : { array[1] } </h3>
              <h3 className='py-4'> Hourly rate : { array[2] } </h3>
              <h3 className='py-4'> Location  : {cityData?.address?.region}   {cityData?.address?.state }   {cityData?.address?.country} </h3>
            </div>
        </div>
        <Service/>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile