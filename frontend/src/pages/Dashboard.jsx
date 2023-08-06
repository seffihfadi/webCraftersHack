import { useNavigate, NavLink } from 'react-router-dom'
import { Logo } from '../components'
import { userQuery } from "../config/serverData"
import { useEffect, useState } from "react"
import { client } from '../config/sanity'
import { useSnapshot } from 'valtio'
import state from '../store'
import { getCityFromCord } from '../components/GetCityFromCord'
const Dashboard = () => {
  const snap = useSnapshot(state)
  const navigate = useNavigate()
  const [farmer, setFarmer] = useState(null)
  
  useEffect(() => {
    const uniqID = localStorage.getItem('agroland-uid')
    if (uniqID) {
      client.fetch(userQuery(uniqID)).then((data) => {
        if (data.length > 0) {
          setFarmer(data[0])
          state.tel = data[0].tel
          snap.farmerName = data[0].uname
        }else{
          localStorage.removeItem('agroland-uid')
          navigate('/signin')
        }
      })
    }else{
      navigate('/signin')
    }
    
  }, [])

  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCityFromCord(farmer?.location?.lng,farmer?.location?.lat);
        setCityData(data);
      } catch (error) {
        console.log('Error fetching city data');
      }
    };
    fetchData();
  }, [farmer?.location?.lng,farmer?.location?.lat]);

  const [catagorie,setCatgorie] = useState('FeedBack')

  return (
    <div className="dashboard">
      <nav>
        <Logo />
        <NavLink activeclassname='active' to='/dashboard'>
          <span className="material-symbols-rounded">home</span>
          <h5>Dashboard</h5>
          
        </NavLink>
        <NavLink activeclassname='active' to='/search'>
          <span className="material-symbols-rounded">search</span>
          <h5>Search</h5>
        </NavLink>
      </nav>
      <div className="w-full bg-[#00231D] text-white px-10">
        <h2 className='text-3xl text-center py-10 '> Hello {farmer?.uname } </h2>
        <div className='flex md:gap-0 my-20 justify-center lg:justify-between flex-wrap'>
          <div className='bg-[#D9D9D9] mb-14 text-black p-7 w-[350px]  rounded-2xl h-[500px] '>
            <div className=' relative w-full py-4'>
              <img className='absolute left-4 top-[-80px] rounded-[50%] w-[100px] h-[100px]' src='https://gonzalesequipment.com/wp-content/uploads/2018/05/farm-machines-and-their-uses.jpg' />
            </div>
            <div>Hello {farmer?.uname }</div>
            <div className='text-2xl'> Farmer </div>
            <div className='pb-3'> {console.log(farmer)} </div>
            <div className='py-3'> Location : {cityData?.display_name} </div>
            <div className='py-3'>Number : {farmer?._id}</div>
            <div className='py-3'>Description : {farmer?._desc}</div>
          </div>
          <div className='bg-[#D9D9D9] text-black p-7 w-[450px]   rounded-2xl h-[500px]'>
            <div className='flex justify-between'>
              <button className='btn-primary' onClick={()=>{setCatgorie('Activities')}}> Activities </button>
              <button className='btn-primary' onClick={()=>{setCatgorie('FeedBack')}}> FeedBack </button>
              <button className='btn-primary' onClick={()=>{setCatgorie('Workers')}}> Workers </button>
            </div>
            <div className='bg-white rounded-2xl my-6 p-4'>
              {
                catagorie === 'FeedBack' && 
                <div className='flex flex-col gap-6 max-h-[360px] overflow-y-auto'>
                  <div className='rounded-xl p-2 bg-[#D9D9D9]'>
                    <div className='flex gap-4 py-2'>
                      <img className='w-5 h-5 rounded-[50%]' src='https://gonzalesequipment.com/wp-content/uploads/2018/05/farm-machines-and-their-uses.jpg' />
                      <div> Safie zegtouf</div>
                    </div>
                    <div className='flex gap-4 pb-4'> 
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i> 
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i> 
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i>
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i>
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i>
                    </div>
                    <div> Outstanding work ethic! Thank you for your dedication. </div>
                  </div>
                  <div className='rounded-xl p-2 bg-[#D9D9D9]'>
                    <div className='flex gap-4 py-2'>
                      <img className='w-5 h-5 rounded-[50%]' src='https://gonzalesequipment.com/wp-content/uploads/2018/05/farm-machines-and-their-uses.jpg' />
                      <div> saoual zakarya</div>
                    </div>
                    <div className='flex gap-4 pb-4'> 
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i> 
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i> 
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i>
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i>
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i>
                    </div>
                    <div> Outstanding work ethic! Thank you for your dedication. </div>
                  </div>
                  <div className='rounded-xl p-2 bg-[#D9D9D9]'>
                    <div className='flex gap-4 py-2'>
                      <img className='w-5 h-5 rounded-[50%]' src='https://gonzalesequipment.com/wp-content/uploads/2018/05/farm-machines-and-their-uses.jpg' />
                      <div> ramzi gamech</div>
                    </div>
                    <div className='flex gap-4 pb-4'> 
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i> 
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i> 
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i>
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i>
                      <i className='material-symbols-rounded text-yellow-400 w-4 h-4'>star_rate</i>
                    </div>
                    <div> Outstanding work ethic! Thank you for your dedication. </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard