import React from 'react'
import logo from "../../imagenes/ratchet.png";

export default function FooterMobile() {
  return (
    <div className="footer-container-m">
      <div>
        <img src={logo} alt="logo" className="logo" />
        <p>
          <i className="fa fa-copyright" aria-hidden="true"></i> 2021 All Rights
          Reserved Insomniac Inc.
        </p>
      </div>
      <div>
        <h3>View terms and conditions</h3>
        <h3>Privacy policy</h3>
      </div>
      <div>
        <h3>Contact us</h3>
        <p>Address</p>
        <p>Email</p>
        <p>Phone</p>
      </div>
      <div>
        <h3>Social Media</h3>
        <p>
          <i className="fa fa-copyright" aria-hidden="true"></i>
        </p>
        <p>
          <i className="fa fa-copyright" aria-hidden="true"></i>
        </p>
        <p>
          <i className="fa fa-copyright" aria-hidden="true"></i>
        </p>
      </div>
      <div>
        <h3>FAQS</h3>
        <p>Shipment</p>
        <p>Payment</p>
        <p>Digital editions</p>
        <p>More content</p>
        <p>All discounts</p>
      </div>
      
    </div>
  )
}
