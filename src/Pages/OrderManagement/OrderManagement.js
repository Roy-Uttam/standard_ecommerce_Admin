import React, { useState } from 'react';
import ReactPagination from 'react-paginate';
import Header from '../../AllPagesComponents/Header/Header'
import "../Body.css"
import Visible from "../../Assets/Icons/visibility-black.svg"
import Data from "../../Assets/Items.json"
import { Link } from 'react-router-dom';
import Search from '../../CommonComponents/Search';
import OrderDetails from '../../CommonComponents/Modal/OrderDetails/OrderDetails';

export default function OrderManagement() {
    const [items] = useState(Data);
    const [ordershow, setOrdershow] = useState(false);

    const [pageNumber, setPageNumber] = useState(0);

    // Pagination

    const itemsPerPage = 3;
    const PagesVisited = pageNumber * itemsPerPage

    const pageCount = Math.ceil(items.length / itemsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const displayitems = items.slice(PagesVisited, PagesVisited + itemsPerPage)
        .map((item) => {
            return <div className="order-management items_contents " key={item.item_id}>
                <div className="container_inner">
                    <div className="item_content">
                        <h4 className='item_element'>ID1</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>Date 1</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>{item.name}</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>৳ 1200</h4>
                    </div>
                    <div className="item_content">
                        <select className='' name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="item_content">
                        <div className='item_element'>
                            <div className="item_element_buttons">
                                <button className='item_element_button' onClick={()=>setOrdershow(!ordershow)}><img src={Visible} alt="Visible" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })


    return (
        <>
            <Header title='Business Overview' />
            <div className="main_body">
                <div className="body_header">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/'>Dashboard</Link></li>
                            <li className="breadcrumb-item active">OrderManagement</li>
                        </ol>
                    </nav>
                </div>
                <div className="show_search">
                    <div className="show_group">
                        <label htmlFor="show">Show :</label>
                        <input type="number" id="show" placeholder='10' min-value='1' />
                    </div>
                    <Search />
                </div>
                <div className="Order_management_content">
                    <div className="body_content">
                        <div className="items_header">
                            <div className="container_inner">
                                <div className="item_title">
                                    <h4>Order ID</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Order Date</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Customer Name</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Total amount</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Order status</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Action</h4>
                                </div>
                            </div>
                        </div>

                        {displayitems}


                        <div className="items_contents_paginate">
                            <ReactPagination
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                pageRangeDisplayed={3}

                                // breakLabel="..."
                                renderOnZeroPageCount={null}
                                pageSize={10}
                                containerClassName="pagination"
                                previousClassName=""
                                marginPagesDisplayed={1}
                            >
                            </ReactPagination>
                        </div>
                    </div>
                </div>
            </div>
            <OrderDetails ordershow={ordershow} setOrdershow={setOrdershow}>
                <div className='delivery_address_view pd_info_view'>
                    <ul>
                        <div className="ulcol">
                            <div className="ulcol1">
                                <li>
                                    <p>Name</p>
                                    <h6>Name 1</h6>
                                </li>
                                <li>
                                    <p>Description</p>
                                    <h6>Description 1</h6>
                                </li>
                                <li>
                                    <p>Price</p>
                                    <h6>৳ Price</h6>
                                </li>
                            </div>
                            <div className="ulcol2">
                                <li>
                                    <p>Category</p>
                                    <h6>Category 1</h6>
                                </li>
                                <li>
                                    <p>Sub- Category</p>
                                    <h6>Sub- Category 1</h6>
                                </li>
                                <li>
                                    <p>Promotions</p>
                                    <h6>Promotion 1</h6>
                                </li>
                            </div>
                        </div>

                        <li>
                        <div className="order_complete">
                            <div className="order_tag">
                                <button className='order_complete_btn' onClick={() => setOrdershow(!ordershow)}>Completed</button>
                            </div>
                            <div className="order_complete_title">
                                <div className="order_complete_list_header">
                                    <div className="order_list_title">
                                        <h3>ITEM</h3>
                                    </div>
                                    <div className="order_list_title">
                                        <h3>Unit Price</h3>
                                    </div>
                                    <div className="order_list_title">
                                        <h3>QTY</h3>
                                    </div>
                                    <div className="order_list_title">
                                        <h3>PRICE</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="order_complete_list_container">
                                <div className="order_complete_list_content">
                                    <div className="order_list_text">
                                        <h3 className='order_id' >Product 1</h3>
                                    </div>
                                    <div className="order_list_text">
                                        <h3 className='order_price'>৳ 1600.00</h3>
                                    </div>
                                    <div className="order_list_text">
                                        <h3 className='order_quantity'>1x</h3>
                                    </div>
                                    <div className="order_list_text">
                                        <h3 className='order_price'>৳ 1600.00</h3>
                                    </div>
                                </div>
                                <div className="order_complete_list_content">
                                    <div className="order_list_text">
                                        <h3 className='order_id' >Product 2</h3>
                                    </div>
                                    <div className="order_list_text">
                                        <h3 className='order_price'>৳ 1600.00</h3>
                                    </div>
                                    <div className="order_list_text">
                                        <h3 className='order_quantity'>2x</h3>
                                    </div>
                                    <div className="order_list_text">
                                        <h3 className='order_price'>৳ 2400.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="order_complete_fees">
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
                        </li>
                    </ul>
                </div>
            </OrderDetails>
        </>
    )
}
