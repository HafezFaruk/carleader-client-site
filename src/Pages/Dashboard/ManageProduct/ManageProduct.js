import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleManageProduct from './SingleManageProduct';
import AOS from "aos";
import "aos/dist/aos.css";
const ManageProduct = () => {
    const [services, setServices] = useState([]);
     useEffect(() => {
       AOS.init();
     });
    useEffect(() => {
        fetch('https://desolate-cliffs-90588.herokuapp.com/manageProduct')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [services])

  
    return (
        <div className="add-food py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h2>Manage Products Car Leader Services</h2>
                        </div>
                    </div>
                </div>
                {
                    services.length === 0 ?
                    <Spinner animation="border" />
                    :
                    <div className="row">
                    {
                        services.map(service => <SingleManageProduct
                        key={service._id}
                        service={service}
                        ></SingleManageProduct>)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default ManageProduct;