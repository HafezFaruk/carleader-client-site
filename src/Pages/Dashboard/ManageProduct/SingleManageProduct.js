import React, { useState } from "react";

const SingleManageProduct = ({ service }) => {
    const [manageProduct,satManageProduct] = useState([])
  const { _id, name, price, description, img } = service;

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `https://desolate-cliffs-90588.herokuapp.com/product/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingProducts = manageProduct.filter(
              (order) => order?._id !== id
              
            );
            satManageProduct(remainingProducts);
          }
        });
    }
  };
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="col-lg-6"
    >
      <div className="card mb-3 p-3">
        <img src={img} alt="" />
        <h4>{name}</h4>
        <h5>Price: $ {price}</h5>
        <p>{description.slice(0, 80)}...</p>
        <div>
          <button onClick={() => handleDelete(_id)} className="btn btn-danger">
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleManageProduct;
