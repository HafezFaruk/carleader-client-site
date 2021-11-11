import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageOrders.css';

const ManageOrders = () => {
    
    const [carOrders, setCarOrders] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/carOrders')
        .then(res => res.json())
        .then(data => setCarOrders(data))
    }, [carOrders])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete');
        if(proceed){
            const url = `http://localhost:5000/orders/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remainingProducts = carOrders.filter(order => order?._id !== id);
                    setCarOrders(remainingProducts);
                }
            })
        }
    }
    return (
        <div className="manage-order-area py-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>Manage Orders</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="order-single">
                        <Table striped bordered>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>User Name</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    carOrders.map(order => <tr key={order._id}>
                                            <td>{order?._id}</td>
                                            <td>{order?.name}</td>
                                            <td>{order?.price}</td>
                                            <td>{order?.status}</td>
                                            <td>
                                                <Link to={`/update/${order._id}`}><button className="btn btn-primary">Update</button></Link>
                                                <button onClick={() => handleDelete(order?._id)} className="btn btn-danger ms-2">Delete</button>
                                            </td>
                                        </tr>
                                    )} 
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;