import React from 'react';
import '../CSS/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        {/* <img src='path/to/your/logo.png' alt='Logo' className='logo' /> */}
        <span className='logo'>Zerodha</span>
      </div>
      <div className='right'>
        <ul>
          <li>Signup</li>
          <li>About</li>
          <li>Products</li>
          <li>Pricing</li>
          <li>Support</li>
        </ul>
        <button className='toggle-button'>☰</button>
      </div>
    </div>
  );
}

export default Navbar;
