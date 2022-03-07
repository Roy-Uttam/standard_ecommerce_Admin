// React Module Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Common Components Imports
import Address from '../../CommonComponents/Address/Address';

import './DeliveryAddressAll.css';

function DeliveryAddressAll() {
  return (
    <>
      <section className="delivery_address_all page_padding">
        <div className="container">
          <div className="row">
            <div className="column_left">
              <div className="flex_row">
                <Address />
              </div>
            </div>
            <div className="column_right">
              <div className="address_add_new">
                <Link to="/checkout" className='add_new'>+ Add New</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeliveryAddressAll;
