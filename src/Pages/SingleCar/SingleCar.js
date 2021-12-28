import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SingleCar.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
const SingleCar = ({ service }) => {
  useEffect(() => {
    AOS.init();
  })
    const {_id,name,price,description,img} = service;
    return (
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="col-6"
      >
        <div className="card mb-3 p-2">
          <img style={{ objectFit: "cover" }} src={img} alt="" />
          <h4>{name}</h4>
          <h5>Price: ${price}</h5>
          <p className="text-justify">{description.slice(0, 200)}</p>
          <div className="text-center">
            <Link to={`/placeorder/${_id}`}>
              <button className="btn btn-primary text-center text-white">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SingleCar;