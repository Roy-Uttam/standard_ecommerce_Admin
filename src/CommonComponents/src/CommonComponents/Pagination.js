
// React Module Imports
import React, { useState } from 'react';
import ReactPagination from 'react-paginate';

// Import Prouct Data
import Data from '../Assets/LocalData/ProductsData.json';

// Common Components Imports
import Card from './ProductCard';

// Import Image Icons
import Downarrow from '../Assets/icons/small-downarrow.svg';


function Pagination() {
  const [users, setUsers] = useState(Data);
  const [pageNumber, setPageNumber] = useState(0);
  const [show, setShow] = useState(true);

  // Pagination
  const FilterItem = (category) => {
    const updatedData = Data.filter((data) => {
      return data.title === category;
    })
    setUsers(updatedData)
  }
  // Pagination

  const usersPerPage = 9;
  const PagesVisited = pageNumber * usersPerPage

  const displayUsers = users.slice(PagesVisited, PagesVisited + usersPerPage)
    .map((user, index) => {
      return <Card key={index} title={user.title} index={user.userId} url={ user.id} />
    })

  const pageCount = Math.ceil(users.length / usersPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  return (
    <>
      <div className="cards_count">
        <p>{users.length} items found </p>
        <div className="sort" onClick={() => setShow(!show)}>
          <p>Sort</p>
          <img src={Downarrow} alt="Downarrow" />
        </div>
        <span className={show ? "sort_list" : "sort_list show_sort "}>
          <h4 onClick={() => setUsers(Data)}>All</h4>

          <h4 onClick={() => FilterItem("Male")}>Male</h4>
          <h4 onClick={() => FilterItem("Female")}>Female</h4>
          <h4 onClick={() => FilterItem("child")}>child</h4>
        </span>
      </div>
      <div className="card_list">
        {displayUsers}
        <ReactPagination
          previousLabel={"<<"}
          nextLabel={">>"}
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

    </>

  )
}

export default Pagination
