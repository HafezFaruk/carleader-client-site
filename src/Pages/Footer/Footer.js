import logo from "../../images/logo.png";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="text-white pt-5 footer-area">
        <div className="text-center">
          <img className="mb-3" width="250" src={logo} alt="img-logo" />
        </div>
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <div>
                <Link className="text-white text-decoration-none" to="/home">
                  Home
                </Link>
              </div>
              <div>
                <Link className="text-white text-decoration-none" to="/explore">
                  Explore
                </Link>
              </div>
              <div>
                <Link
                  className="text-white text-decoration-none"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </div>
            </div>
            <div className="col">
              <h6>Dhaka, Bangladesh</h6>
              <h6>+88 01629 78 63 99</h6>
              <h6>information@youremal.com</h6>
            </div>

            <div className="col">
              <h6>SALES DEPARTMENT</h6>
              <h6>MON-SAT : 8:00AM - 5:00PM</h6>
              <h6>SUNDAY IS CLOSED</h6>
            </div>
            <div className="col">
              <div className="fs-1">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare />
                </a>

                <span className="mx-4">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare />
                  </a>
                </span>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 bg-dark">
        <p className="text-muted text-center">
          © Copyright 2021 CarLeader privacy policy
        </p>
      </div>
    </>
  );
};

export default Footer;
