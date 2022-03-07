// React Module Imports
import React from 'react';

import "./BlackButton.css"

export default function BlackButton(props)
{

  const {onClick}= props;
    return <>
      <button className="Common_btn" onClick={onClick}>
          {props.children}
        </button>
    </>
}
