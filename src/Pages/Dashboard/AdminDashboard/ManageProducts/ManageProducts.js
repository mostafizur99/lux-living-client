import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import './ManageProducts.css';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleted, setIsDeleted] = useState(null);


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
    }, [isDeleted]);

    // DELETE  products
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://warm-thicket-54425.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setIsDeleted(true);
                        alert('deleted successfully');
                        const remainingUsers = products.filter(order => order._id !== id);
                        setProducts(remainingUsers);
                    } else {
                        setIsDeleted(false);
                    }
                });
        }
    }


    return (
        <div className="manage-product-section">
            <div className="manage-header mb-3">
                <h2 className="custom-title"><span> Manage Products</span> from All {products.length} Products</h2>
            </div>

            {/* Spinner for products section  */}
            {
                isLoading && <Spinner
                    animation="border" variant="dark"
                />
            }
            <Container>
                <Row xs={2} md={3} lg={4} className="g-4">
                    {
                        products.map(product =>

                            <Col key={product._id}>
                                <Card className="card-container border-0 ">
                                    <Card.Img className="product-image" src={product.imgThumb} alt="Card image" />
                                    <div className="product-content">
                                        <h3>{product.title}</h3>
                                        <h6 className="product-subtitle">{product.subTitle}</h6>

                                        <p>Price: ${product.price}</p>
                                        <p>Unit Price: ${product.unitPrice}/m<sup>2</sup></p>

                                        <p>Area: {product.area}</p>
                                        <p>Bed: {product.bed}, Baths: {product.baths}, Garages: {product.garages}</p>
                                        <p>{product.address}</p>
                                        <p>Agent: {product.agent}</p>
                                        <button className="product-btn" onClick={() => handleDelete(product._id)}>Delete</button>

                                    </div>
                                </Card>
                            </Col>



                            //  <Col key={product._id}>
                            //                                 <Card className="card-container border ">
                            //                                     <Card.Img src={product.imgThumb} alt="Card image" />
                            //                                     <div>
                            //                                         <h5>{product.title}</h5>
                            //                                         <h6>{product.subTitle}</h6>
                            //                                         <h6>${product.price}</h6>
                            //                                         <h6>${product.unitPrice}/sq m</h6>
                            //                                         <h6>Area: {product.area}</h6>
                            //                                         <h6>{product.subTitle}</h6>
                            //                                         <h6>Bed: {product.bed}, Baths: {product.baths}, Garages: {product.garages}</h6>
                            //                                         <h6>{product.address}</h6>
                            //                                         <h6>Agent: {product.agent}</h6>
                            //                                         <button className="package-btn" onClick={() => handleDelete(product._id)}>Delete</button>

                            //                                     </div>
                            //                                 </Card>
                            //                             </Col>


                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageProducts;

