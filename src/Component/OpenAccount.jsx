import React from 'react';
import '../CSS/OpenAccount.css'; // Ensure this CSS file is created or modified

const OpenAccount = () => {
  return (
    <div className="open-account-container">
      <div className="open-account-content">
        <h1>Open a Zerodha Account</h1>
        <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <a href="https://www.zerodha.com/open-account" className="sign-up-button">Sign Up Now</a>
      </div>
    </div>
  );
};

export default OpenAccount;
