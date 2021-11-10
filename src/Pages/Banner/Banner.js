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
                    <h3>Medicinal National Food Delivery</h3>
                    <p className="w-50 mx-auto" >Natural medicines are delivered such as tree neem trees have ingredients national medicines from Nassar</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Family fast food delivery service</h3>
                    <p>Our fast food national food reaches the family very fast</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Natural food delivery activities</h3>
                <p className="w-50 mx-auto" >Daily natural food is delivered from the village farmers with water in a preserved way</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Banner;