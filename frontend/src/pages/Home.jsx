import { Footer, Header } from '../components'
import { Link } from 'react-router-dom'
import background from '../assets/img.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import instgram from '../assets/instgram.png'
const Home = () => {
  const backgroundStyles = {
    backgroundImage: `url(${background})`, // Use template literal to insert the image URL
  };


  return (
    <div className='text-white'>
      <div className='md:px-[140px] px-20 pb-10 ' style={backgroundStyles}>
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
      {/*   our service part  */}
      <div className='bg-[#032F3C] md:px-[140px] px-20 pb-5'>
        <h2 className='text-3xl text-center pt-24 pb-8'> Our service </h2>
        <p>At Agroland, we understand that successful farming requires more than just passion—it
           demands access to the right resources and skilled professionals. 
           Our service page is dedicated to meeting all your farming needs under one roof.</p>

        {/* service */}
        <div className='relative my-14'>
          <h2 className='absolute btn-primary top-[-22px] left-16'> <i className='material-symbols-rounded mx-2'>Motorcycle</i>  Materials</h2>
          <p className='bg-[#D9D9D9] text-black px-8 py-8 rounded-2xl'>From top-quality seeds and fertilizers to cutting-edge machinery, we provide a wide range of agricultural
             materials to boost your productivity and ensure healthy crop growth.</p>
        </div>
        {/* service */}
        <div className='relative my-14'>
          <h2 className='absolute btn-primary top-[-22px] left-16'> <i className='material-symbols-rounded mx-2'>Engineering</i>  Workers </h2>
          <p className='bg-[#D9D9D9] text-black px-8 py-8 rounded-2xl'>Finding reliable and skilled workers for your farm is essential. Our platform connects you with experienced laborers, technicians, 
          and experts who will work diligently to support your farming endeavors.</p>
        </div>
        {/* service */}
        <div className='relative my-14'>
          <h2 className='absolute btn-primary top-[-22px] left-16'> <i className='material-symbols-rounded mx-2'>Opacity</i>  Water </h2>
          <p className='bg-[#D9D9D9] text-black px-8 py-8 rounded-2xl'>Proper water management is vital for a thriving farm.
           Our experts offer tailored solutions for irrigation systems and water conservation,
           ensuring that your crops receive the right amount of water at the right time.</p>
        </div>
      </div>
      {/*   about us part  */}
      <div className='md:px-[140px] px-20 pb-20 bg-[#032F3C]'>
      <h2 className='text-3xl text-center pt-24 pb-16 '> About us </h2>
        <div className='flex flex-wrap justify-center gap-20 pt-16'>
          <div className='relative'>
            <div className='absolute w-[120px] h-[120px] left-11 top-[-65px] '><img src={img1} /></div>
            <div className='bg-[#85D027] w-fit rounded-2xl p-7 pt-14'>
              <h2 className='py-2 text-center'> Ramzi Gameche </h2>
              <h4 className='py-2 text-center'> Graphique designer </h4>
              <div className='flex gap-2 py-2 justify-center'><img src={facebook}/>  <img src={linkedin}/><img src={instgram}/><img src={github}/></div>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute w-[120px] h-[120px] left-[68px] top-[-65px] '><img src={img2} /></div>
            <div className='bg-[#85D027] w-fit rounded-2xl p-7 pt-14'>
              <h2 className='py-2 text-center'> Fadi Seffih  </h2>
              <h4 className='py-2 text-center'> Full-stack web developer </h4>
              <div className='flex gap-2 py-2 justify-center'><img src={facebook}/>  <img src={linkedin}/><img src={instgram}/><img src={github}/></div>
            </div>
          </div><div className='relative'>
            <div className='absolute w-[120px] h-[120px] left-11 top-[-65px] '><img src={img3} /></div>
            <div className='bg-[#85D027] w-fit rounded-2xl p-7 pt-14'>
              <h2 className='py-2 text-center'> Saoual Zakarya </h2>
              <h4 className='py-2 text-center'> Front-end develper </h4>
              <div className='flex gap-2 py-2 justify-center'><img src={facebook}/>  <img src={linkedin}/><img src={instgram}/><img src={github}/></div>
            </div>
          </div><div className='relative'>
            <div className='absolute w-[120px] h-[120px] left-8 top-[-65px] '><img src={img4} /></div>
            <div className='bg-[#85D027] w-fit rounded-2xl p-7 pt-14'>
              <h2 className='py-2 text-center'> Benyahia nasro </h2>
              <h4 className='py-2 text-center'> Manager </h4>
              <div className='flex gap-2 py-2 justify-center'><img src={facebook}/>  <img src={linkedin}/><img src={instgram}/><img src={github}/></div>
            </div>
          </div><div className='relative'>
            <div className='absolute w-[120px] h-[120px] left-6 top-[-65px] '><img src={img5} /></div>
            <div className='bg-[#85D027] w-fit rounded-2xl p-7 pt-14'>
              <h2 className='py-2 text-center'> Celia  </h2>
              <h4 className='py-2 text-center'> Presenter </h4>
              <div className='flex gap-2 py-2 justify-center'><img src={facebook}/>  <img src={linkedin}/><img src={instgram}/><img src={github}/></div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
