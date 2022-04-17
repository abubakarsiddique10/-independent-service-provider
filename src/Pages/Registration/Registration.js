import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
const Registration = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    console.log(googleUser, googleError);
    console.log(githubUser, githubError)
    // Registration email and password
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    console.log(user)
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <section className="login-form">
            <Container>
                <h1 className="text-center mb-4">Registration</h1>
                <div className="container-form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>
                        <p className="text-danger">{googleError?.message || githubError?.message}</p>
                        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
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
                        <p className="text-center">Already have an account? <Link to="/login" style={{ cursor: 'pointer', textDecoration: 'none' }} className="text-primary">Sign in here</Link></p>
                    </Form>
                </div>
            </Container >
        </section >
    )
}
export default Registration;