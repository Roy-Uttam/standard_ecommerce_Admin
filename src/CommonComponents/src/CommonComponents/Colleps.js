// React Module Imports
import {Checkbox} from '@createnl/grouped-checkboxes';
import React, { useEffect, useState } from 'react';

// Import Image Icons
import Minusbtn from '../Assets/icons/minus-icon.svg';
import Plusbtn from '../Assets/icons/plus-bold.svg';

import './Colleps.css'

export default function Colleps({classes,selectCollaps,collapsed,collapsed_title,children}) {
  const [show, setShow] = useState(collapsed)
 useEffect(()=>{
  if(selectCollaps){ 
    setShow(true)
  }
 },[selectCollaps])
  return <>
          <div className="price_min_max categorys" >
              <div className="price_mm_content" onClick={() => setShow(!show)}>
                {!classes? <label className="chackbox_container">{collapsed_title}
                          <Checkbox name="Sub - Category 1" />
                          <span className="checkmark"></span>
                        </label> : ''}
                {classes? <h3>{collapsed_title}</h3> : ''}
                <img className='minus-btn' src={show ? Minusbtn : Plusbtn} alt="Minusbtn" />
              </div>
              <div className={show ? "content_options" : "content_options hide"}>
                {children}
              </div>
          </div>
        </>;
}
