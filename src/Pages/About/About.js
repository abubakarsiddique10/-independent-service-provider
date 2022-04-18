import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import './About.css';
const About = () => {
    return (
        <section className="about-me">
            <Container>
                <h1>About Me</h1>
                <Row xs={1} md={2} className="g-5">
                    <Col lg={4}>
                        <Card className="p-3">
                            <Card.Img className="my-img" variant="top" src="https://i.ibb.co/FJs6RYP/abu-bakar.png" />
                            <Card.Body>
                                <Card.Title>Muhammad Abu Bakar</Card.Title>
                                <Card.Text>
                                    Frontend Developer
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex align-items-center" md={12} lg={6}>
                        <p className="fs-5">Hi! My name is Muhammad Abu Bakar. I am Frontend Developer, and I'm very passionate and dedicated to my work. My goal is to become a skilled web developer. I work ten to twelve hours a day to achieve my goals
                            I will continue to work like this till I reach my goal inshallah</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default About;