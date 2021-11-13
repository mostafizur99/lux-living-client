import React from 'react';
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = event => {
        console.log(event)
        fetch('https://warm-thicket-54425.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    reset();
                }
            })
    };

    return (
        <div className="add-product-section">
            <div className="add-product-wrap shadow">
                <Row className="g-4">
                    <Col md={12}>
                        <div className="purchase-header mb-3">
                            <h2 className="custom-title"> <span>Add Product</span> to sell.</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="g-4">
                    <Col md={12}>
                        <div className="add-product-form">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className="d-full" {...register("title", { required: true })} placeholder="Product title" />
                                {errors.title && <span>This field is required</span>}

                                <textarea className="d-full" {...register("subTitle", { required: true })} placeholder="Product Sub Title" />
                                {errors.subTitle && <span>This field is required</span>}

                                <input className="d-half" type="number" {...register("price", { min: 10, max: 20000000 }, { required: true })} placeholder="Price" />
                                {errors.price && <span>This field is required</span>}

                                <input className="d-half" type="number" {...register("unitPrice", { min: 10, max: 20000000 }, { required: true })} placeholder="Unit Price" />
                                {errors.unitPrice && <span>This field is required</span>}

                                <input className="d-half" type="number" {...register("area", { min: 1, max: 100000 }, { required: true })} placeholder="Area" />
                                {errors.area && <span>This field is required</span>}
                                <input className="d-half" type="number" {...register("bed", { min: 0, max: 100 }, { required: true })} placeholder="Bed" />
                                {errors.bed && <span>This field is required</span>}

                                <input className="d-half" type="number" {...register("baths", { min: 1, max: 100 }, { required: true })} placeholder="Bath" />
                                {errors.baths && <span>This field is required</span>}

                                <input className="d-half" type="number" {...register("garages", { min: 1, max: 10 }, { required: true })} placeholder="Garages" />
                                {errors.garages && <span>This field is required</span>}

                                <textarea className="d-full" {...register("address", { required: true })} placeholder="Address" />
                                {errors.address && <span>This field is required</span>}

                                <input className="d-half" {...register("imgThumb", { required: true })} placeholder="Image Link" />
                                {errors.imgThumb && <span>This field is required</span>}

                                <input className="d-half"  {...register("agent", { required: true })} placeholder="Agent" />
                                {errors.agent && <span>This field is required</span>}

                                <input className="add-product-btn" type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AddProducts;