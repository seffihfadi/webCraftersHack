import React from 'react'
import { Link } from 'react-router-dom'

import UnopDropdown from 'unop-react-dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const handler = ()=>{  }
  return (
    <div className='flex justify-between h-16 items-center'>
        <Link to='/' > Logo </Link>
        <div className='hidden md:flex gap-12'>
            <Link to='/home' >Home</Link>
            <Link to='/service'> Service</Link>
            <Link to='/about' > About us</Link>
            <Link to='/contact' > Contact </Link>
        </div>
        <div className='md:hidden'>
            <UnopDropdown
            onAppear={handler}
            onDisappearStart={handler}
            trigger={<button className="AnimatedDropdownButton flex gap-6 items-center">
               <FontAwesomeIcon icon={faList} /> 
            </button>}
            delay={300}
            align="CENTER"
            hover
            >
            <div className='drop-down'>
                <div> <Link to='/home' >Home</Link></div>
                <div><Link to='/service'> Service</Link></div>
                <div><Link to='/about' > About us</Link></div>
                <div><Link to='/contact' > Contact </Link></div>
            </div>
            </UnopDropdown>
        </div>
        
    </div>
  )
}


export default NavBar