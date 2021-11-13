import React from 'react';
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import './UserReview.css';


const UserReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // submit user review data
    const onSubmit = event => {
        console.log(event)
        fetch('https://warm-thicket-54425.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully placed posted a review.')
                    reset();
                }
            })
    };

    return (
        <div className="review-form-section">
            <div className="product-header my-3">
                <h2 className="custom-title">Please <span>Review</span> Our Service</h2>
            </div>

            <Row>
                <Col md={12}>
                    <div className="review-form">
                        {/* review form  */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <label>Full Name</label> */}
                            <input type="hidden" label="Name"  {...register("name", { required: true })} placeholder="name" defaultValue={user?.displayName} />
                            {errors.name && <span>This field is required</span>}

                            {/* <label>Your Email</label> */}
                            <input type="hidden"  {...register("email", { required: true })} placeholder="email" defaultValue={user?.email} />
                            {errors.email && <span>This field is required</span>}

                            <label>Give Us Rating</label>
                            <select {...register("rating")}>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value='1'>1</option>
                                <option value='0'>0</option>
                            </select>
                            {errors.rating && <span>This field is required</span>}

                            {/* <input type="number" {...register("ratingNum", { min: 0, max: 5 })} />
                            {errors.ratingNum && <span>This field is required</span>} */}

                            <label>Drop some words for us</label>
                            <textarea {...register("desc", { required: true })} placeholder="Please input your address" />
                            {errors.desc && <span>This field is required</span>}

                            <br />
                            <input className="review-btn mt-3" type="submit" />
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default UserReview;