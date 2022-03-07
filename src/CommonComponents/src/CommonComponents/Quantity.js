// React Module Imports
import React from 'react';

// Import Image Icons
import PlusBtn from '../Assets/icons/plus-1.svg';
import MinusBtn from '../Assets/icons/minus-1.svg';

import './Quantity.css';

export default function Quantity() {
  // const [update, setUpdate] = useState(1);
  // const{cartItems,toAdd} = props;
  return <>
    <div className="quantity">
      <button className="decrease"><img src={MinusBtn} alt="MinusBtn"/></button>
      <h3>1</h3>
      {/* there should be price insted of id */}
      <button className="increase" ><img src={PlusBtn} alt="PlusBtn" /></button>
    </div>
  </>;
}
