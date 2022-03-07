import React, { useEffect, useState } from 'react'
import ReactPagination from 'react-paginate';

import Header from '../../AllPagesComponents/Header/Header'
import "../Body.css"
import Visible from "../../Assets/Icons/visibility-black.svg"
import Edit from "../../Assets/Icons/edit-black.svg"
import Delete from "../../Assets/Icons/delete-black.svg"

import { Link } from 'react-router-dom';
import AddButton from '../../CommonComponents/Buttons/AddButton';
import Search from '../../CommonComponents/Search';
import Modal from "../../CommonComponents/Modal/Modal"
import ViewModal from '../../CommonComponents/Modal/ViewModal/ViewModal';


 function Variants() {
  const [variants, setVariants] = useState([]);

  console.log(variants)  
  const [name, setName] = useState('')
  // const [description, setDescription] = useState('')


  const [editId, setEditId]= useState('');
  const [editName, setEditName] = useState('');

  const [viewName, setViewName] = useState('');
  const [viewdescription, setViewdescription] = useState('');

  const [show, setShow] = useState(false);
  const [EditShow, setEditShow] = useState(false);
  const [viewshow, setViewshow] = useState(false);

  
  const [items] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);


  const handleClick = () => {
    setShow(!show)
  }


  // ===Fetching Data from api===

  // Read Variants from Api

  useEffect(() => {
    fetch(`${window.baseUrl}variants`)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        else {
          throw new Error(res.status)
        }
      })
      .then(data => setVariants(data.data)
      )
      .catch((error) => {
        console.log(error);
      })
  }, [])




  // Create Variants
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
    fetch(`${window.baseUrl}variants`, {
      // mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({
        name: name,
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
      .then(data =>{ 
        console.log(data);
        setVariants([...variants, data.data])}
      )
      .catch((error) => {
        console.log(error);
      })
    setShow(false)
  }




// Get Variants for Edit

const editcategory= async (id) => {
  console.log(id)
  await fetch(`${window.baseUrl}variants/${id}`)
    .then((res) => {
      if (res.status === 200) {
        return res.json()
      }
      else {
        throw new Error(res.status)
      }
    })
    .then(data => {
      setEditId(data.data.variant_id)
      setEditName(data.data.name)
      setEditShow(true)
    }
    )
    .catch((error) => {
      console.log(error);
    })
    
}

// View Variants


const ViewVariants= (id) => {
  console.log(id)
  fetch(`${window.baseUrl}variants/${id}`)
    .then((res) => {
      if (res.status === 200) {
        return res.json()
      }
      else {
        throw new Error(res.status)
      }
    })
    .then(data => {
      // setViewId(data.data.category_id)
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
  console.log(editName)
  fetch(`${window.baseUrl}variants/${editId}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: editName,
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
      setVariants([...variants.filter((variant) => variant.variant_id !== editId), data.data])
      
    }
    )   
    .catch((error) => {
      console.log(error);
    })
    setEditShow(false)
}

  // Delete Variants
  const deletecategory = async (id) => {
    setVariants(variants.filter((variant) => variant.variant_id !== id));
    await fetch(`${window.baseUrl}variants/${id}`,{
      method: 'DELETE'
    })
  }




  // Pagination

  const itemsPerPage = items;
  const PagesVisited = pageNumber * itemsPerPage

  const pageCount = Math.ceil(variants.length / itemsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const displayitems = variants ? variants.slice(PagesVisited, PagesVisited + itemsPerPage)
    .map((item,index) => {
      return (
        <div className="item-management-Variants items_contents" key={index}>
          <div className="container_inner">
            <div className="item_content">
              <h4 className='item_element'>{item.name}</h4>
            </div>
            <div className="item_content">
              <div className='item_element'>
                <div className="item_element_buttons">
                  <button className='item_element_button' onClick={() => ViewVariants(item.variant_id)}><img src={Visible} alt="Visible" /></button>
                  <button className='item_element_button'onClick={()=>editcategory(item.variant_id)} ><img src={Edit} alt="Edit" /></button>
                  <button className='item_element_button' onClick={()=>deletecategory(item.variant_id)}><img src={Delete} alt="Delete" /></button>
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
              <li className="breadcrumb-item active">Variants</li>
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
                    </ul>
                </div>
            </ViewModal>
    </>
  )
}


export default Variants