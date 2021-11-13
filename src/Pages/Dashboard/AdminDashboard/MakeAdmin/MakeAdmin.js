import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Alert, Col, Row } from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [success, setSuccess] = useState(false);

    // submit admin form 
    const onSubmit = event => {
        console.log(event)
        fetch('https://warm-thicket-54425.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
    };


    return (

        <div className="make-admin-section">
            <Row>
                <Col md={12}>
                    <div className="admin-header mb-3">
                        <h2 className="custom-title">Access User as an <span>Admin Role</span></h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="makeAdmin-form">
                        {/* make admin form  */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label>Enter User Email To Make Admin</label>
                            <input className="admin-email" {...register("email", { required: true })} placeholder="User email" />
                            {errors.email && <span>This field is required</span>}

                            <input className="makeAdmin-btn" type="submit" />
                        </form>
                        {success && <Alert variant="success">Made Admin successfully!!</Alert>}
                    </div>
                </Col>

            </Row>
        </div >
    );
};

export default MakeAdmin;