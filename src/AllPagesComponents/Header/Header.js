import React from 'react'
import User from '../User'
import AppName from './AppName'
import UserIcon from '../../Assets/Icons/user-header.svg'

import '../Header/Header.css';

function Header({title}) {
    return (
        <header className='header'>
            <div className="header_inner">
                <div className="app_name_wrapper">
                    <AppName>{title}</AppName>
                </div>
                <div className="header_user_wrapper">
                    <User>
                        <img src={UserIcon} alt="user-icon" />
                    </User>
                </div>
            </div>
        </header>
    )
}

export default Header