// React Module Imports
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// ALL PAGE Components Imports
import NavbarLargeDevice from './AllPagesComponents/Navbar/NavbarLargeDevice/NavbarLargeDevice';
import NavbarSmallDevice from './AllPagesComponents/Navbar/NavbarSmallDevice/NavbarSmallDevice';
import Cart from "./AllPagesComponents/Cart/Cart";
import Footer from './AllPagesComponents/Footer/Footer';

// PAGES IMPORT

// A. Home Page Import
import Home from './Pages/Home/Home';

// B. Product Pages Import
import AllProducts from './Pages/Product/AllProducts';
import ProductDetails from './Pages/Product/ProductDetails';
import Offers from './Pages/Product/Offers';

// C. Order Pages Import
import Checkout from './Pages/Order/Checkout';
import OrderConfirmation from './Pages/Order/OrderConfirmation';

// D. My Library Pages Import
import WishList from './Pages/MyLibrary/WishList';
import MyOrders from './Pages/MyLibrary/MyOrders';
import OrderDetails from './Pages/MyLibrary/OrderDetails';

// E. Profile Pages Import
import Profile from './Pages/Profile/Profile';
import ProfileEdit from './Pages/Profile/ProfileEdit';
import DeliveryAddressAll from './Pages/Profile/DeliveryAddressAll';
import DeliveryAddressEdit from './Pages/Profile/DeliveryAddressEdit';

// F. Authentication Pages Import
import SignIn from './Pages/Authentication/SignIn';
import SignUp from './Pages/Authentication/SignUp';
import ForgetPassword from './Pages/Authentication/ForgetPassword';
import RecoverPassword from './Pages/Authentication/RecoverPassword';

// PAGES IMPORT END
import ProductsData from './Assets/LocalData/ProductsData.json';


// APP CSS IMPORT
import "./App.css"

function App() {
  // Default Hide Navbar Cart Count
  const [showCart, setShowCart] = useState(false);
  const [cartItems,setcartItems] = useState([{product:0, qty:0}]);


  const toAdd = (product)=>{
    const exist = cartItems.find(item=> item.id === product.id );
    if(exist){
      setcartItems(cartItems.map(item=> item.id === product.id?{...exist, qty: exist.qty + 1} : item ))
    } else{
      setcartItems([...cartItems, {...product, qty: 1 }])
    }
  }

  return (
    <div>

      {/* Navbar Cart Count Toggle */}
      <NavbarLargeDevice showCart={showCart} setShowCart={setShowCart} cartItems={cartItems} />
      <NavbarSmallDevice  showCart={showCart} setShowCart={setShowCart} cartItems={cartItems}/>
      
      <Routes>
        {/* PAGES ROUTE */}

        {/* A. Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* B. Product Pages Route */}
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:Product_id" element={<ProductDetails toAdd={toAdd} cartItems={cartItems} />} />
        <Route path="/offers" element={<Offers />} />

        {/* C. Order Pages Route */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />

        {/* D. My Library Pages Route */}
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/order-details" element={<OrderDetails />} />

        {/* E. Profile Pages Route */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/delivery-address-all" element={<DeliveryAddressAll />} />
        <Route path="/delivery-address-edit" element={<DeliveryAddressEdit />} />

        {/* F. Authentication Pages Route */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
      </Routes>

      <Cart toAdd={toAdd} showCart={showCart} setShowCart={setShowCart} cartItems={ProductsData} setcartItems={setcartItems} />

      <Footer />

    </div>
  );
}

export default App;
