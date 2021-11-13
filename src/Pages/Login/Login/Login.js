import React, { useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    // const handleGoogleSignIn = () => {
    //     signInWithGoogle(location, history)
    // }



    return (
        <>
            <Navigation></Navigation>
            <div className="login-section">
                <Container fluid>
                    <div className="login-wrap">
                        <div className="login-content shadow">
                            <Row className="align-items-center">
                                <Col md={6} >
                                    <div className="login-image">
                                        <img className="" src="https://kastell.qodeinteractive.com/wp-content/uploads/2017/11/h2-property-f-img-1.jpg" alt="" />
                                    </div>
                                </Col>
                                {/* Login form column */}
                                <Col md={6} >
                                    <div className="login-form">
                                        <h3 className="login-header mb-3">Login</h3>
                                        <form onSubmit={handleLoginSubmit}>
                                            <div className="mb-3">
                                                <label for="email">Your Email</label>
                                                <input
                                                    onBlur={handleOnBlur}
                                                    name="email"
                                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                            </div>
                                            <div className="mb-2">
                                                <label for="password">Password</label>
                                                <input
                                                    onBlur={handleOnBlur}
                                                    name="password"
                                                    type="password" className="form-control" id="exampleInputPassword1" required />
                                            </div>

                                            {/* <div className="text-end mb-3">
                                                <button onClick={handleResetPassword} className=" btn-forgot">Forgot password ?</button>
                                                </div> */}

                                            {/* <div className="row mb-3 text-danger">{error}</div> */}

                                            <button type="submit" className="btn btn-login my-2">Log In</button>
                                        </form>

                                        {/* Success Message  */}
                                        {user?.email && <Alert variant='success'>User Logged In Successfully</Alert>}

                                        {/* Error Message  */}
                                        {authError && <Alert variant='danger'>{authError}</Alert>}
                                        {/* <p className="text-white-50 mt-4">Or Login Using</p> */}


                                        <div className=" mt-3"><span className=" me-2">Don't have an account?</span><Link to="/register" className='login-link'>Register</Link></div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="box-blue"></div>
                        <div className="box-dark"></div>
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;