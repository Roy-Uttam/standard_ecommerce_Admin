import React, { useState } from 'react';
import ReactPagination from 'react-paginate';
import Header from '../../AllPagesComponents/Header/Header'
import "../Body.css"
import Visible from "../../Assets/Icons/visibility-black.svg"
import Edit from "../../Assets/Icons/edit-black.svg"
import Delete from "../../Assets/Icons/delete-black.svg"
import Modal from "../../CommonComponents/Modal/Modal"




import Data from "../../Assets/Items.json"
import { Link } from 'react-router-dom';
import AddButton from '../../CommonComponents/Buttons/AddButton';
import Search from '../../CommonComponents/Search';

export default function Promotion() {
    const [items] = useState(Data);
    const [pageNumber, setPageNumber] = useState(0);

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [show, setShow] = useState(false);

    // Item Modal 


    const handleClick = () => {
        setShow(!show)
    }

    const handleImageChange = (e) => {
        // console.log(e.target.files[])
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

            // console.log("filesArray: ", filesArray);

            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file) // avoid memory leak
            );
        }
    };

    const renderPhotos = (source) => {
        // console.log('source: ', source);
        return source.map((photo) => {
            return <div className="field_imglist"><img className='input_img' src={photo} alt="" key={photo} /></div>;
        });
    }



    // Pagination

    const itemsPerPage = 3;
    const PagesVisited = pageNumber * itemsPerPage

    const pageCount = Math.ceil(items.length / itemsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const displayitems = items.slice(PagesVisited, PagesVisited + itemsPerPage)
        .map((item) => {
            return <div className="promotion items_contents" key={item.item_id}>
                <div className="container_inner">
                    <div className="item_content">
                        <h4 className='item_element'>Promotion 1</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>Description</h4>
                    </div>
                    <div className="item_content">
                        <div className='item_element'>
                            <div className="item_element_buttons">
                                <button className='item_element_button'><img src={Visible} alt="Visible" /></button>
                                <button className='item_element_button'><img src={Edit} alt="Delete" /></button>
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
                            <li className="breadcrumb-item active">Promotion</li>
                        </ol>
                    </nav>
                    <div className="btn_addnew_wrapper">
                        <AddButton handleClick={handleClick}>add new</AddButton>
                    </div>
                </div>
                <div className="show_search">
                    <div className="show_group">
                        <label htmlFor="show">Show :</label>
                        <input type="number" id="show" placeholder='10' min-value='1' />
                    </div>
                    <Search />
                </div>
                <div className="column_3">
                    <div className="body_content">
                        <div className="items_header">
                            <div className="container_inner">
                                <div className="item_title">
                                    <h4>Promotion Name</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Description</h4>
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
            {/* add item modal */}
            <Modal show={show} setShow={setShow}>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Name</label>
                    <input className='input_field' type="text" placeholder='Name' />
                </div>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Description</label>
                    <input className='input_field' type="text" placeholder='Description' />
                </div>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Price</label>
                    <input className='input_field' type="text" placeholder='Price' />
                </div>
                <div className="input_contents">
                    <div className='input_group'>
                        <label htmlFor="" className='input_field_label'>Category</label>
                        <input className='input_field' type="text" placeholder='Category' />
                    </div>
                    <div className='input_group'>
                        <label htmlFor="" className='input_field_label'>Category</label>
                        <input className='input_field' type="text" placeholder='Category' />
                    </div>
                </div>
                <div className="input_contents">
                    <div className='input_group'>
                        <label htmlFor="" className='input_field_label'>Quantity</label>
                        <input className='input_field' type="text" placeholder='Category' />
                    </div>
                    <div className='input_group'>
                        <div className='checkbox_group'>
                            <label htmlFor="" className='input_field_label'>Visible:</label>
                            <label className="chackbox_container">
                                <input type="checkbox" name="Option 1" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='input_group'>
                    <div>
                        <label htmlFor="" className='input_field_label'>Image (Max 10)</label>
                        <input type="file" id="file" multiple onChange={handleImageChange} />
                        <div className="label-holder">
                            <label htmlFor="file" className="label">
                                Upload Image
                            </label>
                        </div>
                        <div className="result">{renderPhotos(selectedFiles)}</div>
                    </div>
                </div>
                <div className="input_contents">
                    <div className="input_group">
                        <button type='button' className='cancel' onClick={() => setShow(!show)}>CANCEL</button>
                    </div>
                    <div className="input_group">
                        <Link className='submit' to="/">SUBMIT</Link>
                    </div>
                </div>
            </Modal>
        </>
    )
}

