import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import './Reviews.css';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    // My orders data 
    useEffect(() => {
        // setIsLoading(true)
        fetch('https://warm-thicket-54425.herokuapp.com/reviews')
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);

            })
        // .finally(() => setIsLoading(false));
    }, []);


    return (
        <div className="review-section">
            <Container fluid>
                <div className="client-review">
                    <Row className="align-items-center">
                        <Col xs={12} md={4}>
                            <div className="review-header">
                                <h2 className="custom-title">Happy Clients <span>Reviews</span></h2>
                            </div>
                        </Col>
                        <Col xs={12} md={8}>
                            <Carousel className="review-wrap">
                                {
                                    reviews.map(review =>
                                        <Carousel.Item className="review-item" key={review._id}>
                                            <div className="review-content">
                                                <Rating
                                                    initialRating={review.rating}
                                                    emptySymbol="far fa-star icon-color"
                                                    fullSymbol="fas fa-star icon-color"
                                                    readonly></Rating>
                                                <h4>"{review.desc}"</h4>
                                                <h3>---- {review.name}</h3>
                                            </div>
                                        </Carousel.Item>
                                    )}

                            </Carousel>
                        </Col>
                    </Row>

                    <div className="bg-text">Testimonials</div>
                </div>
            </Container>
        </div>
    );
};

export default Reviews;