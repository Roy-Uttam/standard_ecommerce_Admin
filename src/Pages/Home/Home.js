import React from 'react'
import Header from '../../AllPagesComponents/Header/Header'

import './Home.css'

function Home() {
  return (
    <>
      <Header title='Business Overview' />
      <div className="main_body">
         <div className="body_header">
           <h2 className="page_title">At a Glance</h2>
         </div>
         <div className="body_content">
           <div className="dashboard">
             <div className="col">
               <p>Total Admin</p>
               <h1>2</h1>
             </div>
             <div className="col">
               <p>Products</p>
               <h1>24</h1>
             </div>
             <div className="col">
               <p>Total Customers</p>
               <h1>10</h1>
             </div>
             <div className="col">
               <p>Total Orders</p>
               <h1>48</h1>
             </div>
           </div>
         </div>
      </div>
    </>
  )
}

export default Home