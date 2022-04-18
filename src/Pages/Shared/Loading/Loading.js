import React from "react";
import './Loading.css';
import { Spinner } from "react-bootstrap";
const Loading = () => {
    return (
        <div className="loading">
            <Spinner animation="border" variant="primary" />
        </div>
    )
}
export default Loading;