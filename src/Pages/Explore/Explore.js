import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleExplore from '../SingleExplore/SingleExplore';

const Explore = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://desolate-cliffs-90588.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="add-food py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h2>Our Car Leader Services</h2>
                        </div>
                    </div>
                </div>
                {
                    services.length === 0 ?
                    <Spinner animation="border" />
                    :
                    <div className="row">
                    {
                        services.map(service => <SingleExplore
                        key={service._id}
                        service={service}
                        ></SingleExplore>)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default Explore;