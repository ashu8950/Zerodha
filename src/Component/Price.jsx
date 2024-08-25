import React from 'react';
import '../CSS/Price.css';
import PriceImage from '../assets/first.svg'; // Corrected image import

const Price = () => {
  return (
    <div className="price-container">
      <div className="price-left">
        <h1>Unbeatable Pricing</h1>
        <h3>
          We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges
        </h3>
        <a href="/pricing" className="price-link">See Pricing</a>
      </div>
      <div className="price-right">
        <img src={PriceImage} alt="Investment Platform" className="price-image" />
      </div>
    </div>
  );
}

export default Price;
