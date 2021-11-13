import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';

import './About.css';

const About = () => {
    return (
        <div className="about-section">
            <Container>
                <div className="about-wrap">
                    <Row className="align-items-center">
                        <Col md={6} >
                            <div className="about-image">
                                <img className="" src="https://n.foxdsgn.com/pado/wp-content/uploads/2018/08/1e972263484109.5ab236c2b6d5f.jpg" alt="" />
                            </div>
                        </Col>
                        <Col md={6} >
                            <div className="about-content">
                                <h2 className="custom-title"><span>Apartment</span> for People of Luxury</h2>
                                <p>We are providing luxurious appartment from different corner with modern structure, secured area with full healthy accomodation. Grab your desire space to touch your dream home.</p>
                            </div>
                        </Col>
                    </Row>
                    <div class="aboutbg-text">About</div>
                </div>
            </Container>
        </div>
    );
};

export default About;