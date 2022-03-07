// React Module Imports
import React from 'react';

// Common Components Import
import Logo from '../../CommonComponents/Logo/Logo';

// Footer Components Import
import ContactInfo from './FooterComponents/ContactInfo';
import SocialIcons from './FooterComponents/SocialIcons';

// Own CSS Import
import './Footer.css';


export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_content">

          {/* logo */}
          <div className="footer_logo">
            <Logo />
          </div>

          {/* contacts information */}
          <div className="contacts_wrapper">
            <ContactInfo />
          </div>

          {/* social links wrapper */}
            <div className="social_wrapper">
              <SocialIcons />
            </div>

        </div>
      </div>
    </div>
  );
}
