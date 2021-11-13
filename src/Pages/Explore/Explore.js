import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Explore.css';
import Footer from '../Shared/Footer/Footer';


const Explore = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // load all products from database 
    useEffect(() => {
        setIsLoading(true)
        fetch('https://warm-thicket-54425.herokuapp.com/products')
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

    // if (isLoading) {
    //     return <Spinner
    //         animation="border" variant="dark"
    //     />
    // }


    return (
        <>
            <Navigation></Navigation>
            <div className="explore-section">
                <div className="product-header mb-3">
                    <h2 className="custom-title">Explore Our <span>Total Products</span></h2>
                </div>

                <div>
                    {/* Spinner for products section  */}
                    {
                        isLoading && <Spinner
                            animation="border" variant="dark"
                        />
                    }
                    <Container>
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
                    </Container>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Explore;