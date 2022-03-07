// React Module Imports
import React from 'react';

import LandPhone from '../../../Assets/icons/land-phone.svg';
import Envilope from '../../../Assets/icons/envilope.svg';
import Location from '../../../Assets/icons/location.svg';

import './ContactInfo.css';

function ContactInfo() {
    return (
        <>
            <div className="contact_info_wrapper">
                <ul>
                    <li>
                        <img src={LandPhone} alt="land phone" />
                        <p>882-587-3025</p>
                    </li>
                    <li>
                        <img src={Envilope} alt="envilope" />
                        <p>info@form.com</p>
                    </li>
                    <li>
                        <img src={Location} alt="location" />
                        <p>6116 Willa River Suite 610</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ContactInfo