import React, { useState } from 'react';
import ReactPagination from 'react-paginate';
import Header from '../../AllPagesComponents/Header/Header'
import "../Body.css"
import Visible from "../../Assets/Icons/visibility-black.svg"
import Delete from "../../Assets/Icons/delete-black.svg"
import Data from "../../Assets/Items.json"
import { Link } from 'react-router-dom';
import Search from '../../CommonComponents/Search';

export default function User() {
    const [items] = useState(Data);
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
            return <div className="user items_contents" key={item.item_id}>
                <div className="container_inner">
                    <div className="item_content">
                        <h4 className='item_element'>{item.name}</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>name@mail.com</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>+88010000000</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>dd/mm/yyyy</h4>
                    </div>
                    <div className="item_content">
                        <div className='item_element'>
                            <div className="item_element_buttons">
                                <button className='item_element_button'><img src={Visible} alt="Visible" /></button>
                                <button className='item_element_button'><img src={Delete} alt="Delete" /></button>
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
                            <li className="breadcrumb-item active">User</li>
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
                <div className="column_5">
                    <div className="body_content">
                        <div className="items_header">
                            <div className="container_inner">
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
                                    <h4>Date of Birth</h4>
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
        </>
    )
}

