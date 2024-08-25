import React from 'react'
import SignUpPage from '../assets/landing.png'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='SignUp'>
      <div className='left'>
        <img src={SignUpPage} alt="Investment Platform" className="hero-image" />
      </div>
      <div className='right'>
        <h1>Open a trading and demat account</h1>
        <h3>Start investing brokerage free and join a community of 1+ crore investors and traders</h3>
        <h1>Signup now</h1>
        <h3>Or track your existing application</h3>
        <div className="input-container">
          <label htmlFor="phone">Enter your number:</label>
          <div className="input-wrapper">
            <span className="country-code">+91</span>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="1234567890" required />
          </div>
        </div>
        <h5>You will receive an OTP on your number</h5>
        <button>Continue</button>
        <h5>Want to open an NRI account?</h5>
        <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.</p>
        <p>Please visit this article to know more.</p>
        <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
      </div>
    </div>
  )
}

export default SignUp
