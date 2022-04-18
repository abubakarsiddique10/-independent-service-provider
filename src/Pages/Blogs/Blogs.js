import React from "react";
import { Container } from "react-bootstrap";
import './Blogs.css';
const Blogs = () => {
    return (
        <section className="blogs">
            <Container>
                <h1 className="mt-3 text-center">Blogs</h1>
                <div className="my-5">
                    <h3>Difference between authorization and authentication?</h3>
                    <h5>Authentication</h5>
                    <ul>
                        <li>In authentication process, the identity of users are checked for providing the access to the system.</li>
                        <li>In authentication process, users or persons are verified.</li>
                        <li>It is done before the authorization process.</li>
                    </ul>
                    <h5>authentication</h5>
                    <ul>
                        <li>While in authorization process, person’s or user’s authorities are checked for accessing the resources.</li>
                        <li>While in this process, users or persons are validated.</li>
                        <li>While it needs user’s privilege or security levels.</li>
                    </ul>
                </div>
                <div className="my-5">
                    <h3>Why are you using `firebase`? What other options do you have to implement authentication?</h3>
                    <p>
                        Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.

                        You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.
                    </p>
                </div>
                <div>
                    <h3>What other services does `firebase` provide other than authentication?</h3>
                    <p className="mb-1">There are many services which Firebase provides, Most useful of them are:</p>
                    <ol>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Hosting..</li>
                        <li>Cloud Storage.</li>
                        <li>Google Analytics.</li>
                        <li>Predictions..</li>
                        <li>Cloud Messaging.</li>
                    </ol>
                </div>
            </Container>
        </section>
    )
}
export default Blogs;