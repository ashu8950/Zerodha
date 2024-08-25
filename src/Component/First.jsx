import React from 'react';
import '../CSS/First.css';
import FirstImage from '../assets/first.svg'; 

const First = () => {
  return (
    <div className="first-container">
      <div className="first-left">
        <img src={FirstImage} alt="Investment Platform" className="first-hero-image" />
      </div>
      <div className="first-right">
        <h1 className="first-heading">Largest Stock Broker in India</h1>
        <h3 className="first-subheading">
          1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
        </h3>
        <ul className="first-list">
          <div className='left_div'>
          <li>Futures and Options</li>
          <li>Commodity Derivatives</li>
          <li>Currency Derivatives</li>
          </div>
          <div className='right_div'>
          <li>Stocks & IPOs</li>
          <li>Direct Mutual Funds</li>
          <li>Bonds and Govt. Securities</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default First;
