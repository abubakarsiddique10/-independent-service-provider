import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import './Login.css';
import { Link } from "react-router-dom";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
const Login = () => {
    // login with google and github
    const [signInWithGoogle, googleUser, googlLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    // login with email and password

    return (
        <section className="login-form">
            <Container>
                <h1 className="text-center mb-4">Login</h1>
                <div className="container-form">
                    <Form>
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
                            <span style={{ cursor: 'pointer' }} className="text-end text-primary mb-2">Forget Password</span>
                        </Form.Group>
                        <p className="text-danger">{googleError?.message || githubError?.message}</p>
                        <Button className="w-100 mb-3 fs-5" variant="primary" type="submit">
                            Submit
                        </Button>
                        <p className="text-center">Or login with</p>
                        <div className="d-flex justify-content-between mb-3">
                            <Button onClick={() => signInWithGoogle()} style={{ background: '#183153' }} className="w-50 me-2">
                                Google
                            </Button>
                            <Button onClick={() => signInWithGithub()} style={{ background: '#183153' }} className="w-50  ms-2">Github</Button>
                        </div>
                        <p className="text-center">Don't have an account? <Link to="/registration" style={{ cursor: 'pointer', textDecoration: 'none' }} className="text-primary">Register here</Link></p>
                    </Form>
                </div>
            </Container >
        </section >
    )
}
export default Login;