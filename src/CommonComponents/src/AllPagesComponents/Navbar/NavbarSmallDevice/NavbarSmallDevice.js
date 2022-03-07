// React Module Imports
import React, { useState } from 'react';

// Common Components Imports
import Menu from '../NavbarComponents/Menu';
import Logo from '../../../CommonComponents/Logo/Logo';

// Import Image Icons
import ShopIcon from '../../../Assets/icons/icon-Shop.svg'
import Searchicon from '../../../Assets/icons/Search.svg';


import './NavbarSmallDevice.css';
import { Link } from 'react-router-dom';

export default function NavbarSmallDevice(props) {
  // const {cartItems} = props;

  const { showCart, setShowCart, cartItems} = props;
  const [showMenu, setShowMenu] = useState(false)
  const [show, setShow] = useState(false);
  function handlesearch (e){
    e.preventDefault()
  setShow(!show)
}

  return <>
      <nav className='small_navbar'>
        <div className="navbar">
            <div className={show? "nav_logo hide":"nav_logo"}>
              <Logo/>
            </div>
            <div className="nav_lists">
            <Link className={show? "view_shop hide":"view_shop"} to="/">View Shop</Link>
            <Menu showMenu= {showMenu} setShowMenu={setShowMenu}/>
          </div>
          <div className='nav_search'>
            <form action="">
              <input className={show? "search show":"search "} type="text" placeholder="Search.." name="search"/>
              <button onClick={handlesearch}><img src={Searchicon} alt='Searchicon'/></button>
            </form> 
            <div className="cart" onClick={() => setShowCart(!showCart)}>
                <img src={ShopIcon} alt='User icon' />
                <div className={cartItems[0].qty === 0 ?  "cart_total cart_hide" : "cart_total"}>
                <h4>{cartItems.length && cartItems[0].qty}</h4>
                </div>
            </div>
            <button className='menu_bar' onClick={()=>setShowMenu(!showMenu)}></button>
          </div>
        </div>
      </nav>
  </>;
}
