import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Registration = () => {
    return (
        <section className="login-form">
            <Container>
                <h1 className="text-center mb-4">Registration</h1>
                <div className="container-form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button className="w-100 mb-3 fs-5" variant="primary" type="submit">
                            Submit
                        </Button>
                        <p className="text-center">Or login with</p>
                        <div className="d-flex justify-content-between mb-3">
                            <Button style={{ background: '#183153' }} className="w-50 me-2">
                                Google
                            </Button>
                            <Button style={{ background: '#183153' }} className="w-50  ms-2">Github</Button>
                        </div>
                        <p className="text-center">Already have an account? <Link to="/login" style={{ cursor: 'pointer', textDecoration: 'none' }} className="text-primary">Sign in here</Link></p>
                    </Form>
                </div>
            </Container >
        </section >
    )
}
export default Registration;