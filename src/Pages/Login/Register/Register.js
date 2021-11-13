import React, { useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Register.css'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }


    return (
        <>
            <Navigation></Navigation>
            <div className="register-section">
                <Container fluid>
                    <div className="register-wrap">
                        <div className="register-content shadow">
                            <Row className="align-items-center">
                                <Col md={6} >
                                    <div className="register-image">
                                        <img className="" src="https://kastell.qodeinteractive.com/wp-content/uploads/2017/11/h2-property-f-img-1.jpg" alt="" />
                                    </div>
                                </Col>
                                {/* Register form column */}
                                <Col md={6} >
                                    <div className="register-form">
                                        <h3 className="register mb-3">Register</h3>
                                        <form onSubmit={handleRegisterSubmit}>
                                            <div className="mb-3">
                                                <input
                                                    onBlur={handleOnBlur}
                                                    name="name"
                                                    type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Your Name" required />
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    onBlur={handleOnBlur}
                                                    name="email"
                                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
                                            </div>
                                            <div className="mb-2">
                                                <input
                                                    onBlur={handleOnBlur}
                                                    name="password"
                                                    type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                                            </div>
                                            <div className="mb-2">
                                                <input
                                                    onBlur={handleOnBlur}
                                                    name="password2"
                                                    type="password" className="form-control" id="exampleInputPassword2" placeholder="Pepeat Password" required />
                                            </div>

                                            <button type="submit" className="btn register">Register</button>

                                        </form>

                                        {/* Success Message  */}
                                        {user?.email && <Alert variant='success'>User Created Successfully</Alert>}

                                        {/* Error Message  */}
                                        {authError && <Alert variant='danger'>{authError}</Alert>}

                                        <div className=" mt-3"><span className=" me-2">Already have an account?</span><Link to="/login" className='login-link'>Login</Link></div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="register-box-blue"></div>
                        <div className="register-box-dark"></div>
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;