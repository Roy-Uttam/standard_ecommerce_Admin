import React, {useEffect, useState } from 'react';
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
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'dropify/dist/js/dropify.js';
import 'dropify/dist/css/dropify.css';
import $ from 'jquery';

export default function HeroSection() {
    // const [items] = useState(Data);
    const [viewshow, setViewshow] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [show, setShow] = useState(false);


    const [ViewData, setViewData] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Item Modal 

    // Hero slider retrive data from api
    const [Heroslider , setHeroSliders] = useState([]);
    useEffect(() => {
        axios.get(`${window.baseUrl}sliders`)
        .then(res => {
            if (res.status === 200 && res.data.status === true) {
                setHeroSliders(res.data.data);
            } 
        })
        .catch(error => {
            console.log('error')
        })
      }, [])


    const handleClick = () => {
        setShow(!show);
        $('.dropify').dropify();
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



    // ADD FORM OPERATION
    const onSubmit = data => {

        let image = data.image.length === 0 ? '' : data.image;
        let config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        var formData = new FormData()
        formData.append('description', data.description);
        formData.append('link', data.link);
        formData.append('precedence', data.precedence);

        if (data.image.length !== 0) {

            formData.append('image', image[0]);
            axios.post(`${window.baseUrl}sliders`, formData, config)
                .then(res => {
                    
                    if (res.status === 200 && res.data.status === true) {
                        
                        setHeroSliders([...Heroslider, res.data.data])

                    } else {
                        console.log('error');
                    }
                })
                .catch(error => {
                    console.log('error');
                })
        } else {

            formData.append('image', image[0]);
            axios.post(`${window.baseUrl}sliders`, formData, config)
                .then(res => {
                    console.log(res)
                    if (res.status === 200 && res.data.status === true) {
                        
                        setHeroSliders([...Heroslider, res.data.data])
                    } else {
                        console.log('error');
                    }
                })
                .catch(error => {
                    console.log('error');
                })
        }
        setShow(!show)

    }


    // View hero slider

    const ViewSlider= (id) => {
        // console.log(id)
        fetch(`${window.baseUrl}sliders/${id}`)
          .then((res) => {
            if (res.status === 200) {
              return res.json()
            }
            else {
              throw new Error(res.status)
            }
          })
          .then(data => {
            setViewData(data.data)
            setViewshow(!viewshow)
          }
          )
          .catch((error) => {
            console.log(error);
          })
          
      }
      

    // Pagination

    const itemsPerPage = 5;
    const PagesVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(Heroslider.length / itemsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    // Display heroslider data
    const displayitems = Heroslider.slice(PagesVisited, PagesVisited + itemsPerPage)
    .map((item) => {
            return <div className="hero-section items_contents" key={item.slider_id}>
                <div className="container_inner">
                    <div className="item_content">
                        <div className="item_element img_content">
                            <img src={item.image} alt="Product" />
                        </div>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>{item.description}</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>{item.link}</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>{item.precedence}</h4>
                    </div>
                    <div className="item_content">
                        <div className='item_element'>
                            <div className="item_element_buttons">
                            <button className='item_element_button' onClick={() => ViewSlider(item.slider_id)}><img src={Visible} alt="Visible" /></button>
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
            <Modal show={show} onSubmit={handleSubmit(onSubmit)} setShow={setShow} title={"Add new Hero-slider"}>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Description</label>
                    <input className='input_field' {...register("description")} name="description" type="text" placeholder="description" />
                </div>

                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Link</label>
                    <input className='input_field' {...register("link")} name="link" type="text" placeholder="link" />
                </div>
                
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Precedence</label>
                    <input className='input_field' {...register("precedence")} name="precedence" type="text" placeholder="precedence" />
                </div>
                
                <div className='input_group'>
                    <div>
                        <label htmlFor="" className='input_field_label'>Image (Max 10)</label>
                        <input {...register("image")} name="image" type="file" className="dropify" accept="image/*" data-max-file-size="5M" />
                        {/* <div className="label-holder">
                            <label htmlFor="file">
                                Upload Image
                            </label>
                        </div> */}
                        {/* <div className="result">{renderPhotos(selectedFiles)}</div> */}
                    </div>
                </div>
                <div className="input_contents">
                    <div className="input_group">
                        <button type='button' className='cancel' onClick={() => setShow(!show)}>CANCEL</button>
                    </div>
                    <div className="input_group">
                    <button type="submit" className="submit">Submit
                        </button>
                    </div>
                </div>
                </Modal>

            <ViewModal viewshow={viewshow} setViewshow={setViewshow}>
                <div className='delivery_address_view pd_info_view'>
                    <ul>
                        <div className="ulcol">
                            <div className="ulcol1">
                                <li>
                                    <p>Slider Id</p>
                                    <h6>{ViewData.slider_id}</h6>
                                </li>
                                <li>
                                    <p>Description</p>
                                    <h6>{ViewData.description}</h6>
                                    
                                </li>
                                <li>
                                    <p>Precedence</p>
                                    <h6>{ViewData.precedence}</h6>
                                </li>
                                <li>
                                    <p>Link</p>
                                    <h6>{ViewData.link}</h6>
                                </li>
                            </div>
                           
                        </div>

                        <li>
                            <h6 className='view_modal_imgtag'>Image</h6>
                            <div className="result">
                                <div className="field_imglist">
                                    <img className='input_img' src={ViewData.image} alt="thumbnail" />
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </ViewModal>
        </>
    )
}

