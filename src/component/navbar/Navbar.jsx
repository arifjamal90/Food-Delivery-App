import React, { useState, useEffect, useContext } from 'react';
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { BsFillBasketFill } from "react-icons/bs";
import {Link } from "react-router-dom"
import { UserContext } from '../context/MyContext';
const Navbar = ({setShowLogin}) => {
  const [activeTab, setActiveTab] = useState('Home'); 
  const{getTotalCartAmount,totalCount}=useContext(UserContext)
 

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
};


  useEffect(() => {

    setActiveTab('Home');
  }, []); 

  return (
    <div className='navbar'>
      <div className="logo">
       <Link to="/"> <img src="../assets/logo.png" alt="" /></Link>
      </div>

      <ul className="navbarul">
      <li className={activeTab === "Home" ? 'active' : ''} onClick={() => handleTabClick("Home")}>Home</li>
      <li className={activeTab === "About" ? 'active' : ''} onClick={() => handleTabClick("About")}>About</li>
      <li className={activeTab === "Mobile-App" ? 'active' : ''} onClick={() => handleTabClick("Mobile-App")}>Mobile-App</li>
      <li className={activeTab === "Contact-Us" ? 'active' : ''} onClick={() => handleTabClick("Contact-Us")}>Contact-Us</li>
  </ul>

      <div className="navbar-right">
      <li><IoSearch /></li>

     <Link to="/cart"> <li><BsFillBasketFill /></li></Link>
      <div className={getTotalCartAmount()===0? "":"dot"}>{totalCount}</div>
      <button className='signBtn' onClick={()=> setShowLogin(true)}>Sign In</button>
    </div>
    </div>
  );
};

export default Navbar;
