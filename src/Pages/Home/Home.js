import React, { useEffect, useState } from 'react'
import Header from '../../AllPagesComponents/Header/Header'

import './Home.css'

function Home(data) {

  console.log(data.data.access_token)

  // total items count
  const [Itemcount, setItemsCount] = useState([]);
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
      .then(data => setItemsCount(data.data.length)
      )
      .catch((error) => {
        console.log(error);
      })
  }, [])


  // total Order count
  const [Ordercount, setIordersCount] = useState([]);
  useEffect(() => {
    fetch(`${window.baseUrl}orders`)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        else {
          throw new Error(res.status)
        }
      })
      .then(data => setIordersCount(data.data.length)
      )
      .catch((error) => {
        console.log(error);
      })
  }, [])
 

  // Total customers
  const [TotalCustomer, setTotalCustomer] = useState([]);
  useEffect(() => {
    
        fetch(`${window.baseUrl}auth/all-users`,{
          headers: { 
              'Accept': 'application/json',
              'Content-Type': 'application/json',
               "Authorization":  `Bearer ${data.data.access_token}`   
              },
        })
        .then(res => res.json())
          .then(data => setTotalCustomer(data));
        

  }, [])


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
               <h1>{Itemcount}</h1>
             </div>
             <div className="col">
               <p>Total Customers</p>
               <h1>{TotalCustomer}</h1>
             </div>
             <div className="col">
               <p>Total Orders</p>
               <h1>{Ordercount}</h1>
             </div>
           </div>
         </div>
      </div>
    </>
  )
}

export default Home