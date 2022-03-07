import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPagination from 'react-paginate';
import Header from '../../AllPagesComponents/Header/Header'
import "../Body.css"
import Visible from "../../Assets/Icons/visibility-black.svg"
import Edit from "../../Assets/Icons/edit-black.svg"
import Data from "../../Assets/Items.json"
import Image from "../../Assets/Icons/icon.svg"
import AddButton from '../../CommonComponents/Buttons/AddButton';
import Search from '../../CommonComponents/Search';
import Modal from "../../CommonComponents/Modal/Modal"
import ViewModal from '../../CommonComponents/Modal/ViewModal/ViewModal';

export default function HeroSection() {
    const [items] = useState(Data);
    const [viewshow, setViewshow] = useState(false);
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
            return <div className="hero-section items_contents" key={item.item_id}>
                <div className="container_inner">
                    <div className="item_content">
                        <div className="item_element img_content">
                            <img src={Image} alt="Product" />
                        </div>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>Description 1</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>Link</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>2</h4>
                    </div>
                    <div className="item_content">
                        <div className='item_element'>
                            <div className="item_element_buttons">
                                <button className='item_element_button' onClick={() => setViewshow(!viewshow)}><img src={Visible} alt="Visible" /></button>
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
                            <li className="breadcrumb-item active">Hero Section</li>
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
                <div className="column_5">
                    <div className="body_content">
                        <div className="items_header">
                            <div className="container_inner">
                                <div className="item_title">
                                    <h4>Image</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Description</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Offer Link</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Precedence</h4>
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
            <ViewModal viewshow={viewshow} setViewshow={setViewshow}>
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
                            <h6 className='view_modal_imgtag'>Image</h6>
                            <div className="result">
                                <div className="field_imglist">
                                    <img className='input_img' src={Image} alt="thumbnail" />
                                </div>
                                <div className="field_imglist">
                                    <img className='input_img' src={Image} alt="thumbnail" />
                                </div>
                                <div className="field_imglist">
                                    <img className='input_img' src={Image} alt="thumbnail" />
                                </div>
                                <div className="field_imglist">
                                    <img className='input_img' src={Image} alt="thumbnail" />
                                </div>
                                <div className="field_imglist">
                                    <img className='input_img' src={Image} alt="thumbnail" />
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </ViewModal>
        </>
    )
}

