import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import useCourses from "../../../hooks/useCourses";
import Course from "../Course/Course";
import './Courses.css';
const Courses = () => {
    const { courses } = useCourses();
    console.log(courses)
    return (
        <section style={{ background: "#F4F6F9", Zindex: '0' }}>
            <Container>
                <h1>My courses</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        courses.map(course => <Course key={course.id} course={course} />)
                    }
                </Row>
            </Container>
        </section>
    )
}
export default Courses;