import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import './CheckOut.css';
const CheckOut = () => {
    return (
        <section className="checkout-page">
            <Container>
                <h1 className="text-center mb-4">CheckOut</h1>
                <div className="checkout-form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Phone</Form.Label>
                            <Form.Control type="text" placeholder="Your phone" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className="w-100 py-2" variant="primary" type="submit">
                            Proceed to Checkout
                        </Button>
                    </Form>
                </div>
            </Container>
        </section>
    )
}
export default CheckOut;