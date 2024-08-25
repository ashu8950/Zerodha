import React from 'react';
import '../CSS/Market.css'; // Ensure this CSS file is created or modified
import secondImg from '../assets/second.svg';

const Market = () => {
  return (
    <div className="market-container">
      <div className="left-img">
        <img src={secondImg} alt="Investment Platform" className="market-image" />
      </div>
      <div className="right-content">
        <h1>Free and Open Market Education</h1>
        <p>
          Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
        </p>
        <h2>Varsity</h2>
        <p>
          TradingQ&A, the most active trading and investment community in India for all your market related queries.
        </p>
        <h2>TradingQ&A</h2>
      </div>
    </div>
  );
};

export default Market;
