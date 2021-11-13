import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <Carousel fade>
                {/* 1st slider  */}
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Jrkb3VF/slider1.jpg"
                        alt="First slide"
                    />
                    <div className="carousel-text">
                        <h3><span>Luxarious</span> Living in Nature</h3>
                        <p>2005 Stokes Isle Apt. 896, Venaville, New York </p>
                        <Link to="/explore" className='banner-btn'>Find Now</Link>
                    </div>
                </Carousel.Item>

                {/* 2nd slider  */}
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/JRZncpD/slider2.jpg"
                        alt="First slide"
                    />
                    <div className="carousel-text">
                        <h3><span>Plunned</span> Envo to Grow</h3>
                        <p>56 appartment B, Blue Park, CA</p>
                        <Link to="/explore" className='banner-btn'>Find Now</Link>
                    </div>
                </Carousel.Item>

                {/* 3rd slider  */}
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ZV8Q39R/slider3.jpg"
                        alt="First slide"
                    />
                    <div className="carousel-text">
                        <h3><span>Master</span> Layout in Design</h3>
                        <p>Officer Lane, Up-Town, New York </p>
                        <Link to="/explore" className='banner-btn'>Find Now</Link>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;