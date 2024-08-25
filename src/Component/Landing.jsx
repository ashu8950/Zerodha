import React from 'react'
import landingImage from '../assets/landing.png';
import '../CSS/Landing.css'
const Landing = () => {
  return (
    
      <div className="landing-page">
      <div className="hero-section">
        <img src={landingImage} alt="Investment Platform" className="hero-image" />
        <h1>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
    
  )
}

export default Landing
