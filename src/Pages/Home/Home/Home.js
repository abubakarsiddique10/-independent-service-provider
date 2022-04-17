import React from "react";
import { Container, Row } from "react-bootstrap";
import useCourses from "../../../hooks/useCourses";
import Course from "../../Courses/Course/Course";
import Banner from "../Banner/Banner";
import './Home.css';
const Home = () => {
    const { courses } = useCourses();
    return (
        <div>
            <Banner></Banner>
            <section className="courses">
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            courses.slice(0, 3).map(course => <Course key={course.id} course={course} />)
                        }
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default Home;