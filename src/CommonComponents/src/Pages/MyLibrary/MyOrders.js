// React Module Imports
import React from 'react';
import { Link } from 'react-router-dom';

import "./MyOrders.css"

export default function MyOrders() {
  return <>
    <section className='page_padding'>
      <div className="container">
        <div className="my_orders_section">
          <div className="my_orders_title">
            <h2>My Orders</h2>
          </div>
          <div className="my_orders_list">
            <div className="my_orders_list_header">
              <div className="order_list_title">
                <h3>ORDER ID</h3>
              </div>
              <div className="order_list_title">
                <h3>QTY</h3>
              </div>
              <div className="order_list_title">
                <h3>PRICE</h3>
              </div>
              <div className="order_list_title">
                <h3>DATE</h3>
              </div>
              <div className="order_list_title">
                <h3>Status</h3>
              </div>
            </div>
            <div className="my_orders_list_content">
              <div className="order_list_text">
                <h3 className='order_id' ><Link to="/order-details"> #123456 </Link></h3>
              </div>
              <div className="order_list_text">
                <h3 className='order_quantity'>5x</h3>
              </div>
              <div className="order_list_text">
                <h3 className='order_price'>৳ 5100.00</h3>
              </div>
              <div className="order_list_text">
                <h3 className='order_date'>29 May, 2021</h3>
              </div>
              <div className="order_list_text">
                <h3 className='order_list_status panding'>PENDING</h3>
              </div>
            </div>
            <div className="my_orders_list_content">
              <div className="order_list_text">
                <h3 className='order_id' ><Link to="/order-details"> #123456 </Link></h3>
              </div>
              <div className="order_list_text">
                <h3 className='order_quantity'>5x</h3>
              </div>
              <div className="order_list_text">
                <h3 className='order_price'>৳ 5100.00</h3>
              </div>
              <div className="order_list_text">
                <h3 className='order_date'>29 May, 2021</h3>
              </div>
              <div className="order_list_text">
                <h3 className='order_list_status delivered'>DELIVERED</h3>
              </div>
            </div>
            <div className="my_orders_list_content">
              <div className="order_list_text">
                <h3 className='order_id' ><Link to="/order-details"> #123456 </Link></h3>
              </div>
              <div className="order_list_text">
                <h3 className='order_quantity'>5x</h3>
              </div>
              <div className="order_list_text">
                <h3 className='order_price'>৳ 5100.00</h3>
              </div>
              <div className="order_list_text">
                <h3 className='order_date'>29 May, 2021</h3>
              </div>
              <div className="order_list_text">
                <h3 className='order_list_status delivered'>DELIVERED</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}
