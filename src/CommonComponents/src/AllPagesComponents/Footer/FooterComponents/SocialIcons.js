// React Module Imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Icons Imports
// import Facebook from '../../../Assets/icons/facebook.svg';
// import Instagram from '../../../Assets/icons/instagram.svg';
// import LinkedIn from '../../../Assets/icons/linkedin.svg';
// import Youtube from '../../../Assets/icons/youtube.svg';

import './SocialIcons.css';


function SocialIcons() {

  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    fetch(`${window.baseUrl}social-link`)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        else {
          throw new Error(res.status)
        }
      })
      .then(data => setSocialLinks(data))
      .catch((error) => {
        console.log(error);
      })

  }, [])


  return (
    <>
      <div className="social_Icons_wrapper">
        {socialLinks.status === true ? socialLinks.data.map((data, index) =>
          <Link to={data.link} key={index}><img src={data.icon} alt={data.name} /></Link>

        ) :
          <p>no data found</p>
        }
        {/* <Link to='#'><img src={Facebook} alt="facebook" /></Link>
        <Link to='#'><img src={Instagram} alt="instagram" /></Link>
        <Link to='#'><img src={LinkedIn} alt="linkedin" /></Link>
        <Link to='#'><img src={Youtube} alt="youtube" /></Link> */}
      </div>
    </>
  )
}

export default SocialIcons