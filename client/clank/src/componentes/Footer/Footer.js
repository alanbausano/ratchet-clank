import React from "react";
import logo from "../../imagenes/ratchet.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div>
        <img src={logo} alt="logo" className="logo" />
        <p>
          <i className="fa fa-copyright" aria-hidden="true"></i> 2021 All Rights
          Reserved Insomniac Inc.
        </p>
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
      <div>
        <h3>Terms and conditions</h3>
        <h3>Privacy policy</h3>
      </div>
      <div className="custom-shape-divider-top-1619389430">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
