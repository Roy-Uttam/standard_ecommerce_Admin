import React, { useEffect, useState } from 'react';
import ReactPagination from 'react-paginate';
import Header from '../../AllPagesComponents/Header/Header'
import "../Body.css"
import Visible from "../../Assets/Icons/visibility-black.svg"
import Edit from "../../Assets/Icons/edit-black.svg"
import Delete from "../../Assets/Icons/delete-black.svg"
import Modal from "../../CommonComponents/Modal/Modal"

import { Link } from 'react-router-dom';
import AddButton from '../../CommonComponents/Buttons/AddButton';
import Search from '../../CommonComponents/Search';
import ViewModal from '../../CommonComponents/Modal/ViewModal/ViewModal';

function ItemManagementSubCategories() {
    const [categories, setCategories] = useState([]);
    const [sub_categories, setSub_categories] = useState([]);

    console.log(sub_categories)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [categoryId, setCategoryId] = useState('')

    const [viewName, setViewName] = useState('');
    const [viewdescription, setViewdescription] = useState('');
    const [categoryName, setViewCategoryName] = useState('');

    const [editId, setEditId] = useState('');
    const [editName, setEditName] = useState('');
    const [editdescription, setEDitdescription] = useState('');

    const [show, setShow] = useState(false);
    const [EditShow, setEditShow] = useState(false);
    const [viewshow, setViewshow] = useState(false);

    const [items] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);


    const handleClick = () => {
        setShow(!show)
    }


    // ===Fetching Data from api===

    // Read categories from Api



    useEffect(() => {
        fetch(`${window.baseUrl}category`)
          .then((res) => {
            if (res.status === 200) {
              return res.json()
            }
            else {
              throw new Error(res.status)
            }
          })
          .then(data => setCategories(data.data)
          )
          .catch((error) => {
            console.log(error);
          })
      }, [])

    // Read sub-categories from Api

    useEffect(() => {
        fetch(`${window.baseUrl}sub-category`)
            .then((res) => {
                if (res.status === 200) {
                    return res.json()
                }
                else {
                    throw new Error(res.status)
                }
            })
            .then(data => {
                setSub_categories(data.data)}
            )
            .catch((error) => {
                console.log(error);
            })
    }, [])




    // Create categories
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name ,description, categoryId)
        fetch(`${window.baseUrl}sub-category`, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                description: description,
                category_id: categoryId
            }),
            headers: {
                'Content-type': "application/json; charset=utf-8"
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    return res.json()
                }
                else {
                    throw new Error(res.status)
                }
            })
            .then(data => setSub_categories([...sub_categories, data.data])
            )
            .catch((error) => {
                console.log(error);
            })
        setShow(false)
    }

// View Sub Categorys 

const ViewSubCategory= (id) => {
    console.log(id)
    fetch(`${window.baseUrl}sub-category/${id}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        else {
          throw new Error(res.status)
        }
      })
      .then(data => {
        setViewCategoryName(data.data.category_name)
        setViewName(data.data.name)
        setViewdescription(data.data.description)
        setViewshow(true)
      }
      )
      .catch((error) => {
        console.log(error);
      })
      
  }


    // Get categories for Edit

    const editcategory = (id) => {
        fetch(`${window.baseUrl}sub-category/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    return res.json()
                }
                else {
                    throw new Error(res.status)
                }
            })
            .then(data => {
        console.log(data.data)

                setEditId(data.data.sub_category_id)
                setEditName(data.data.name)
                setEDitdescription(data.data.description)
                setEditShow(true)
            }
            )
            .catch((error) => {
                console.log(error);
            })

    }

    // update catecory 

    const handleEditSubmit = (e) => {

        e.preventDefault()
        console.log(categoryId)
        fetch(`${window.baseUrl}sub-category/${editId}`, {
            method: 'POST',
            body: JSON.stringify({
                category_id: categoryId,
                name: editName,
                description: editdescription,
                _method: 'PUT'
            }),
            headers: {
                'Content-type': "application/json; charset=utf-8"
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    return res.json()
                }
                else {
                    throw new Error(res.status)
                }
            })
            .then(data => {
                setSub_categories([...sub_categories.filter((sub_categorie) => sub_categorie.sub_category_id !== editId), data.data])
                
            }
            )
            .catch((error) => {
                console.log(error);
            })
        setEditShow(false)
    }

    // Delete categories
    const deletecategory = (id) => {
        setSub_categories(sub_categories.filter((sub_categorie) => sub_categorie.sub_category_id !== id));
        fetch(`${window.baseUrl}sub-category/${id}`, {
            method: 'DELETE'
        })
    }






    // Pagination

    const itemsPerPage = items;
    const PagesVisited = pageNumber * itemsPerPage

    const pageCount = Math.ceil(sub_categories.length / itemsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const displayitems = sub_categories ? sub_categories.slice(PagesVisited, PagesVisited + itemsPerPage)
        .map((item,index) => {
            console.log(item.name)
            return (<div className="item-management-sub-categories items_contents" key={index}>
                <div className="container_inner">
                    <div className="item_content">
                        <h4 className='item_element'>{item.name}</h4>
                    </div>
                    <div className="item_content">
                        <h4 className='item_element'>{item.category_name}</h4>
                    </div>
                    <div className="item_content">
                        <div className='item_element'>
                            <div className="item_element_buttons">
                                <button className='item_element_button' onClick={() => ViewSubCategory(item.sub_category_id)}><img src={Visible} alt="Visible" /></button>
                                <button className='item_element_button' onClick={() => editcategory(item.sub_category_id)} ><img src={Edit} alt="Edit" /></button>
                                <button className='item_element_button' onClick={() => deletecategory(item.sub_category_id)}><img src={Delete} alt="Delete" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }) : ''


    return (
        <>
            <Header title='Business Overview' />
            <div className="main_body">
                <div className="body_header">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/'>Dashboard</Link></li>
                            <li className="breadcrumb-item active">sub-categories</li>
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
                                    <h4>Sub-category Name</h4>
                                </div>
                                <div className="item_title">
                                    <h4>Category Name</h4>
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
                    <label htmlFor="" className='input_field_label'>Category</label>
                    <select className='input_field' type="text" defaultValue={'DEFAULT'} onChange={(e) => setCategoryId(e.target.value)}>
                        <option value="DEFAULT" disabled hidden>select Category</option>
                        {categories.map((category,index)=>{
                            // console.log(category.category_id)
                            return (
                                <option value={category.category_id} key={index}>{category.name}</option>
                            )
                        })}
                        
                    </select>
                </div>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Name</label>
                    <input className='input_field' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Description</label>
                    <input className='input_field' type="text" placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="input_contents">
                    <div className="input_group">
                        <button type='button' className='cancel' onClick={() => setShow(!show)}>CANCEL</button>
                    </div>
                    <div className="input_group">
                        <button className='submit' onClick={handleSubmit} >SUBMIT</button>
                    </div>
                </div>
            </Modal>

            {/* Edit item modal */}
            <Modal show={EditShow} setShow={setEditShow} title={"Edit Category"}>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Category</label>
                    <select className='input_field' type="text" defaultValue={'DEFAULT'} onChange={(e) => setCategoryId(e.target.value)}>
                    <option value="DEFAULT" disabled hidden>select Category</option>
                    {categories.map((category,index)=>{
                            return (
                                <option value={category.category_id} key={index}>{category.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Name</label>
                    <input className='input_field' type="text" placeholder='Name' value={editName} onChange={(e) => setEditName(e.target.value)} />
                </div>
                <div className='input_group'>
                    <label htmlFor="" className='input_field_label'>Description</label>
                    <input className='input_field' type="text" placeholder='Description' value={editdescription} onChange={(e) => setEDitdescription(e.target.value)} />
                </div>
                <div className="input_contents">
                    <div className="input_group">
                        <button type='button' className='cancel' onClick={() => setEditShow(!EditShow)}>CANCEL</button>
                    </div>
                    <div className="input_group">
                        <button className='submit' onClick={handleEditSubmit}>SUBMIT</button>
                    </div>
                </div>
            </Modal>
            <ViewModal viewshow={viewshow} setViewshow={setViewshow}>
                <div className='delivery_address_view pd_info_view'>
                    <ul>
                        <li>
                            <p>Name</p>
                            <h6>{viewName}</h6>
                        </li>
                        <li>
                            <p>Name</p>
                            <h6>{categoryName}</h6>
                        </li>
                        <li>
                            <p>description</p>
                            <h6>{viewdescription}</h6>
                        </li>
                    </ul>
                </div>
            </ViewModal>
        </>
    )
}

export default ItemManagementSubCategories