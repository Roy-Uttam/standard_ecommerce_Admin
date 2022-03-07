// React Module Imports
import React from 'react';
import {Link} from 'react-router-dom'

// Import Image Icons
import Navicon from '../../Assets/icons/nav-icon.svg';

import '../../AllPagesComponents/Navbar/NavbarLargeDevice/NavbarLargeDevice.css';



function Logo() {
    return (
        <div className='logo'>
            <Link to="/"><img src={Navicon} alt='nav-icon'/></Link>
        </div>
    );
  }
  
  export default Logo;
  