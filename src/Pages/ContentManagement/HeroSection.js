import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPagination from 'react-paginate';
import Header from '../../AllPagesComponents/Header/Header';
import "../Body.css";
import Visible from "../../Assets/Icons/visibility-black.svg"
import Edit from "../../Assets/Icons/edit-black.svg";
import AddButton from '../../CommonComponents/Buttons/AddButton';
import Search from '../../CommonComponents/Search';
import Modal from "../../CommonComponents/Modal/Modal";
import ViewModal from '../../CommonComponents/Modal/ViewModal/ViewModal';
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'dropify/dist/js/dropify.js';
import 'dropify/dist/css/dropify.css';
import $ from 'jquery';


export default function HeroSection() {
    const [viewshow, setViewshow] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    
    const [show, setShow] = useState(false);
    const [EditShow, setEditShow] = useState(false);

    const [ViewData, setViewData] = useState([]);
    const [editd, seteditd] = useState([]);
    const [Editdescription, setEditDescription] = useState('');
    const [EditLink, setEditLink] = useState('');
    const [EditPrecedence, setEditPrecedence] = useState('');
    const [EditImage, setEditImage] = useState('');
    const [sliderID, setEditDataid] = useState([]);
    // const [error1, seterror1] = useState({});
    
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

     // View hero slider

     const ViewSlider= (id) => {
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
      
      
    // ADD FORM OPERATION
    const onCreate = data => {

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
                        
                        setHeroSliders([res.data.data, ...Heroslider])

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
                        
                        setHeroSliders([res.data.data, ...Heroslider])
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


    // Edit function
    const editSlider= async (id) => {
        console.log(id)
        await fetch(`${window.baseUrl}sliders/${id}`)
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
            setEditDataid(data.data.slider_id)
            seteditd(data.data)

            // setEditDescription(data.data.description)
            // setEditLink(data.data.link)
            // setEditPrecedence(data.data.precedence)
            // setEditImage(data.data.image)
            setEditShow(true)

          }
          )
          .catch((error) => {
            console.log(error);
          })
          
      }

    // update function
    const onUpdate = data => {
        // if(
        //     !editd.description ||
        //     !editd.link ||
        //     !editd.precedence ||
        //     !editd.image 
        // ){
        //     seterror({
        //         description: !editd.description ? true : false,
        //         link: !editd.link ? true : false,
        //         precedence: ! editd.precedence? true : false,
        //         image: !editd.image ? true : false,
               
        // })}
        // else{
            let image = data.image.length === 0 ? '' : data.image;
            let config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
    
            var formData = new FormData()
            formData.append('description', data.description);
            formData.append('_method', "PUT");
            formData.append('link', data.link);
            formData.append('precedence', data.precedence);
    
            // if (data.image.length !== 0) {
    
                formData.append('image', image[0]);
            axios.post(`${window.baseUrl}sliders/${sliderID}`, formData, config)
                .then(res => {
                    if (res.status === 200 && res.data.status === true) {
                        console.log(res.data.data)
                        setHeroSliders([ res.data.data,...Heroslider.filter((heroslider) => heroslider.slider_id !== sliderID)])
                        console.log(Heroslider)
                        
                    } else {
                        console.log('error');
                    }
                })
                .catch(error => {
                    console.log('error');
                })
        // }

        // console.log(data.image.length)
        // let image = data.image.length === 0 ? '' : data.image;
        // let config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // }

        // var formData = new FormData()
        // formData.append('description', data.description);
        // formData.append('_method', "PUT");
        // formData.append('link', data.link);
        // formData.append('precedence', data.precedence);

        // // if (data.image.length !== 0) {

        //     formData.append('image', image[0]);
        // axios.post(`${window.baseUrl}sliders/${sliderID}`, formData, config)
        //     .then(res => {
        //         if (res.status === 200 && res.data.status === true) {
        //             console.log(res.data.data)
        //             setHeroSliders([ res.data.data,...Heroslider.filter((heroslider) => heroslider.slider_id !== sliderID)])
        //             console.log(Heroslider)
                    
        //         } else {
        //             console.log('error');
        //         }
        //     })
        //     .catch(error => {
        //         console.log('error');
        //     })


           
        // } else {

        //     formData.append('image', image[0]);
        //     axios.post(`${window.baseUrl}sliders/${sliderID}`, formData, config)
        //         .then(res => {
        //             console.log(res)
        //             if (res.status === 200 && res.data.status === true) {
        //                 console.log(res.data.data)
        //                 setHeroSliders([res.data.data,...Heroslider.filter((heroslider) => heroslider.slider_id !== sliderID)])
        //                 console.log(Heroslider)
        //             } else {
        //                 console.log('error');
        //             }
        //         })
        //         .catch(error => {
        //             console.log('error');
        //         })
        // }

        

        setEditShow(!EditShow)
        // data.reset();
        // setEditDescription('')
        // setEditLink('')
        // setEditPrecedence('')
        // setEditImage('')

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
                            <button className='item_element_button'onClick={()=>editSlider(item.slider_id)} ><img src={Edit} alt="Edit" /></button>
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
            <Modal key={1} show={show} onSubmit={handleSubmitCreate(onCreate)} setShow={setShow} title={"Add new Hero-slider"}>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Description</label>
                    <input className='input_field' {...registerCreate("description", { required: true })} name="description" type="text" placeholder="description" />
                </div>
                {errors.description && <span className="errorMessage">You must specify Description</span>}

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
            <Modal key={2} show={EditShow} setShow={setEditShow} onReset={reset} onSubmit={handleSubmitUpdate(onUpdate)} title={"Edit Heroslider"}>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Description</label>
                    <input className='input_field' {...registerUpdate("description", { required: true })} defaultValue={editd.description} name="description"  type="text" placeholder="description" />
                </div>
                {errors2.description && <span className="errorMessage">You must specify description</span>}

                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Link</label>
                    <input className='input_field' {...registerUpdate("link", { required: true })} name="link" defaultValue={editd.link}  type="text" placeholder="link" />
                </div>

                {errors2.link && <span className="errorMessage">You must specify link</span>}
                
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Precedence</label>
                    <input className='input_field' {...registerUpdate("precedence", { required: true })} name="precedence" defaultValue={editd.precedence} type="text" placeholder="precedence" />
                </div>
                {errors2.precedence && <span className="errorMessage">You must specify Precedence</span>}
                
                <div className='input_group'>
                    <div>
                        <label htmlFor="" className='input_field_label'>Image (Max 10)</label>
                        <input {...registerUpdate("image", { required: true })} name="image" defaultValue={editd.image} type="file" className="dropify" accept="image/*" data-max-file-size="5M" />
                        
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

