import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SingleCar from "../SingleCar/SingleCar";

const CarItems = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://desolate-cliffs-90588.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="pb-1 mt-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-4">
              <h1 className="text-danger">Our Car Leader Services</h1>
            </div>
          </div>
        </div>
        {services.length === 0 ? (
          <Spinner animation="border" />
        ) : (
          <div className="row">
            {services.map((service) => (
              <SingleCar key={service._id} service={service}></SingleCar>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarItems;
