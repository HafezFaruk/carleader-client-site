import React from 'react';
import { Link } from 'react-router-dom';

const SingleExplore = ({ service }) => {
    const {_id,name,price,description,img} = service;
    return (
      <div className="col-lg-4">
        <div className="card mb-3 single-service p-3">
          <img src={img} alt="" />
          <h3>{name}</h3>
          <h5>Price: ${price}</h5>
          <p>{description.slice(0, 80)}...</p>
          <div>
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

export default SingleExplore;