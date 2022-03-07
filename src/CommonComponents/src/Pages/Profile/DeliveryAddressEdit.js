// React Module Imports
import React from 'react';

// Common Components Imports
import BlackButton from '../../CommonComponents/Buttons/BlackButton';

import './DeliveryAddressEdit.css';

function DeliveryAddressEdit() {
    return (
        <>
            <section className='deliver_address_edit page_padding'>
                <div className='container'>
                    <div className='deliver_address_edit_content'>
                        <h4>Delivery Address</h4>
                        <div className='form_wrapper'>
                            <div className='input_group'>
                                <label htmlFor="" className='input_field_label'>Area</label>
                                <select className='select_field' name="" id="">
                                    <option value="">Select Your Area</option>
                                    <option value="">Dhaka</option>
                                    <option value="">Rajsashi</option>
                                    <option value="">Naogaon</option>
                                </select>
                            </div>
                            <div className='input_group'>
                                <label htmlFor="" className='input_field_label'>City</label>
                                <select className='select_field' name="" id="">
                                    <option value="">Select Your City</option>
                                    <option value="">Dhaka</option>
                                    <option value="">Sapahar</option>
                                    <option value="">Naogaon</option>
                                </select>
                            </div>
                            <div className='input_group'>
                                <label htmlFor="" className='input_field_label'>ZIP Code</label>
                                <input className='input_field' type="text" placeholder='Your Zip Code' />
                            </div>
                            <div className='input_group'>
                                <label htmlFor="" className='input_field_label'>Address</label>
                                <input className='input_field' type="text" placeholder='Your Address' />
                            </div>
                            <BlackButton>SAVE CHANGES</BlackButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DeliveryAddressEdit;
