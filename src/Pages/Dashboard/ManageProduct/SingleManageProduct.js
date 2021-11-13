import React from 'react';
import { Link } from 'react-router-dom';

const SingleManageProduct = ({ service }) => {
    const {_id,name,price,description,img} = service;
    return (
        <div className="col-lg-4">
        <div className="card mb-3 single-service p-3">
            <img src={img} alt="" />
            <div className="d-flex justify-content-between my-3">
                 <h4 className="my-3">{name}</h4>
            </div>
            <h3>Price: $ {price}</h3>
            <p className="text-justify">{description.slice(0,105)}</p>
            <div className="text-center">
                <Link to={`/placeorder/${_id}`}>
                    <button className="btn btn-primary text-center text-white">Order Now</button>
                </Link> 
            </div>
        </div>
    </div>
    );
};

export default SingleManageProduct;