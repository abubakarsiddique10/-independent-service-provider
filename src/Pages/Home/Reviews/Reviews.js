import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Review from "../Review/Review";
import './Reviews.css';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <section className="reviews">
            <Container>
                <h1 className="text-center mb-5">What Students<br />
                    Think and Say About Web Eductation</h1>
                <Row md={1} lg={3} className="g-4">
                    {
                        reviews.map(review => <Review key={review.id} review={review} />)
                    }
                </Row>
            </Container>
        </section>
    )
}
export default Reviews;
