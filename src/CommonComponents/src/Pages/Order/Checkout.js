// React Module Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Common Components Imports
import Quantity from '../../CommonComponents/Quantity';
// import BlackButton from '../CommonComponents/Buttons/BlackButton';

import './Checkout.css';

function Checkout() {
    return (
        <>
            <section className='checkout page_padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='column column_left'>
                            <div className='delivery_info_content'>
                                <h4>Delivery Information</h4>
                                <div className='form_wrapper'>
                                    <div className='checkbox_group'>
                                        <label className="chackbox_container">Use profile information
                                            <input type="checkbox" name="Option 1" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='input_group'>
                                        <label htmlFor="" className='input_field_label'>Name</label>
                                        <input className='input_field' type="text" placeholder='Your Name' />
                                    </div>
                                    <div className='input_group'>
                                        <label htmlFor="" className='input_field_label'>Email</label>
                                        <input className='input_field' type="text" placeholder='Enter your email' />
                                    </div>
                                    <div className='input_group'>
                                        <label htmlFor="" className='input_field_label'>Phone Number</label>
                                        <input className='input_field' type="text" placeholder='Your Phone Number' />
                                    </div>
                                </div>
                                <h4>Delivery Address</h4>
                                <div className='form_wrapper'>
                                    <div className='input_group'>
                                        <label htmlFor="" className='input_field_label'>Street Address</label>
                                        <input className='input_field' type="text" placeholder='Your Address' />
                                    </div>
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
                                </div>
                                <h4 className='payment'>Payment</h4>
                                <p className='payment_method'>Cash on delivery only</p>
                            </div>
                        </div>
                        <div className='column column_right'>
                            <div className="ms_bag_details">
                                <h3 className='ms_bag_tag'>Your Shopping Bag</h3>
                                <div className="ms_bag_details_title">
                                    <div className="ms_bag_details_list_header">
                                        <div className="ms_bag_list_title">
                                            <h3>ITEM</h3>
                                        </div>
                                        <div className="ms_bag_list_title">
                                            <h3>QTY</h3>
                                        </div>
                                        <div className="ms_bag_list_title">
                                            <h3>PRICE</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="ms_bag_details_list_container">
                                    <div className="ms_bag_inner">
                                        <div className="ms_bag_details_list_content">
                                            <div className="ms_bag_list_text">
                                                <h3 className='ms_bag_id' >Product 1</h3>
                                            </div>
                                            <div className="ms_bag_list_text">
                                                <h3 className='ms_bag_quantity'><Quantity /> </h3>
                                            </div>
                                            <div className="ms_bag_list_text">
                                                <h3 className='ms_bag_price'>৳ 1600.00</h3>
                                            </div>
                                        </div>
                                        <button className='remove'>REMOVE</button>
                                    </div>
                                    <div className="ms_bag_inner">
                                        <div className="ms_bag_details_list_content">
                                            <div className="ms_bag_list_text">
                                                <h3 className='ms_bag_id' >Product 2</h3>
                                            </div>
                                            <div className="ms_bag_list_text">
                                                <h3 className='ms_bag_quantity'><Quantity /></h3>
                                            </div>
                                            <div className="ms_bag_list_text">
                                                <h3 className='ms_bag_price'>৳ 2400.00</h3>
                                            </div>
                                        </div>
                                        <button className='remove'>REMOVE</button>
                                    </div>
                                </div>
                                <div className="ms_bag_details_fees">
                                    <div className="sub_total">
                                        <h3>SUBTOTAL</h3>
                                        <h3 className='ms_bag_price'>৳ 5000.00</h3>
                                    </div>
                                    <div className="delivery_fee">
                                        <h3>DELIVERY FEE</h3>
                                        <h3 className='ms_bag_price'>৳ 100.00</h3>
                                    </div>
                                    <div className="grannd_tital">
                                        <h3>GRAND TOTAL</h3>
                                        <h3 className='ms_bag_price'>৳ 5100.00</h3>
                                    </div>
                                    <div className="confirm_order">
                                        {/* <BlackButton> Confirm order </BlackButton> */}
                                        <Link className='Common_btn' to="/order-confirmation">Confirm order</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Checkout;
