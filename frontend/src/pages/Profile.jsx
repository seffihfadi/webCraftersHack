import Swiper from 'swiper';
import { useEffect } from 'react';
import {   Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import Footer from '../components/Footer'
import Service from '../components/profile/Service';
const Profile = () => {

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

  const array= ['available','Employees',' 5 $','Algeria']
  const url = ['https://gonzalesequipment.com/wp-content/uploads/2018/05/farm-machines-and-their-uses.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55S_Ff6_mI2qyHItL4fTwvM4qrCh8B94hFkMGP5AvswIABraQ1_EZnM1daUwF6S7l63o&usqp=CAU',
  'https://khetigaadi.com/blog/wp-content/uploads/2018/08/Mechanization-of-Indian-Agriculture-1024x591-1_800x450.jpg'
  ,'https://i.ytimg.com/vi/d5PTKHRw2FQ/sddefault.jpg']
  return (
    <div>
      <div className='md:px-[140px] px-20 text-white bg-[#032F3C] pb-20'>
        <h2 className='text-3xl text-center pt-10 pb-16'> User profile  </h2>
        <div className=' flex md:flex-row justify-between items-center flex-col'>
          {/*  the photo */}
            <swiper-container>
              <div className="swiper h-[300px] w-[400px] rounded-3xl">
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
              <h2 className='py-6'>Status : <span className='text-[#339041]'> {array[0]} </span> </h2>
              <h3 className='py-4'> Type of service : { array[1] } </h3>
              <h3 className='py-4'> Hourly rate : { array[2] } </h3>
              <h3 className='py-4'> Location  : { array[3] } </h3>
            </div>
        </div>
        <Service/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Profile