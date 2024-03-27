import React from 'react'
import "./footer.css";
const Footer = () => {
  return (
    <div className='footer-menu' id="footer-menu">
      <div className="footer">
      <div className="footer_content">
      <div className="footer-content-left">
      <img  className='logo' src="../../assets/logo.png" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint adipisci, quisquam id vitae blanditiis. Error voluptas, libero dolorum tenetur aperiam iusto, eveniet in doloremque est amet minima voluptatum tempora?</p>
      <div className="footer-social-icons">
      <img className='icons' src="../../assets/facebook_icon.png" alt="logo" />
      <img className='icons' src="../../assets/twitter_icon.png" alt="logo" />
      <img className='icons' src="../../assets/linkedin_icon.png" alt="logo" />
      </div>
      </div>
      <div className="footer-content-center">
      <h2>COMPANY</h2>
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Delivery</li>
      <li> Privacy policy</li>
      </ul>
      </div>
      <div className="footer-content-right">
      <h2>GET IN TOUCH</h2>
      <ul>
      <li>+91-9044727431</li>
      <li>Contect@gmail.com</li></ul>
      </div>
      </div>
      <hr  className='uderline'/>
      <div className="footer-copy-right">
      Copyright 2024 © tomato.com - All Right Reserved.
      </div>
      </div>
      
    </div>
  )
}

export default Footer
