import background from '../assets/footer.png'
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import instgram from '../assets/instgram.png'
const Footer = () => {
  const backgroundStyles = {
    backgroundImage: `url(${background})`, // Use template literal to insert the image URL
  };

  return (
    <div style={backgroundStyles} className='md:px-[140px] px-20 pb-16 text-white bg-cover bg-no-repeat'>
      <h2 className='text-3xl text-center pt-20 pb-10 '> Contact us </h2>
      <div className='flex md:flex-row gap-10 flex-col  md:justify-between'>
        <div className='flex-1'>
          <h2 style={{ color: 'rgba(133, 208, 39, 1)' }} className='text-4xl py-5 text-center'> Agrouland</h2>
          <div className='flex gap-2 py-2 justify-center'><img src={facebook}/>  <img src={linkedin}/><img src={instgram}/><img src={github}/></div>
        </div>
        <div className='md:w-[400px] w-[300px] text-center mx-auto flex-1'>
          <p>
            "The farmer is the only man in our economy who buys everything at retail, 
            sells everything at wholesale, and pays the freight both ways." 
            - John F. Kennedy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer