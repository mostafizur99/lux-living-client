import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import './MyOrder.css';


const MyOrder = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    const [isLoading, setIsLoading] = useState(true);



    // My orders data 
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://warm-thicket-54425.herokuapp.com/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);

            })
            .finally(() => setIsLoading(false));
    }, [user.email, isDeleted]);


    // DELETE  orders
    const handlecancel = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://warm-thicket-54425.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setIsDeleted(true);
                        alert('deleted successfully');
                        const remainingUsers = orders.filter(order => order._id !== id);
                        setOrders(remainingUsers);
                    } else {
                        setIsDeleted(false);
                    }
                });
        }
    }

    if (isLoading) {
        return <Spinner
            animation="border" variant="dark"
        />
    }

    return (
        <div >
            <div className="product-header my-3">
                <h2 className="custom-title">Total <span>Orders: {orders.length}</span></h2>
            </div>

            <div className="my-order-section">
                <Row xs={2} md={3}>
                    {
                        orders.map(order =>
                            <Col key={order._id}>
                                <Card className="mb-4">
                                    <Card.Img className="order-image" variant="top" src={order.imgThumb} />
                                    <Card.Body className="text-start">
                                        <Card.Title >
                                            <span className="title">{order.title}</span>
                                        </Card.Title>
                                        <Card.Title>
                                            <span className="custom-status" style={{ backgroundColor: order?.color }}>{order.status}</span>
                                        </Card.Title>
                                        <Card.Title className="order-price my-2">Price: ${order.price}</Card.Title>
                                        <Card.Text>
                                            <button className="order-btn" onClick={() => handlecancel(order._id)}>Cancel</button>
                                        </Card.Text>


                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default MyOrder;