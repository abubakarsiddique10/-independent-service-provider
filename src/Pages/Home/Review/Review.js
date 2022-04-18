import React from "react";
import './Review.css';
import { Card, Col, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faClock, faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
const Review = ({ review }) => {
    const { name, img, description, feeling } = review;
    return (
        <Col style={{ background: '#ffffff' }}>
            <Card style={{ background: '#F8F9FB' }} className="card-details border-0">
                <div className="d-flex align-items-center">
                    <Card.Img className="card-img me-3" variant="top" src={img} />
                    <h3>{name}</h3>
                </div>
                <Card.Body className="p-0 pt-3">
                    <Card.Title>{feeling}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className="star">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Review;

