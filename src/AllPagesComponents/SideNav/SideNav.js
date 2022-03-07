import React from 'react'

import UserIcon from '../../Assets/Icons/user-sidenav.svg'

import User from '../User'
import NavBar from './NavBar'

import '../SideNav/SideNav.css'

function SideNav() {
    return (
        <>
            <div className="sidenav_user_wrapper">
                <User>
                    <div className="icon">
                    <img src={UserIcon} alt={UserIcon} />
                    </div>
                    <p>Name</p>
                    <span className="admin_status">Super Admin</span>
                </User>
            </div>
            <div className="navbar_wrapper">
                <NavBar />
            </div>
        </>
    )
}

export default SideNav