import Swiper from 'swiper';
import { useEffect, useState } from 'react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import Service from '../components/profile/Service';
import { getCityFromCord } from '../components/GetCityFromCord';
import { Logout } from '../components';
import { client } from '../config/sanity';
import { useParams, useNavigate } from 'react-router-dom';
import { userByTelQuery } from '../config/serverData';
import { useSnapshot } from 'valtio'
import state from '../store';


const Profile = () => {
  const snap = useSnapshot(state)
  const navigate = useNavigate()
  const { id } = useParams()
  const [user, setUser] = useState(null)
  let lat = 0
  let lon = 0

  useEffect(() => {
    client.fetch(userByTelQuery(id)).then((data) => {
      if(data.length > 0) {
        console.log('data[0]', data[0])
        setUser(data[0])
        lat = data[0].location.lat
        lon = data[0].location.lng
      }else{
        navigate('/search')
      }
    })
  }, [])

  const [cityData, setCityData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCityFromCord(lat, lon);
        setCityData(data);
        console.log('cityData', cityData)
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



  const url = ['https://gonzalesequipment.com/wp-content/uploads/2018/05/farm-machines-and-their-uses.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55S_Ff6_mI2qyHItL4fTwvM4qrCh8B94hFkMGP5AvswIABraQ1_EZnM1daUwF6S7l63o&usqp=CAU',
  'https://khetigaadi.com/blog/wp-content/uploads/2018/08/Mechanization-of-Indian-Agriculture-1024x591-1_800x450.jpg'
  ,'https://i.ytimg.com/vi/d5PTKHRw2FQ/sddefault.jpg']
  return (
      <div className='container'>
        <div className='flex justify-between items-center py-10'>
          <h2 className='text-3xl capitalize'> {snap.uid === user?.uniqID && 'Hello'} {user?.uname}</h2>
          {snap.uid === user?.uniqID && <div className='flex justify-center items-center gap-5'>

            <div className='cursor-pointer' onClick={()=>{setActive(!active)}}>
              <i className='material-symbols-rounded'>Notifications</i>
              {active && 
                <div className='relative'>
                  <div className='absolute w-[350px] border-[1px] border-gray-50 rounded-lg top-5 right-0 overflow-y-auto z-50 bg-[#032F3C] text-white shadow-xl'>
                    { notification.map((not,index)=>(
                        <div 
                          key={index} 
                          className='px-5 py-2 border-b-[1px] border-solid border-gray-50 last-of-type:border-0 flex justify-between'
                        > 
                          {not} 
                        </div>
                    ))
                    }
                  </div>
                </div>}
            </div>
            
            <Logout />
          </div>}
          
        </div>
        <div className=' flex lg:flex-row gap-20 items-center flex-col'>
            <swiper-container>
              <div className="swiper w-[420px] h-[350px] lg:h-[300px] lg:w-[400px] rounded-lg">
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
          
              <h3 className='py-2 capitalize'> Type of service : {user?.service} </h3>
              <h3 className='py-2 capitalize'> Phone Number : {user?.tel} </h3>
              {cityData != null && <h3 className='py-2 capitalize'> Location  : {cityData?.display_name } {cityData?.address?.region} {cityData?.address?.state } {cityData?.address?.country} </h3>}
              <h3 className='py-2 capitalize'> Description : {user?.desc} </h3>
            </div>
        </div>
        {user?.services && <Service user={user} />}
        
      </div>
  )
}

export default Profile