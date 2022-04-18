import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import './Login.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // login with google and github
    const [signInWithGoogle, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubError] = useSignInWithGithub(auth);

    // login with email and password
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    // send reset password
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
        toast('sent reset password');
    }
    // The page that users are trying to visit has been redirected
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <section className="login-form">
            <Container>
                <h1 className="text-center mb-4">Login</h1>
                <div className="container-form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <p className="text-danger">{error?.message}</p>
                        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                            <span onClick={handleResetPassword} style={{ cursor: 'pointer' }} className="text-end text-primary mb-2">Forget Password</span>
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
                    <ToastContainer />
                </div>
            </Container >
        </section >
    )
}
export default Login;