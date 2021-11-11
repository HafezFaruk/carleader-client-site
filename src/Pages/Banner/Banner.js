import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
const Banner = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="text-danger">BUSINESS RENTALS</h3>
                    <p className="w-75 mx-auto text-danger">You can completely rely on us while having an important business trip. We guarantee a successful and safe driving.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="text-danger">LUXURY RENTALS</h3>
                    <p className="w-75 mx-auto text-danger">Our company provides an impressive selection of luxury cars for first class business and private short distance trips.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="text-danger">TRAVELING RENTALS</h3>
                <p className="w-75 mx-auto text-danger">Traveling with comfort is our company’s goal and top priority. We care about your experience anywhere you go.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Banner;