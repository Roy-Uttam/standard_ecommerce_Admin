import React, { useState } from 'react';
import ReactPagination from 'react-paginate';
import Header from '../../AllPagesComponents/Header/Header'
import "../Body.css"
import Visible from "../../Assets/Icons/visibility-black.svg"
import Edit from "../../Assets/Icons/edit-black.svg"
import Image from "../../Assets/Icons/icon.svg"
import Data from "../../Assets/Items.json"
import { Link } from 'react-router-dom';
import Search from '../../CommonComponents/Search';

export default function TopCategory() {
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
            return <div className="top-category items_contents" key={item.item_id}>
                <div className="container_inner">
                    <div className="item_content">
                        <div className="item_element img_content">
                            <img src={Image} alt="Product" />
                        </div>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>Category 1</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>2</h4>    
                    </div>
                    <div className="item_content">
                        <div className='item_element'>
                            <div className="item_element_buttons">
                                <button className='item_element_button'><img src={Visible} alt="Visible" /></button>
                                <button className='item_element_button'><img src={Edit} alt="Delete" /></button>
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
                            <li className="breadcrumb-item active">Top Category</li>
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
                <div className="column_4">
                    <div className="body_content">
                        <div className="items_header">
                            <div className="container_inner">
                                <div className="item_title">
                                    <h4>Image</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Category Name</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Sequence</h4>
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

