import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import './Dashboard.css';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Pay from '../UserDashboard/Pay/Pay';
import MyOrder from '../UserDashboard/MyOrder/MyOrder';
import UserReview from '../UserDashboard/UserReview/UserReview';
import useAuth from '../../../hooks/useAuth';
import ManageOrders from '../AdminDashboard/ManageOrders/ManageOrders';
import AddProducts from '../AdminDashboard/AddProducts/AddProducts';
import MakeAdmin from '../AdminDashboard/MakeAdmin/MakeAdmin';
import ManageProducts from '../AdminDashboard/ManageProducts/ManageProducts';


const Dashboard = () => {
    const { user, admin, logout } = useAuth();

    let { path, url } = useRouteMatch();
    return (
        <>
            <Navigation></Navigation>
            <div className="dashboard-section">
                <Container fluid>
                    <Row>
                        <Col md={3} lg={3} >
                            <div className="dashboard-nav bg-dark h-100">
                                <Nav defaultActiveKey="/home" className="flex-column">

                                    {!admin &&
                                        <>
                                            <Nav.Link as={Link} to={url}>Pay</Nav.Link>
                                            <Nav.Link as={Link} to={`${url}/myOrder`}>My Order</Nav.Link>
                                            <Nav.Link as={Link} to={`${url}/review`}>Give Review</Nav.Link>
                                        </>
                                    }

                                    {admin &&
                                        <>
                                            <Nav.Link as={Link} to={url}>Manage All Orders</Nav.Link>
                                            <Nav.Link as={Link} to={`${url}/addProduct`}>Add Product</Nav.Link>
                                            <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                                            <Nav.Link as={Link} to={`${url}/manageProducts`}>Manage Products</Nav.Link>
                                        </>
                                    }
                                    <button onClick={logout} className="dashboard-logout">Sign out</button>

                                </Nav>
                            </div>
                        </Col>
                        <Col md={9} lg={9} >
                            <div className="dashboard-container">
                                <Switch>

                                    {!admin &&
                                        <>
                                            <Route exact path={path}>
                                                <  Pay></Pay>
                                            </Route>
                                            <Route path={`${path}/myOrder`}>
                                                <MyOrder></MyOrder>
                                            </Route>
                                            <Route path={`${path}/review`}>
                                                <UserReview></UserReview>
                                            </Route>
                                        </>
                                    }

                                    <Route exact path={path}>
                                        <ManageOrders></ManageOrders>
                                    </Route>
                                    <Route path={`${path}/addProduct`}>
                                        <AddProducts></AddProducts>
                                    </Route>
                                    <Route path={`${path}/makeAdmin`}>
                                        <MakeAdmin></MakeAdmin>
                                    </Route>
                                    <Route path={`${path}/manageProducts`}>
                                        <ManageProducts></ManageProducts>
                                    </Route>


                                </Switch>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Dashboard;