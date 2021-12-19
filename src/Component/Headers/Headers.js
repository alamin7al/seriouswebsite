import React from 'react';
import { Carousel } from 'react-bootstrap';
import home from '../../img/home-hero-banner.jpg'
import hero from '../../img/safari-gold-d-banner.jpg'
import banner from '../../img/tata-punch-with-price-d-banner.png'



const Headers = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={home}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={hero}
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner}
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
};

export default Headers;