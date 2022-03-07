// React Module Imports
import React,{useState} from 'react';

// Common Components Imports
import Menu from '../NavbarComponents/Menu';
import Search from '../NavbarComponents/Search';
import User from '../NavbarComponents/User';

// Import Image Icons
import Logo from '../../../CommonComponents/Logo/Logo';

import './NavbarLargeDevice.css';



function NavBar({showCart, setShowCart, cartItems}) {
   const [show, setShow] = useState(false);
  
  function handlesearch (e){
      e.preventDefault()
    setShow(!show)
  }
   
    return (
      <nav className='large_navbar'>
        <div className="navbar">
        <div className='nav_links'>
            <Logo/>
            <Menu show= {show}/>
          </div>
          <div className='nav_search'>
            <Search show= {show} handlesearch = {handlesearch}/>
            <User showCart= {showCart} setShowCart= {setShowCart} cartItems={cartItems} />
          </div>
        </div>
       </nav>
    );
  }
  
  export default NavBar;
  