// React Module Importsc
import React from 'react';
import { Link } from 'react-router-dom';

// Import Image Icons
import Usericon from '../../../Assets/icons/icon_User.svg';
import ArrowDown from '../../../Assets/icons/small-down-arrow.svg'
import ShopIcon from '../../../Assets/icons/icon-Shop.svg'

function User({ showCart, setShowCart, cartItems }) {

    return (
        <div className='user'>
            <div className="cart" onClick={() => setShowCart(!showCart)}>
                <img src={ShopIcon} alt='User icon' />
                <div className={cartItems[0].qty === 0 ?  "cart_total cart_hide" : "cart_total"}>
                    <h4>{cartItems.length && cartItems[0].qty}</h4>
                </div>
            </div>
            <img className='user_icon' src={Usericon} alt='User icon' />
            <p>Hello, User <img className='down_arrow' src={ArrowDown} alt='ArrowDown' />
                <span className="user-content">
                    <Link className="dropbtn" to="/profile">My Profile</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/my-orders">Orders</Link>
                    <Link to="/sign-in">Sign Out</Link>
                </span>
            </p>
        </div>
    );
}

export default User;
