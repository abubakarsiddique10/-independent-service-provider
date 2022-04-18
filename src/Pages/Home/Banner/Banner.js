import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Banner.css';
const Banner = () => {
    return (
        <section className="banner">
            <Container>
                <Row xs={1} md={2} className="g-3">
                    <Col className="d-flex align-items-center justify-content-center">
                        <div>
                            <h1>Experience Better underline
                                Learning.</h1>
                            <p>Be a part of my huge community and start your<br /> personalized learning journey!</p>
                            <Button>Enroll Now</Button>
                        </div>
                    </Col>
                    <Col>
                        <img className="img-fluid w-100" src="https://i.ibb.co/VMDyyx5/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-st.jpg" alt="" />
                    </Col>
                </Row>
            </Container >
        </section>
    )
}
export default Banner;