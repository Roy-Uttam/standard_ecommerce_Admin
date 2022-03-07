import React, { useEffect, useState } from 'react'
import ReactPagination from 'react-paginate';

import Header from '../../AllPagesComponents/Header/Header'
import "../Body.css"
import Visible from "../../Assets/Icons/visibility-black.svg"
import Edit from "../../Assets/Icons/edit-black.svg"
import Delete from "../../Assets/Icons/delete-black.svg"

// import Data from "../../Assets/Items.json"
import { Link } from 'react-router-dom';
import AddButton from '../../CommonComponents/Buttons/AddButton';
import Search from '../../CommonComponents/Search';
import Modal from "../../CommonComponents/Modal/Modal"
import ViewModal from '../../CommonComponents/Modal/ViewModal/ViewModal';


export default function Categories() {
  const [Categories, setCategories] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  // console.log(selectedFiles)


  const [name, setName] = useState('')
  const [description, setDescription] = useState('')


  const [editId, setEditId]= useState('');
  const [editName, setEditName] = useState('');
  const [editdescription, setEDitdescription] = useState('');

  const [viewId, setViewId]= useState('');
  const [viewName, setViewName] = useState('');
  const [viewdescription, setViewdescription] = useState('');
  console.log(viewId)
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




  // Create categories
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${window.baseUrl}category`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        description: description
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
      .then(data => setCategories([...Categories, data.data])
      )
      .catch((error) => {
        console.log(error);
      })
    setShow(false)
  }




// Get categories for Edit

const editcategory= async (id) => {
  console.log(id)
  await fetch(`${window.baseUrl}category/${id}`)
    .then((res) => {
      if (res.status === 200) {
        return res.json()
      }
      else {
        throw new Error(res.status)
      }
    })
    .then(data => {
      setEditId(data.data.category_id)
      setEditName(data.data.name)
      setEDitdescription(data.data.description)
      setEditShow(true)
    }
    )
    .catch((error) => {
      console.log(error);
    })
    
}

// View Categories


const ViewCategories= (id) => {
  console.log(id)
  fetch(`${window.baseUrl}category/${id}`)
    .then((res) => {
      if (res.status === 200) {
        return res.json()
      }
      else {
        throw new Error(res.status)
      }
    })
    .then(data => {
      setViewId(data.data.category_id)
      setViewName(data.data.name)
      setViewdescription(data.data.description)
      setViewshow(true)
    }
    )
    .catch((error) => {
      console.log(error);
    })
    
}

// update catecory 

const handleEditSubmit = (e) => {
    
  e.preventDefault()
  fetch(`${window.baseUrl}category/${editId}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: editName,
      description: editdescription
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
      setCategories([...Categories.filter((category) => category.category_id !== editId), data.data])
      
    }
    )   
    .catch((error) => {
      console.log(error);
    })
    setEditShow(false)
}

  // Delete categories
  const deletecategory = async (id) => {
    setCategories(Categories.filter((category) => category.category_id !== id));
    await fetch(`${window.baseUrl}category/${id}`,{
      method: 'DELETE'
    })
  }


// Image upload

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
  console.log('source: ', source);
  return source.map((photo) => {
    return <div className="field_imglist"><img className='input_img' src={photo} alt="" key={photo} /></div>;
  });
}



  // Pagination

  const itemsPerPage = items;
  const PagesVisited = pageNumber * itemsPerPage

  const pageCount = Math.ceil(Categories.length / itemsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const displayitems = Categories ? Categories.slice(PagesVisited, PagesVisited + itemsPerPage)
    .map((item) => {
      return (
        <div className="item-management-categories items_contents" key={item.category_id}>
          <div className="container_inner">
            <div className="item_content">
              <h4 className='item_element'>{item.name}</h4>
            </div>
            <div className="item_content">
              <div className='item_element'>
                <div className="item_element_buttons">
                  <button className='item_element_button' onClick={() => ViewCategories(item.category_id)}><img src={Visible} alt="Visible" /></button>
                  <button className='item_element_button'onClick={()=>editcategory(item.category_id)} ><img src={Edit} alt="Edit" /></button>
                  <button className='item_element_button' onClick={()=>deletecategory(item.category_id)}><img src={Delete} alt="Delete" /></button>
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
              <li className="breadcrumb-item active">categories</li>
            </ol>
          </nav>
          <div className="btn_addnew_wrapper">
            <AddButton handleClick={handleClick} >add new</AddButton>
          </div>
        </div>
        <div className="show_search">
          <div className="show_group">
            <label htmlFor="show">Show :</label>
            <input type="number" id="show" placeholder='10' min-value='1' />
          </div>
          <Search />
        </div>
        <div className="column_2">
          <div className="body_content">
            <div className="items_header">
              <div className="container_inner">
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
      <Modal show={show} setShow={setShow} title={"Add new Category"}>
        <div className='input_group'>
          <label htmlFor="" className='input_field_label'>Name</label>
          <input className='input_field' type="text" placeholder='Name'  onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='input_group'>
          <label htmlFor="" className='input_field_label'>Description</label>
          <input className='input_field' type="text" placeholder='Description'  onChange={(e) => setDescription(e.target.value)} />
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
            <button className='submit' onClick={handleSubmit}>SUBMIT</button>
          </div>
        </div>
      </Modal>
      {/* Edit item modal */}
      <Modal show={EditShow} setShow={setEditShow} title={"Edit Category"}>
        <div className='input_group'>
          <label htmlFor="" className='input_field_label'>Name</label>
          <input className='input_field' type="text" placeholder='Name' value={editName} onChange={(e) => setEditName(e.target.value)} />
        </div>
        <div className='input_group'>
          <label htmlFor="" className='input_field_label'>Description</label>
          <input className='input_field' type="text" placeholder='Description' value={editdescription} onChange={(e) => setEDitdescription(e.target.value)} />
        </div>
        <div className='input_group'>
          <div>
            <label htmlFor="" className='input_field_label'>Image (Max 10)</label>
            <input type="file" id="file" onChange={handleImageChange} />
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
                            <p>Description</p>
                            <h6>{viewdescription}</h6>
                        </li>
                    </ul>
                </div>
            </ViewModal>
    </>
  )
}
