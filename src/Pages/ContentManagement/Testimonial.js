import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPagination from 'react-paginate';
import Header from '../../AllPagesComponents/Header/Header'
import "../Body.css"
import Visible from "../../Assets/Icons/visibility-black.svg"
import Edit from "../../Assets/Icons/edit-black.svg"
import Image from "../../Assets/Icons/icon.svg"
import Delete from "../../Assets/Icons/delete-black.svg"
import AddButton from '../../CommonComponents/Buttons/AddButton';
import Search from '../../CommonComponents/Search';
import Modal from "../../CommonComponents/Modal/Modal"
import ViewModal from '../../CommonComponents/Modal/ViewModal/ViewModal';

import axios from 'axios';
import { useForm } from "react-hook-form";
import 'dropify/dist/js/dropify.js';
import 'dropify/dist/css/dropify.css';
import $ from 'jquery';

export default function Testimonial() {
    const [pageNumber, setPageNumber] = useState(0);
    const [ViewData, setViewData] = useState([]);
    const [viewshow, setViewshow] = useState(false);
    const [Testimonial_ID, setEditID] = useState([]);
    const [EditData, setEditData] = useState([]);
    const [EditShow, setEditShow] = useState(false);

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    }

    const {
        register: registerCreate,
        formState: { errors },
        handleSubmit: handleSubmitCreate,
      } = useForm({
        mode: "onBlur",
      });
    
      const {
        register: registerUpdate,
        reset,
        formState: { errors: errors2 },
        handleSubmit: handleSubmitUpdate,
      } = useForm({
        mode: "onBlur",
      });

    // Featch all testimonial links
    const [Testimonial , setTestimonials] = useState([]);
    useEffect(() => {
        axios.get(`${window.baseUrl}testimonials`)
        .then(res => {
            if (res.status === 200 && res.data.status === true) {
                setTestimonials(res.data.data);
            }
        })
        .catch(error => {
            console.log('error')
        })
      }, [])

      //   Add testimonial links

    const onCreate = data => {

        let image = data.image.length === 0 ? '' : data.image;
        let config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        var formData = new FormData()
        formData.append('name', data.name);
        formData.append('designation', data.designation);
        formData.append('testimonial', data.testimonial);

        if (data.image.length !== 0) {

            formData.append('image', image[0]);
            axios.post(`${window.baseUrl}testimonials`, formData, config)
                .then(res => {
                    
                    if (res.status === 200 && res.data.status === true) {
                        
                        setTestimonials([res.data.data, ...Testimonial])

                    } else {
                        console.log('error');
                    }
                })
                .catch(error => {
                    console.log('error');
                })
        } else {

            formData.append('image', image[0]);
            axios.post(`${window.baseUrl}testimonials`, formData, config)
                .then(res => {
                    console.log(res)
                    if (res.status === 200 && res.data.status === true) {
                        
                        setTestimonials([res.data.data, ...Testimonial])
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

    // View testimonial

    const ViewTestimonial= (id) => {
        fetch(`${window.baseUrl}testimonials/${id}`)
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

    // Delete Socail Link
        const deleteTestimonial = async (id) => {
            setTestimonials(Testimonial.filter((testimonial) => testimonial.testimonial_id !== id));
        await fetch(`${window.baseUrl}testimonials/${id}`,{
        method: 'DELETE'
        })
    }

    // Edit function
    const EditTestimonial= async (id) => {
        console.log(id)
        await fetch(`${window.baseUrl}testimonials/${id}`)
        .then((res) => {
            if (res.status === 200) {
            return res.json()
            }
            else {
            throw new Error(res.status)
            }
        })
        .then(data => {
            $('.dropify').dropify();
            reset();
            setEditID(data.data.testimonial_id)
            setEditData(data.data)
            setEditShow(true)

        }
        )
        .catch((error) => {
            console.log(error);
        })
        
    }



    const onUpdate = data => {
    
        let config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        var formData = new FormData()
        formData.append('name', data.name);
        formData.append('_method', "PUT");
        formData.append('designation', data.designation);
        formData.append('testimonial', data.testimonial);

        formData.append('image', data.image[0]);

        axios.post(`${window.baseUrl}testimonials/${Testimonial_ID}`, formData, config)
            .then(res => {
                if (res.status === 200 && res.data.status === true) {
                    console.log(res.data.data)
                    setTestimonials([ res.data.data,...Testimonial.filter((testimonial) => testimonial.testimonial_id !== Testimonial_ID)])
                    
                } else {
                    console.log('error');
                }
            })
            .catch(error => {
                console.log('error');
            })
    
    setEditShow(!EditShow)

}


   
    // Pagination

    const itemsPerPage = 3;
    const PagesVisited = pageNumber * itemsPerPage

    const pageCount = Math.ceil(Testimonial.length / itemsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const displayitems = Testimonial.slice(PagesVisited, PagesVisited + itemsPerPage)
        .map((item) => {
            return <div className="testimonial items_contents" key={item.testimonial_id}>
                <div className="container_inner">
                    <div className="item_content">
                        <div className="item_element img_content">
                            <img src={Image} alt="Product" />
                        </div>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>{item.name}</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>{item.designation}</h4>    
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>{item.testimonial}</h4>    
                    </div>
                    <div className="item_content">
                        <div className='item_element'>
                            <div className="item_element_buttons">
                            <button className='item_element_button' onClick={() => ViewTestimonial(item.testimonial_id)}><img src={Visible} alt="Visible" /></button>
                            <button className='item_element_button'onClick={()=>EditTestimonial(item.testimonial_id)} ><img src={Edit} alt="Edit" /></button>
                            <button className='item_element_button' onClick={()=>deleteTestimonial(item.testimonial_id)}><img src={Delete} alt="Delete" /></button>
                          
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
                            <li className="breadcrumb-item active">testimonial</li>
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
                <div className="column_5 testimonial_columns">
                    <div className="body_content">
                        <div className="items_header">
                            <div className="container_inner">
                                <div className="item_title">
                                    <h4>Image</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Name</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Designation</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Testimonial</h4>
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
            <Modal key={1} show={show} onSubmit={handleSubmitCreate(onCreate)} setShow={setShow}>
                
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Name</label>
                    <input className='input_field' {...registerCreate("name", { required: true })} name="name" type="text" placeholder="description" />
                </div>
                {errors.name && <span className="errorMessage">You must specify Name</span>}

                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Designation</label>
                    <input className='input_field' {...registerCreate("designation",{ required: true })} name="designation" type="text" placeholder="designation" />
                </div>
                {errors.designation && <span className="errorMessage">You must specify Designation</span>}

                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Testimonial</label>
                    <input className='input_field' {...registerCreate("testimonial",{ required: true })} name="testimonial" type="text" placeholder="testimonial" />
                </div>
                {errors.testimonial && <span className="errorMessage">You must specify Testimonial</span>}
                
                <div className='input_group'>
                    <div>
                        <label htmlFor="" className='input_field_label'>Image (Max 10)</label>
                        <input {...registerCreate("image",{ required: true })} name="image" type="file" className="dropify" accept="image/*" data-max-file-size="5M" />
                    </div>
                    {errors.image && <span className="errorMessage">Please Insert Image</span>}
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

            {/* Edit item modal */}
            <Modal key={2} show={EditShow} setShow={setEditShow} onReset={reset} onSubmit={handleSubmitUpdate(onUpdate)} title={"Edit testimonial"}>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Name</label>
                    <input className='input_field' {...registerUpdate("name", { required: true })} defaultValue={EditData.name} name="name"  type="text" placeholder="description" />
                </div>
                {errors2.description && <span className="errorMessage">You must specify Name</span>}

                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Designation</label>
                    <input className='input_field' {...registerUpdate("designation", { required: true })} name="designation" defaultValue={EditData.designation}  type="text" placeholder="designation" />
                </div>

                {errors2.designation && <span className="errorMessage">You must specify designation</span>}
                
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Testimonial</label>
                    <input className='input_field' {...registerUpdate("testimonial", { required: true })} name="testimonial" defaultValue={EditData.testimonial} type="text" placeholder="testimonial" />
                </div>
                {errors2.testimonial && <span className="errorMessage">You must specify Testimonial</span>}
                
                <div className='input_group'>
                    <div>
                        <label htmlFor="" className='input_field_label'>Image (Max 10)</label>
                        <input {...registerUpdate("image", { required: true })} name="image" defaultValue={EditData.image} type="file" className="dropify" accept="image/*" data-max-file-size="5M" />
                        
                    </div>
                </div>
                {errors2.image && <span className="errorMessage">Please Insert Image</span>}

                <div className="input_contents">
                    <div className="input_group">
                        <button type='button' className='cancel' onClick={() => setEditShow(!EditShow)}>CANCEL</button>
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
                                    <p>testimonial Id</p>
                                    <h6>{ViewData.testimonial_id}</h6>
                                </li>
                                <li>
                                    <p>Name</p>
                                    <h6>{ViewData.name}</h6>
                                    
                                </li>
                                <li>
                                    <p>Designation</p>
                                    <h6>{ViewData.designation}</h6>
                                </li>
                                <li>
                                    <p>Testimonial</p>
                                    <h6>{ViewData.testimonial}</h6>
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

