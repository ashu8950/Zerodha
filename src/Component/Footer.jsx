import React from 'react';
import '../CSS/Footer.css'; // Ensure this CSS file is created or modified

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
        <span className='logo'>Zerodha</span>
          <p>© 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Referral Programme</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Zerodha.tech</a></li>
              <li><a href="#">Press & Media</a></li>
              <li><a href="#">Zerodha Cares (CSR)</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Support Portal</a></li>
              <li><a href="#">Z-Connect Blog</a></li>
              <li><a href="#">List of Charges</a></li>
              <li><a href="#">Downloads & Resources</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Market Overview</a></li>
              <li><a href="#">How to File a Complaint?</a></li>
              <li><a href="#">Status of Your Complaints</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Account</h3>
            <ul>
              <li><a href="#">Open an Account</a></li>
              <li><a href="#">Fund Transfer</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-disclaimer">
          <p>Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633</p>
          <p>CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019</p>
          <p>Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238</p>
          <p>Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.</p>
          <p>For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
          <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
          <p><a href="#">NSE</a> | <a href="#">BSE</a> | <a href="#">MCX</a></p>
          <p><a href="#">Terms & Conditions</a> | <a href="#">Policies & Procedures</a> | <a href="#">Privacy Policy</a> | <a href="#">Disclosure</a> | <a href="#">For Investor's Attention</a> | <a href="#">Investor Charter</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
