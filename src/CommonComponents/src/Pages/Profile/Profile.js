// React Module Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Common Components Imports
import ProfilePicture from '../../CommonComponents/ProfilePicture';

import './Profile.css';


function Profile() {
    return (
        <>
            <section className='profile_page page_padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='column'>
                            <div className='edit_profile_view'>
                                <ProfilePicture />
                                <Link to='/profile-edit' className='edit_profile_link'>EDIT PROFILE</Link>
                            </div>
                        </div>
                        <div className='column'>
                            <div className='personal_info_view pd_info_view'>
                                <h4>Personal Information</h4>
                                <ul>
                                    <li>
                                        <p>name</p>
                                        <h6>Sheehan Rahman</h6>
                                    </li>
                                    <li>
                                        <p>DATE OF BIRTH</p>
                                        <h6>24 May, 1984</h6>
                                    </li>
                                    <li>
                                        <p>EMAIL ADDRESS</p>
                                        <h6>sheehanvy@gmail.com</h6>
                                    </li>
                                    <li>
                                        <p>PHONE NUMBER</p>
                                        <h6>+8801796421891</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='column'>
                            <div className='delivery_address_view pd_info_view'>
                                <h4>Delivery Address</h4>
                                <ul>
                                    <li>
                                        <p>STREET ADDRESS</p>
                                        <h6>Niketan, Gulshan, Dhaka</h6>
                                    </li>
                                    <li>
                                        <p>AREA</p>
                                        <h6>Gulshan</h6>
                                    </li>
                                    <li>
                                        <p>CITY</p>
                                        <h6>DHAKA</h6>
                                    </li>
                                    <li>
                                        <p>ZIP CODE</p>
                                        <h6>1260</h6>
                                    </li>
                                </ul>
                                <Link to='/delivery-address-all' className='view_all_link'>view all</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;
