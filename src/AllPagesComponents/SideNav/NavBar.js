import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../SideNav/NavBar.css'
import NavItem from './NavItem';

function NavBar() {


  return (
    <>
      <ul className="navbar">
        <li className="nav_item">
          <NavLink to='/' className='nav_link'>Dashboard</NavLink>
        </li>
        <NavItem categoryName='Content Management'>
          <li className="sub_nav_item">
            <Link to='/logo' className='nav_link'>Logo</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/hero-section' className='nav_link'>Hero Section</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/offer-slider' className='nav_link'>Offer Slider</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/top-category' className='nav_link'>Top Category</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/featured-item' className='nav_link'>Featured Item</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/testimonial' className='nav_link'>Testimonial Section</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/social-link' className='nav_link'>Social Links</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/promotion' className='nav_link'>Promotion</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/offers' className='nav_link'>Offers</Link>
          </li>
        </NavItem>
        <NavItem categoryName='Item Management'>
          <li className="sub_nav_item">
            <Link to='/categories' className='nav_link'>Catagories</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/sub-categories' className='nav_link'>Sub- Catagories</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/item' className='nav_link'>Item</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/delevery-fee' className='nav_link'>Delivery Fee</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/variants' className='nav_link'>Variants</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/variants-values' className='nav_link'>Variants Values</Link>
          </li>
          
        </NavItem>
        <li className="nav_item">
          <NavLink to='/Order-management' className='nav_link'>Order Management</NavLink>
        </li>
        <NavItem categoryName='User Management'>
          <li className="sub_nav_item">
            <Link to='/admin' className='nav_link'>Admin</Link>
          </li>
          <li className="sub_nav_item">
            <Link to='/user' className='nav_link'>User</Link>
          </li>
        </NavItem>
      </ul>
    </>
  )
}

export default NavBar