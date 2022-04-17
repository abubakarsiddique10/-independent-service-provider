import React from "react";
import { Button, Card, Col, } from "react-bootstrap";
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faClock, faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
const Course = ({ course }) => {
    const { name, img, Price, description, courseName, lessons, hour, minute } = course;
    return (
        <Col>
            <Card className="h-100 border-0">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <span>{name}</span>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div className="sub-details">
                        <div>
                            <FontAwesomeIcon className="icon" icon={faClock} /><span>{lessons} lessons</span>
                        </div>
                        <div>
                            <FontAwesomeIcon className="icon" icon={faBookOpenReader} />
                            <span>{hour}h {minute}m</span>
                        </div>
                        <div className="star">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button>Apply now</Button>
                    <h5>{Price}</h5>
                </Card.Footer>
            </Card>
        </Col>
    )
}
export default Course;

