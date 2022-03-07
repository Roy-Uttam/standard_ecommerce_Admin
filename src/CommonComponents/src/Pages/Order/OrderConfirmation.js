// React Module Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Common Components Imports
// import BlackButton from '../CommonComponents/Buttons/BlackButton';

import "./OrderConfirmation.css"

export default function OrderConfirmation() {
    return <>
        <section className='order_confirm_section page_padding'>
            <div className="container">
                <div className='row'>
                    <div className='column_left'>
                        <div className="order_confirm_content">
                            <div className="order_confirm_title">
                                <h2>Your order is on its way</h2>
                                <h3 className='order_code'>Order no. #MRZ69</h3>
                            </div>
                            <div className="order_confirm_details">
                                <div className="date_content">
                                    <h3 className='content_title'>Date</h3>
                                    <h3 className='content_value'>7 August, 2021</h3>
                                </div>
                                <div className="payment_content">
                                    <h3 className="content_title">PAYMENT METHOD</h3>
                                    <h3 className="content_value">Cash On Delivery</h3>
                                </div>
                            </div>
                            <div className="order_confirm_button">
                            <Link to="/my-orders" className='Common_btn'>View your orders</Link>
                        </div>
                    </div>                        
                    </div>
                    <div className='column_right'>
                        <div className="order_confirm_content">
                            <div className="order_details">
                                <div className="order_tag">
                                    <h3>Your Shopping Bag</h3>
                                    {/* <h3 className='order_id'>Order ID: #69</h3> */}
                                    {/* <h3 className='order_list_status panding'>PENDING</h3> */}
                                </div>
                                <div className="order_details_title">
                                    <div className="order_details_list_header">
                                        <div className="order_list_title">
                                            <h3>ITEM</h3>
                                        </div>
                                        <div className="order_list_title">
                                            <h3>QTY</h3>
                                        </div>
                                        <div className="order_list_title">
                                            <h3>PRICE</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="order_details_list_container">
                                    <div className="order_details_list_content">
                                        <div className="order_list_text">
                                            <h3 className='order_id' >Product 1</h3>
                                        </div>
                                        <div className="order_list_text">
                                            <h3 className='order_quantity'>1x</h3>
                                        </div>
                                        <div className="order_list_text">
                                            <h3 className='order_price'>৳ 1600.00</h3>
                                        </div>
                                    </div>
                                    <div className="order_details_list_content">
                                        <div className="order_list_text">
                                            <h3 className='order_id' >Product 2</h3>
                                        </div>
                                        <div className="order_list_text">
                                            <h3 className='order_quantity'>2x</h3>
                                        </div>
                                        <div className="order_list_text">
                                            <h3 className='order_price'>৳ 2400.00</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="order_details_fees">
                                    <div className="sub_total">
                                        <h3>SUBTOTAL</h3>
                                        <h3 className='order_price'>৳ 5000.00</h3>
                                    </div>
                                    <div className="delivery_fee">
                                        <h3>DELIVERY FEE</h3>
                                        <h3 className='order_price'>৳ 100.00</h3>
                                    </div>
                                    <div className="grannd_tital">
                                        <h3>GRAND TOTAL</h3>
                                        <h3 className='order_price'>৳ 5100.00</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="small_Div order_confirm_button">
                            <Link to="/my-orders" className='Common_btn'>View your orders</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}
