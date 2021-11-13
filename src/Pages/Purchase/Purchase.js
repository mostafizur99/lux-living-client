import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Purchase.css';
import Footer from '../Shared/Footer/Footer';



const Purchase = () => {
    const { user } = useAuth();

    const [singleProduct, setSingleProduct] = useState({});
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const { productId } = useParams();


    //GET A Single Product by id
    useEffect(() => {
        const url = `https://warm-thicket-54425.herokuapp.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSingleProduct(data)
                reset();
            });
    }, []);

    // submit purchage form 
    const onSubmit = event => {
        console.log(event)
        fetch('https://warm-thicket-54425.herokuapp.com/purchases', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully placed a purchase request.')
                    reset();
                }
            })
    };

    return (
        <>
            <Navigation></Navigation>
            <div className="purchase-section">
                <Container>
                    <div className="purchase-header mb-3">
                        <h2 className="custom-title">Please fill the <span>Purchase Information</span></h2>
                    </div>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <div className="purchase-form shadow">
                                {/* purchase form  */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label>Full Name</label>
                                    <input label="Name" className="mb-2" {...register("name", { required: true })} placeholder="name" defaultValue={user?.displayName} />
                                    {errors.name && <span>This field is required</span>}

                                    <label>Your Email</label>
                                    <input readOnly className="mb-2"  {...register("email", { required: true })} placeholder="email" defaultValue={user?.email} />
                                    {errors.email && <span>This field is required</span>}

                                    <label>Phone Number</label>
                                    <input className="mb-2"  {...register("phone", { required: true })} placeholder="Phone" />
                                    {errors.phone && <span>This field is required</span>}

                                    <label>Package</label>
                                    <input readOnly className="mb-2"  {...register("title")} placeholder="Package title" defaultValue={singleProduct.title} />
                                    {errors.title && <span>This field is required</span>}

                                    <label>Price($)</label>
                                    <input readOnly className="mb-2"  {...register("price")} placeholder="Price" defaultValue={singleProduct.price} />
                                    {errors.price && <span>This field is required</span>}

                                    <input type="hidden"  {...register("imgThumb")} defaultValue={singleProduct.imgThumb} />

                                    <label>Your Address to Contact</label>
                                    <textarea className="mb-2"  {...register("address", { required: true })} placeholder="Please input your address" />
                                    {errors.address && <span>This field is required</span>}

                                    <input type="hidden"  {...register("status", { required: true })} defaultValue="Pending" />

                                    <input type="hidden"  {...register("color", { required: true })} defaultValue="tomato" />

                                    <input className="purchase-btn" type="submit" />
                                </form>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="purchase-help">
                                <h4>Need Help?</h4>
                                <p>Email: admin1@luxliving.com</p>
                                <p>Email: admin2@luxliving.com</p>
                                <p>Email: admin3@luxliving.com</p>
                                <br />
                                <p>Hotline1: +123 456 789</p>
                                <p>Hotline2: +123 456 910</p>
                                <p>Hotline3: +123 456 911</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

            <Footer></Footer>
        </>
    );
};

export default Purchase;