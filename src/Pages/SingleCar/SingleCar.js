import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCar.css';

const SingleCar = ({ service }) => {
    const {_id,name,price,description,img} = service;
    return (
      <div className="col-lg-4">
        <div className="card mb-3 single-service p-3">
          <img src={img} alt="" />
          <h4>{name}</h4>
          <h5>Price: ${price}</h5>
          <p className="text-justify">{description.slice(0, 80)}...</p>
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