// React Module Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Import Image Icons
import FavIcon from '../Assets/icons/favorite_icon.svg';
import Imgicon from '../Assets/icons/img-icon.svg';

export default function Card({ title, index, url }) {
  return <>
    <div className="card">
      <div className="card_icon">
        <Link to="#">
          <img src={FavIcon} alt="thumb" />
        </Link>
      </div>
      <Link to={`/product/${url}`}>
        <div className="card_img">
          <img src={Imgicon} alt="thumb"  />
        </div>
      </Link>
      <div className="card_footer">
        <div className="product_content">
          <h4>{title} {index} </h4>
          <p>product price</p>
        </div>
      </div>
    </div>
  </>;
}
