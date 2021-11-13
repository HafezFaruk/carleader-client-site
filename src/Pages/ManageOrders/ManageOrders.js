import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ManageOrders.css";

const ManageOrders = () => {
  const [carOrders, setCarOrders] = useState([]);
  useEffect(() => {
    fetch("https://desolate-cliffs-90588.herokuapp.com/carOrders")
      .then((res) => res.json())
      .then((data) => setCarOrders(data));
  }, [carOrders]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `https://desolate-cliffs-90588.herokuapp.com/orders/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingProducts = carOrders.filter(
              (order) => order?._id !== id
            );
            setCarOrders(remainingProducts);
          }
        });
    }
  };
  return (
    <div className="py-5">
      <div className="container">
        <div className="py-3">
        <h2 className="text-center">Manage Products</h2>
        </div>

        <div className="mx-auto">
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>Product Id</th>
                <th>User Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {carOrders.map((order) => (
                <tr key={order._id}>
                  <td>{order?._id}</td>
                  <td>{order?.name}</td>
                  <td>{order?.price}</td>
                  <td>{order?.status}</td>
                  <td>
                    <Link to={`/update/${order._id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(order?._id)}
                      className="btn btn-danger ms-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
