// React Module Importsc
import React from 'react';

// Import Image Icons
import Searchicon from '../../../Assets/icons/Search.svg';

import '../NavbarLargeDevice/NavbarLargeDevice.css';


function Search(props) {
    const {show, handlesearch} = props;
    return (
         <form action="">
            <input className={show? "search_Field show": "search_Field"} type="text" placeholder="Search.." name="search"/>
            <button onClick={handlesearch} type="submit"><img src={Searchicon} alt='Searchicon'/></button>
        </form> 
    );
  }
  
  export default Search;
  