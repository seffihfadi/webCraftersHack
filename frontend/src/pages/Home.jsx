
//import { NavBar } from '../components'
import { Header } from '../components'
import { Link } from 'react-router-dom'
import background from '../assets/img.png'
const Home = () => {
  const backgroundStyles = {
    backgroundImage: `url(${background})`, // Use template literal to insert the image URL
  };


  return (
    <div className='md:px-[140px] px-20 pb-10 text-white' style={backgroundStyles}>
        <Header/>
        <p className='w-[300px ] font-bold md:w-[600px] leading-10 mt-[100px] md:mt-[140px]'>
        Welcome to<span style={{ color: 'rgba(133, 208, 39, 1)' }} className='text-3xl' > Agrouland</span>,
        where farmers and providers unite.
        Cultivating connections, harvesting success, day and night.
        Grow your network, sow the seeds of progress, far and wide.
        Join us now, and let prosperity in agriculture abide.
        </p>
        <div className='my-[50px] md:my-[120px]  flex justify-end'>
          <Link to='/signin' className="btn-primary">Get started</Link>
        </div> 
    </div>
  )
}

export default Home
