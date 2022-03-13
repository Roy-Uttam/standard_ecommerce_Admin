// APP CSS IMPORT
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Item from './Pages/ItemManagement/Item';
import SideNav from './AllPagesComponents/SideNav/SideNav';
import OrderManagement from './Pages/OrderManagement/OrderManagement';
import User from './Pages/UserManagement/User'
import Admin from './Pages/UserManagement/Admin'
import Logo from './Pages/ContentManagement/Logo';
import Offers from './Pages/ContentManagement/Offers';
import Promotion from './Pages/ContentManagement/Promotion';
import TopCategory from './Pages/ContentManagement/TopCategory';
import Categories from './Pages/ItemManagement/Categories';
import SubCategories from './Pages/ItemManagement/SubCategories';
import FeaturedItem from './Pages/ContentManagement/FeaturedItem';
import Testimonial from './Pages/ContentManagement/Testimonial';
import SocialLink from './Pages/ContentManagement/SocialLink';
import DeleveryFee from './Pages/ItemManagement/DeleveryFee';
import HeroSection from './Pages/ContentManagement/HeroSection';
import ViewModal from './CommonComponents/Modal/ViewModal/ViewModal';
import Home from './Pages/Home/Home';
import Variants from './Pages/ItemManagement/Variants';
import VariantsValues from './Pages/ItemManagement/VariantsValues';
import OfferSlider from './Pages/ContentManagement/OfferSlider';

function App() {
  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className='container'>
      <div className="container_inner">
        <div className="left_panel"> 
          <SideNav />
        </div>
        <div className="right_panel">
          <Routes>
            <Route path='/' element={<Home data={userData} />} />
            <Route path='/item' element={<Item />} />
            <Route path='/categories' element={<Categories/>} />
            <Route path='/variants' element={<Variants/>} />
            <Route path='/variants-values' element={<VariantsValues/>} />
            <Route path='/sub-categories' element={<SubCategories/>} />
            <Route path='/Order-management' element={<OrderManagement />} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='/user' element={<User />} />
            <Route path='/logo' element={<Logo/>} />
            <Route path='/promotion' element={<Promotion/>} />
            <Route path='/top-category' element={<TopCategory/>} />
            <Route path='/offers' element={<Offers/>} />
            <Route path='/featured-item' element={<FeaturedItem/>} />
            <Route path='/testimonial' element={<Testimonial/>} />
            <Route path='/social-link' element={<SocialLink/>} />
            <Route path='/hero-section' element={<HeroSection/>} />
            <Route path='/offer-slider' element={<OfferSlider/>} />
            <Route path='/delevery-fee' element={<DeleveryFee/>} />
            <Route path="/ViewModal" element={<ViewModal />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
