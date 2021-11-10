import logo from "../../images/logo.png";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="text-white pt-5 footer-area">
        <img className="mb-3" width="250" src={logo} alt="" />
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <h6>+88 01629 78 63 99</h6>
              <h6>Dhaka, Bangladesh</h6>
              <div className="fs-1">
                <FaFacebookSquare />
                <span className="mx-4">
                  <FaInstagramSquare />
                </span>
                <FaWhatsappSquare />
              </div>
            </div>
          </div>
          <div className="py-3">
            <p className="text-muted text-center">
              © COPYRIGHT 2021 CALEADER privacy policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
