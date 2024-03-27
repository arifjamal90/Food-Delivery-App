import React, { useState } from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import Cart from './component/cart/Cart';
import PlaceOrderd from './component/placeOrderd/PlaceOrderd';
import { Routes, Route } from 'react-router';
import Footer from './component/footer/Footer';
import Loginpopup from './component/LoginPopup/Loginpopup';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <>   
      {showLogin ? <Loginpopup  setShowLogin={setShowLogin}/> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrderd />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
