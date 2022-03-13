import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPagination from 'react-paginate';
import Header from '../../AllPagesComponents/Header/Header'
import "../Body.css"
import Visible from "../../Assets/Icons/visibility-black.svg"
import Edit from "../../Assets/Icons/edit-black.svg"
import Image from "../../Assets/Icons/icon.svg"
import Delete from "../../Assets/Icons/delete-black.svg"

import Data from "../../Assets/Items.json"
import AddButton from '../../CommonComponents/Buttons/AddButton';
import Search from '../../CommonComponents/Search';
import Modal from "../../CommonComponents/Modal/Modal"
import ViewModal from '../../CommonComponents/Modal/ViewModal/ViewModal';


import axios from 'axios';
import { useForm } from "react-hook-form";
import 'dropify/dist/js/dropify.js';
import 'dropify/dist/css/dropify.css';
import $ from 'jquery';


export default function SocialLink() {
    const [items] = useState(Data);
    const [pageNumber, setPageNumber] = useState(0);
    const [ViewData, setViewData] = useState([]);
    const [viewshow, setViewshow] = useState(false);
    const [SocialID, setEditID] = useState([]);
    const [EditData, setEditData] = useState([]);
    const [EditShow, setEditShow] = useState(false);

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [show, setShow] = useState(false);

    // Item Modal 

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

    // Featch all social links
    const [SocialLinks , setSocialLinks] = useState([]);
    useEffect(() => {
        axios.get(`${window.baseUrl}social-link`)
        .then(res => {
            if (res.status === 200 && res.data.status === true) {
                setSocialLinks(res.data.data);
            }
        })
        .catch(error => {
            console.log('error')
        })
      }, [])



    //   Add social links

    const onCreate = data => {

        let image = data.image.length === 0 ? '' : data.image;
        let config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        var formData = new FormData()
        formData.append('name', data.name);
        formData.append('link', data.link);
        formData.append('precedence', data.precedence);

        if (data.image.length !== 0) {

            formData.append('icon', image[0]);
            axios.post(`${window.baseUrl}social-link`, formData, config)
                .then(res => {
                    
                    if (res.status === 200 && res.data.status === true) {
                        
                        setSocialLinks([res.data.data, ...SocialLinks])

                    } else {
                        console.log('error');
                    }
                })
                .catch(error => {
                    console.log('error');
                })
        } else {

            formData.append('icon', image[0]);
            axios.post(`${window.baseUrl}social-link`, formData, config)
                .then(res => {
                    console.log(res)
                    if (res.status === 200 && res.data.status === true) {
                        
                        setSocialLinks([res.data.data, ...SocialLinks])
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

    // View Social slider

    const ViewSocialLink= (id) => {
        fetch(`${window.baseUrl}social-link/${id}`)
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
    const deleteSocial = async (id) => {
        setSocialLinks(SocialLinks.filter((social) => social.social_link_id !== id));
    await fetch(`${window.baseUrl}social-link/${id}`,{
      method: 'DELETE'
    })
  }

  // Edit function
  const EditSocailLInk= async (id) => {
    console.log(id)
    await fetch(`${window.baseUrl}social-link/${id}`)
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
        setEditID(data.data.social_link_id)
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
        formData.append('link', data.link);
        formData.append('precedence', data.precedence);

        formData.append('icon', data.image[0]);

        axios.post(`${window.baseUrl}social-link/${SocialID}`, formData, config)
            .then(res => {
                if (res.status === 200 && res.data.status === true) {
                    console.log(res.data.data)
                    setSocialLinks([ res.data.data,...SocialLinks.filter((Social) => Social.social_link_id !== SocialID)])
                    
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

    const pageCount = Math.ceil(SocialLinks.length / itemsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const displayitems = SocialLinks.slice(PagesVisited, PagesVisited + itemsPerPage)
        .map((item) => {
            return <div className="socialLink items_contents" key={item.social_link_id}>
                <div className="container_inner">
                    
                    <div className="item_content">
                        <h4 className='item_element'>{item.name}</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>{item.link}</h4>    
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>{item.precedence}</h4>    
                    </div>
                    <div className="item_content">
                        <div className="item_element img_content item_icons">
                            <img src={item.icon} alt="Product" />
                        </div>
                    </div>
                    <div className="item_content">
                        <div className='item_element'>
                            <div className="item_element_buttons">
                            <button className='item_element_button' onClick={() => ViewSocialLink(item.social_link_id)}><img src={Visible} alt="Visible" /></button>
                            <button className='item_element_button'onClick={()=>EditSocailLInk(item.social_link_id)} ><img src={Edit} alt="Edit" /></button>
                            <button className='item_element_button' onClick={()=>deleteSocial(item.social_link_id)}><img src={Delete} alt="Delete" /></button>
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
                            <li className="breadcrumb-item active">Social Link</li>
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
                                    <h4>Name</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Link</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Presedence</h4>
                                </div>
                                <div className="item_title ">
                                    <h4>Icons</h4>
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
            <Modal key={1} show={show} onSubmit={handleSubmitCreate(onCreate)} setShow={setShow}>
                
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Name</label>
                    <input className='input_field' {...registerCreate("name", { required: true })} name="name" type="text" placeholder="description" />
                </div>
                {errors.name && <span className="errorMessage">You must specify Description</span>}

                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Link</label>
                    <input className='input_field' {...registerCreate("link",{ required: true })} name="link" type="text" placeholder="link" />
                </div>
                {errors.link && <span className="errorMessage">You must specify Link</span>}

                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Precedence</label>
                    <input className='input_field' {...registerCreate("precedence",{ required: true })} name="precedence" type="text" placeholder="precedence" />
                </div>
                {errors.precedence && <span className="errorMessage">You must specify Precedence</span>}
                
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
            <Modal key={2} show={EditShow} setShow={setEditShow} onReset={reset} onSubmit={handleSubmitUpdate(onUpdate)} title={"Edit Social Link"}>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Name</label>
                    <input className='input_field' {...registerUpdate("name", { required: true })} defaultValue={EditData.name} name="name"  type="text" placeholder="description" />
                </div>
                {errors2.description && <span className="errorMessage">You must specify description</span>}

                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Link</label>
                    <input className='input_field' {...registerUpdate("link", { required: true })} name="link" defaultValue={EditData.link}  type="text" placeholder="link" />
                </div>

                {errors2.link && <span className="errorMessage">You must specify link</span>}
                
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Precedence</label>
                    <input className='input_field' {...registerUpdate("precedence", { required: true })} name="precedence" defaultValue={EditData.precedence} type="text" placeholder="precedence" />
                </div>
                {errors2.precedence && <span className="errorMessage">You must specify Precedence</span>}
                
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
                                    <p>Social link Id</p>
                                    <h6>{ViewData.slider_id}</h6>
                                </li>
                                <li>
                                    <p>Name</p>
                                    <h6>{ViewData.name}</h6>
                                    
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
                                    <img className='input_img' src={ViewData.icon} alt="thumbnail" />
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </ViewModal>
        </>
    )
}

