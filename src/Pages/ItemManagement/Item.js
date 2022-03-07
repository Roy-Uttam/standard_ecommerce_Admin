import React, { useEffect, useState } from 'react'
import ReactPagination from 'react-paginate';

import Header from '../../AllPagesComponents/Header/Header'
import "../Body.css"
import Image from "../../Assets/Icons/icon.svg"
import Visible from "../../Assets/Icons/visibility-black.svg"
import Edit from "../../Assets/Icons/edit-black.svg"
import Delete from "../../Assets/Icons/delete-black.svg"

// import Data from "../../Assets/Items.json"
import { Link } from 'react-router-dom';
import AddButton from '../../CommonComponents/Buttons/AddButton';
import Search from '../../CommonComponents/Search';
import Modal from "../../CommonComponents/Modal/Modal"
import ViewModal from '../../CommonComponents/Modal/ViewModal/ViewModal';



// Multiple sepece 

import Select from 'react-select';
// import makeAnimated from 'react-select/animated';

function ItemManagmentItem() {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([])
  const [items, setItems] = useState([]);
  // console.log(categories);

  // get the (id as value) and (name as label) from catrgorys into an array
  let Categoriesarray = []

  const Categoriesdata = categories.map(e => {
    return { categoryId: e.category_id, name: e.name }
  })
  Categoriesdata.map(e => {
    Categoriesarray.push({ value: e.categoryId, label: e.name })
  })

  // get the (id as value) and (name as label) from subCategories into an array
  let SubCategoriesarray = []

  const SubCategoriesdata = subCategories.map(e => {
    return { sub_category_id: e.sub_category_id, name: e.name }
  })
  SubCategoriesdata.map(e => {
    SubCategoriesarray.push({ value: e.sub_category_id, label: e.name })
  })

  //  console.log(SubCategoriesarray)




  // filds ststes 

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')

  const [categoryId, setCategoryId] = useState([])
  const [subCategoryId, setSubCategoryId] = useState([])

  const [visible, setVisible] = useState(false)
  const [availabne, setAvailable] = useState(false)
  const [visibleValue, setVisibleValue] = useState(0)
  const [availabneValue, setAvailableValue] = useState(0)
  const [categoryOrSubcategory, setCategoryOrSubcategory] = useState('0')

  const handleChange = (event) => {
    // const value = event.target.value
    // event.target.value === '1' ? setCategoryOrSubcategory(1) : setCategoryOrSubcategory(0)
    setCategoryOrSubcategory( event.target.value)
    // console.log()
  }

  useEffect(() => {
    availabne ? setAvailableValue(1) : setAvailableValue(0);
  }, [availabne])

  
  useEffect(() => {
    visible ? setVisibleValue(1) : setVisibleValue(0);
  }, [visible])

  const [viewshow, setViewshow] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [show, setShow] = useState(false);

  const cat_id = [];

  categoryId.map((e)=>{
    cat_id.push(e.value)
  })

  const sub_id = [];

  subCategoryId.map((e)=>{
    sub_id.push(e.value)
  })

  console.log(`name: ${name},
  description: ${description},
  category_or_sub_category: ${categoryOrSubcategory},
  item_asset: ${selectedFiles},
  item_price: ${price},
  category_id: ${cat_id},
  sub_category_id: ${sub_id},
  quantity: ${quantity},
  is_visible: ${visibleValue},
  is_available: ${availabneValue}`)



  // Get All Products Items

  useEffect(() => {
    fetch(`${window.baseUrl}items`)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        else {
          throw new Error(res.status)
        }
      })
      .then(data => setItems(data.data)
      )
      .catch((error) => {
        console.log(error);
      })
  }, [])

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
      .then(data => { setCategories(data.data) }
      )
      .catch((error) => {
        console.log(error);
      })
  }, [])



  // Read subcategories from Api

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
      .then(data => { setSubCategories(data.data) }
      )
      .catch((error) => {
        console.log(error);
      })
  }, [])


  // Create  Products Items

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${window.baseUrl}items`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        description: description,
        category_or_sub_category: categoryOrSubcategory,
        item_asset: selectedFiles,
        item_price: price,
        category_id: cat_id,
        sub_category_id: sub_id,
        quantity: quantity,
        is_visible: visible,
        is_available: availabneValue
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
      .then(data => setItems([...items, data.data])
      )
      .catch((error) => {
        console.log(error);
      })
    setShow(false)
  }





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
    .map((item, index) => {
      return <>
        <div className="item-managment-item items_contents" key={index}>
          <div className="container_inner">
            <div className="item_content">
              <div className="item_element img_content">
                <img src={Image} alt="Product" />
              </div>
            </div>
            <div className="item_content">
              <h4 className='item_element'>Name 1</h4>
            </div>
            <div className="item_content">
              <h4 className='item_element'>৳ Price</h4>
            </div>
            <div className="item_content">
              <h4 className='item_element'>Category 1</h4>
            </div>
            <div className="item_content">
              <div className='item_element'>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="item_content">
              <div className='item_element'>
                <div className="item_element_buttons">
                  <button className='item_element_button' onClick={() => setViewshow(!viewshow)}><img src={Visible} alt="Visible" /></button>
                  <button className='item_element_button'><img src={Edit} alt="Edit" /></button>
                  <button className='item_element_button'><img src={Delete} alt="Delete" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    })


  return (
    <>
      <Header title='Business Overview' />
      <div className="main_body">
        <div className="body_header">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to='/'>Dashboard</Link></li>
              <li className="breadcrumb-item active">Item</li>
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
                <h4>Price</h4>
              </div>
              <div className="item_title">
                <h4>Category</h4>
              </div>
              <div className="item_title">
                <h4>Visible</h4>
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
      {/* add item modal */}
      <Modal show={show} setShow={setShow}>
        <div className='input_group'>
          <label htmlFor="" className='input_field_label'>Name</label>
          <input className='input_field' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='input_group'>
          <label htmlFor="" className='input_field_label'>Description</label>
          <input className='input_field' type="text" placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='input_group'>
          <label htmlFor="" className='input_field_label'>Price</label>
          <input className='input_field' type="text" placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="input_contents">
          <div className='input_group'>
            <label htmlFor="" className='input_field_label'>Category</label>
            <Select
              closeMenuOnSelect={false}
              isMulti
              options={Categoriesarray}
              onChange={setCategoryId}
            />
          </div>
          <div className='input_group'>
            <label htmlFor="" className='input_field_label'>Sub Category</label>
            <Select
              closeMenuOnSelect={false}
              isMulti
              options={SubCategoriesarray}
              onChange={setSubCategoryId}

            />
          </div>
        </div>
        <div className="input_contents">
          <div className='input_group'>
            <label htmlFor="" className='input_field_label'>Quantity</label>
            <input className='input_field' type="text" placeholder='Category' onChange={(e) => setQuantity(e.target.value)} />
          </div>
          <div className='input_group'>
            <div className='checkbox_group'>
              <label htmlFor="" className='input_field_label'>Visible:</label>
              <label className="chackbox_container">
                <input type="checkbox" name="Option 1" onClick={() => setVisible(!visible)} />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className='checkbox_group'>
              <label htmlFor="" className='input_field_label'>Available:</label>
              <label className="chackbox_container">
                <input type="checkbox" name="Option 1" onClick={() => setAvailable(!availabne)} />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className='checkbox_group'>
              <label htmlFor="" className='input_field_label'>On Category:</label>
              <label className="chackbox_container">
              <input type="radio" name="Option 1" value= "0"
                  checked={categoryOrSubcategory === '0'}
                  onChange={handleChange} />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className='checkbox_group'>
              <label htmlFor="" className='input_field_label'> On Sub Category:</label>
              <label className="chackbox_container">
                <input type="radio" name="Option 1" value= '1'
                  checked={categoryOrSubcategory === '1' }
                  onChange={handleChange} />
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
            <button className='submit' to="/" onClick={handleSubmit} >SUBMIT</button>
          </div>
        </div>
      </Modal>
      <ViewModal viewshow={viewshow} setViewshow={setViewshow}>
        <div className='delivery_address_view pd_info_view'>
          <ul>
            <li>
              <p>Description</p>
              <h6>Description 1</h6>
            </li>
            <li>
              <p>Precedence</p>
              <h6>1</h6>
            </li>
            <li>
              <p>Promotions</p>
              <h6>Promotion 1</h6>
            </li>
            <li>
              <h6 className='view_modal_imgtag'>Image</h6>
              <div className="image_content">
                <div className="image">
                  <img src={Image} alt="thumbnail" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </ViewModal>

    </>
  )
}
export default ItemManagmentItem