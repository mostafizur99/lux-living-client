import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    // load top 6 products from database 
    useEffect(() => {
        setIsLoading(true)
        fetch('https://warm-thicket-54425.herokuapp.com/homeProducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                // setIsLoading(false)
            })
            .finally(() => setIsLoading(false));
    }, []);

    const history = useHistory()
    const handlePurchage = (productId) => {
        history.push(`/purchageProduct/${productId}`);
    }

    return (
        <div className="product-section">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="product-header mb-3">
                            <h2 className="custom-title">Some of Our <span>Products</span></h2>
                        </div>
                    </Col>
                </Row>

                <div>
                    {/* Spinner for products section  */}
                    {
                        isLoading && <Spinner
                            animation="border" variant="dark"
                        />
                    }
                    <Row xs={2} md={3} className="g-4">
                        {
                            products.map(product =>
                                <Col key={product._id}>
                                    <Card className="card-container border-0 ">
                                        <Card.Img className="product-image" src={product.imgThumb} alt="Card image" />
                                        <div className="product-price-wrap">
                                            <h4>${product.price}</h4>
                                            <h5>${product.unitPrice}/m<sup>2</sup></h5>
                                        </div>
                                        <div className="product-content">
                                            <h3>{product.title}</h3>
                                            <h6 className="product-subtitle">{product.subTitle}</h6>

                                            <p>Area: {product.area}</p>
                                            <p>Bed: {product.bed}, Baths: {product.baths}, Garages: {product.garages}</p>
                                            <p>{product.address}</p>
                                            <p>Agent: {product.agent}</p>
                                            <button className="product-btn" onClick={() => handlePurchage(product._id)}>Buy now</button>

                                        </div>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Products;