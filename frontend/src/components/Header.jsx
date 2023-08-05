import React from 'react'
import { Link } from 'react-router-dom'
import UnopDropdown from 'unop-react-dropdown'
import logo from '../assets/logo.png'
const Header = () => {
  const handler = ()=>{  }
  return (
    <div className='flex justify-between h-16 items-center'>
        <a to='/' className='w-5 cursor-pointer h-5' > <img src={logo} /> </a>
        <div className='hidden md:flex gap-12'>
            <a className='hover:border-b-2 cursor-pointer hover:border-solid hover:border-[#3BB143] ' href='/'        >Home</a>
            <a className='hover:border-b-2 cursor-pointer hover:border-solid hover:border-[#3BB143] ' href='#services' > Service</a>
            <a className='hover:border-b-2 cursor-pointer hover:border-solid hover:border-[#3BB143] ' href='#about'    > About us</a>
            <a className='hover:border-b-2 cursor-pointer hover:border-solid hover:border-[#3BB143] ' href='#contact'  > Contact </a>
        </div>
        <div className='md:hidden'>
            <UnopDropdown
            onAppear={handler}
            onDisappearStart={handler}
            trigger={<button className="AnimatedDropdownButton flex gap-6 items-center">
               <i className='material-symbols-rounded' >menu</i>
            </button>}
            delay={300}
            align="CENTER"
            hover
            >
            <div className='drop-down'>
                <div><a className='hover:border-b-2 cursor-pointer hover:border-solid hover:border-[#3BB143] ' href='/'          >Home</a></div>
                <div><a className='hover:border-b-2 cursor-pointer hover:border-solid hover:border-[#3BB143] ' href='#services'  > Service</a></div>
                <div><a className='hover:border-b-2 cursor-pointer hover:border-solid hover:border-[#3BB143] ' href='#about'    > About us</a></div>
                <div><a className='hover:border-b-2 cursor-pointer hover:border-solid hover:border-[#3BB143] ' href='#contact'   > Contact </a></div>
            </div>
            </UnopDropdown>
        </div>
        
    </div>
  )
}

export default Header