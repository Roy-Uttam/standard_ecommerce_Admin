import React, { useEffect, useState } from "react";
import ReactPagination from "react-paginate";
import Header from "../../AllPagesComponents/Header/Header";
import "../Body.css";
import Visible from "../../Assets/Icons/visibility-black.svg";
import Edit from "../../Assets/Icons/edit-black.svg";
import Image from "../../Assets/Icons/icon.svg";
import Delete from "../../Assets/Icons/delete-black.svg";
import { Link } from "react-router-dom";
import Search from "../../CommonComponents/Search";
import ViewModal from "../../CommonComponents/Modal/ViewModal/ViewModal";
import AddButton from "../../CommonComponents/Buttons/AddButton";
import Modal from "../../CommonComponents/Modal/Modal";
import Select from "react-select";

export default function FeaturedItem() {
  const [ItemsID, setItemsID] = useState([]);
  const [Featured, setFeatured] = useState([]);
  const [EditShow, setEditShow] = useState(false);
  const [editId, setEditId]= useState('');
  const [editName, setEditName] = useState('');
  // get the (id as value) and (name as label) from catrgorys into an array
  let Featuresarray = [];
  const Categoriesdata = ItemsID.map((e) => {
    return { ItemsId: e.item_id, name: e.name };
  });
  Categoriesdata.map((e) => {
    Featuresarray.push({ value: e.ItemsId, label: e.name });
  });

  // filds ststes

  const [name, setName] = useState("");
  const [ItemsId, setItemsId] = useState([]);
  const [viewshow, setViewshow] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [show, setShow] = useState(false);

  const Item_id = [];
  ItemsId.map((e) => {
    Item_id.push(e.value);
  });

  //   Get All featured Items

  useEffect(() => {
    fetch(`${window.baseUrl}features`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error(res.status);
        }
      })
      .then((data) => setFeatured(data.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Read Items from Api

  useEffect(() => {
    fetch(`${window.baseUrl}items`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error(res.status);
        }
      })
      .then((data) => {
        setItemsID(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Create Featured Items

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${window.baseUrl}features`, {
      method: "POST",
      body: JSON.stringify({
        title: name,
        items: Item_id,
      }),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error(res.status);
        }
      })
      .then((data) => setFeatured([data.data, ...Featured]))
      .catch((error) => {
        console.log(error);
      });
    setShow(false);
  };


  const editFeatured= async (id) => {
    console.log(id)
    await fetch(`${window.baseUrl}features/${id}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        else {
          throw new Error(res.status)
        }
      })
      .then(data => {
          console.log(data)
        setEditId(data.data.feature_id)
        setEditName(data.data.title)
        
        setEditShow(true)
      }
      )
      .catch((error) => {
        console.log(error);
      })
      
  }
  
  const handleEditSubmit = (e) => {
    
    e.preventDefault()
    // console.log(editName)
    fetch(`${window.baseUrl}features/${editId}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: name,
        items: Item_id,
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
        setFeatured([data.data,...Featured.filter((Feature) => Feature.feature_id !== editId)])
        
      }
      )   
      .catch((error) => {
        console.log(error);
      })
      setEditShow(false)
  }


  // Delete featured
  const deleteFeatured = async (id) => {
    setFeatured(Featured.filter((feature) => feature.feature_id !== id));
    await fetch(`${window.baseUrl}features/${id}`,{
      method: 'DELETE'
    })
  }

  // Item Modal
  const handleClick = () => {
    setShow(!show);
  };

  // Pagination

  const itemsPerPage = 3;
  const PagesVisited = pageNumber * itemsPerPage;

  const pageCount = Math.ceil(Featured.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayitems = Featured.slice(
    PagesVisited,
    PagesVisited + itemsPerPage
  ).map((item, index) => {
    return (
      <>
        <div
          className="item-managment-item items_contents"
          key={item.feature_id}
        >
          <div className="container_inner">
            <div className="item_content">
              <h4 className="item_element">{item.title}</h4>
            </div>
            <div className="item_content">
              <h4 className="item_element"></h4>
            </div>
            <div className="item_content">
              <div className="item_element">
                <div className="item_element_buttons">
                  <button
                    className="item_element_button"
                    onClick={() => setViewshow(!viewshow)}
                  >
                    <img src={Visible} alt="Visible" />
                  </button>
                  <button className='item_element_button'onClick={()=>editFeatured(item.feature_id)} ><img src={Edit} alt="Edit" /></button>
                  <button className='item_element_button' onClick={()=>deleteFeatured(item.feature_id)}><img src={Delete} alt="Delete" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <Header title="Business Overview" />
      <div className="main_body">
        <div className="body_header">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
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
            <input type="number" id="show" placeholder="10" min-value="1" />
          </div>
          <Search />
        </div>
        <div className="column_3">
        <div className="body_content">
          <div className="items_header">
            <div className="container_inner">
              <div className="item_title">
                <h4>title</h4>
              </div>

              <div className="item_title">
                <h4>Items</h4>
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
              renderOnZeroPageCount={null}
              pageSize={10}
              containerClassName="pagination"
              previousClassName=""
              marginPagesDisplayed={1}
            ></ReactPagination>
          </div>
        </div>
      </div>
      </div>


      {/* Add modal */}
      <Modal show={show} setShow={setShow}>
        <div className="input_group">
          <label htmlFor="" className="input_field_label">
            Title
          </label>
          <input
            className="input_field"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input_contents">
          <div className="input_group">
            <label htmlFor="" className="input_field_label">
              Items
            </label>
           
            <Select
              closeMenuOnSelect={false}
              isMulti
              options={Featuresarray}
              onChange={setItemsId}
            />
          </div>
        </div>
        <div className="input_contents">
          <div className="input_group">
            <button
              type="button"
              className="cancel"
              onClick={() => setShow(!show)}
            >
              CANCEL
            </button>
          </div>
          <div className="input_group">
            <button className="submit" to="/" onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
        </div>
      </Modal>

       {/* Edit modal */}
       <Modal show={EditShow} setShow={setEditShow} title={"Edit Category"}>
        <div className="input_group">
          <label htmlFor="" className="input_field_label">
            Title
          </label>
          <input
            className="input_field"
            type="text"
            placeholder="Name"
            defaultValue={editName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input_contents">
          <div className="input_group">
            <label htmlFor="">
              Items
            </label>

            <Select
              closeMenuOnSelect={false}
              isMulti
              options={Featuresarray}
              
              onChange={setItemsId}
            />
          </div>
        </div>
        <div className="input_contents">
          <div className="input_group">
            <button
              type="button"
              className="cancel"
              onClick={() => setEditShow(!EditShow)}
            >
              CANCEL
            </button>
          </div>
          <div className="input_group">
            <button className="submit" to="/" onClick={handleEditSubmit}>
              SUBMIT
            </button>
          </div>
        </div>
      </Modal>

      <ViewModal viewshow={viewshow} setViewshow={setViewshow}>
        <div className="delivery_address_view pd_info_view">
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
        
          </ul>
        </div>
      </ViewModal>
    </>
  );
}
