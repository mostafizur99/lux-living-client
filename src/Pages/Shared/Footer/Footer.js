import React from 'react';
import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faMapMarkerAlt, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faDribbble, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'


const Footer = () => {
    return (
        <div>
            <Container fluid >
                <div className="footer-container">
                    <Row className="footer-wrap">
                        <Col md={4}>
                            <div className="footer-logo">
                                <h2><FontAwesomeIcon className="me-2" icon={faIgloo} />LuxLiving</h2>
                                <h5>A World To Locate Your Dream</h5>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="footer-features text-white">
                                <h4 className="mb-2 fs-5" >Features</h4>
                                <Nav defaultActiveKey="/home" className="flex-column align-items-center">
                                    <div className="py-2">
                                        <div className="mb-2">
                                            <NavLink className="text-decoration-none feature-item" to="/explore">Air Conditioning</NavLink>
                                            <NavLink className="text-decoration-none feature-item" to="/explore">Fireplace</NavLink>
                                        </div>
                                        <div className="mb-2">
                                            <NavLink className="text-decoration-none feature-item" to="/explore">Security Camera</NavLink>
                                            <NavLink className="text-decoration-none feature-item" to="/explore">Wifi</NavLink>
                                        </div>
                                        <div>
                                            <NavLink className="text-decoration-none feature-item" to="/explore">Garden</NavLink>
                                            <NavLink className="text-decoration-none feature-item" to="/explore">Playing Ground</NavLink>
                                        </div>
                                    </div>
                                </Nav>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="footer-contact text-white">
                                <h4 className="mb-2 fs-5">Contact Us</h4>
                                <ListGroup className="text-white">
                                    <ListGroup.Item className="footer-item"><FontAwesomeIcon className="secondary-color" icon={faMapMarkerAlt} /> <span>123 Down Street, New York, United State</span></ListGroup.Item>
                                    <ListGroup.Item className="footer-item"><FontAwesomeIcon className="secondary-color" icon={faPhoneVolume} /> <span>+123-456-789</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="footer-item"><FontAwesomeIcon className="secondary-color" icon={faEnvelope} /> <span>admin@luxliving.com</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>

                    {/* Copuright section  */}
                    <Row className=" copy-right-section align-items-center">
                        <Col sm={12} md={6}>
                            <div className="copy-right">
                                <p className="m-0">© All right reserved 2021 <span className="text-white">LuxLiving</span></p>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="footer-social-wrap">
                                <a className="footer-icon-wrap" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faFacebookF} /></a>
                                <a className="footer-icon-wrap" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faTwitter} /></a>
                                {/* <a className="footer-icon-wrap ms-2" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faLinkedinIn} /></a> */}
                                <a className="footer-icon-wrap" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faInstagram} /></a>
                                <a className="footer-icon-wrap" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faDribbble} /></a>
                                <a className="footer-icon-wrap" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faPinterestP} /></a>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container >




            {/* <div className="copy-right-section mt-4">
                <Container>
                    <Row className="align-items-center">
                        <Col sm={12} md={6}>
                            <div className="copy-right">
                                <p className="m-0">© All right reserved 2021 <span className="secondary-color">Infirm Care</span>. Health Care Service</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="footer-social">
                                <a className="footer-icon-wrap ms-2" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faFacebookF} /></a>
                                <a className="footer-icon-wrap ms-2" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faTwitter} /></a>
                                <a className="footer-icon-wrap ms-2" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faLinkedinIn} /></a>
                                <a className="footer-icon-wrap ms-2" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faInstagram} /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> */}


        </div >




    );
};

export default Footer;