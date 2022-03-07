// React Module Imports
import React from 'react';

import "./OrderDetails.css"

export default function OrderDetails() {
    return <>
        <section className='order_section page_padding'>
            <div className="container">
                <div className='row'>
                    <div className='column_left'>
                        <div className="order_details">
                            <div className="order_tag">
                                <h3 className='order_id'>Order ID: #69</h3>
                                <h3 className='order_list_status panding'>PENDING</h3>
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
                    <div className='column_right'>
                        <div className="personal_info">
                            <div className='personal_info_view pd_info_view'>
                                <h4>Personal Information</h4>
                                <ul>
                                    <li>
                                        <p>name</p>
                                        <h6>Sheehan Rahman</h6>
                                    </li>
                                    <li>
                                        <p>DATE OF BIRTH</p>
                                        <h6>24 May, 1984</h6>
                                    </li>
                                    <li>
                                        <p>EMAIL ADDRESS</p>
                                        <h6>sheehanvy@gmail.com</h6>
                                    </li>
                                    <li>
                                        <p>PHONE NUMBER</p>
                                        <h6>+8801796421891</h6>
                                    </li>
                                </ul>
                            </div>
                            <div className='delivery_address_view pd_info_view'>
                                <h4>Delivery Address</h4>
                                <ul>
                                    <li>
                                        <p>STREET ADDRESS</p>
                                        <h6>Niketan, Gulshan, Dhaka</h6>
                                    </li>
                                    <li>
                                        <p>AREA</p>
                                        <h6>Gulshan</h6>
                                    </li>
                                    <li>
                                        <p>CITY</p>
                                        <h6>DHAKA</h6>
                                    </li>
                                    <li>
                                        <p>ZIP CODE</p>
                                        <h6>1260</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}
