import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faIgloo } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';

const Navigation = () => {
    const { user, logout } = useAuth();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="light" bg="light" sticky="top">
                <Container>
                    <Navbar.Brand href="/"><h2 className="logo-nav"><FontAwesomeIcon className="main-logo me-2" icon={faIgloo} />LuxLiving</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                            {
                                !user?.email ?
                                    <>
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                        <span>
                                            <div className="mt-2"><FontAwesomeIcon className="me-1" icon={faUserCircle} /> <span className="nav-user">{user.displayName}</span></div>
                                            <button onClick={logout} className="nav-sign-out mt-1 ms-1">Sign out</button>
                                        </span>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;