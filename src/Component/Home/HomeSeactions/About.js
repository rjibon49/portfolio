import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="text-white my-5 py-5">
            <div className="text-center">
                <h1 className="fs-1 fw-bold"> About Me</h1>
                <div className="px-5 mx-5 text-center fs-5">
                    <p>As a Front-end web developer & computer science graduate, I am interested to work in a place where I would be able to learn and explore myself with new and trending technologies.</p>
                </div>
            </div>
            <Container className="px-5 mx-5">
                <Row className="mt-5">
                    <Col className="col-12 col-md-2 col-xl-4">
                        <div className="ms-3">
                            <h2>Skills</h2>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-10 col-xl-8">
                        <div className="">
                            <i className="fab fa-html5 fs-1 mx-3"></i>
                            <i className="fab fa-css3-alt fs-1 mx-3"></i>
                            <i className="fab fa-js-square fs-1 mx-3"></i>
                            <i className="fab fa-react fs-1 mx-3"></i>
                            <i className="fab fa-node-js fs-1 mx-3"></i>
                            <i className="fab fa-bootstrap fs-1 mx-3"></i>
                            <i className="fab fa-elementor fs-1 mx-3"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="px-5 mx-5">
                <Row className="mt-5">
                    <Col className="col-12 col-md-2 col-xl-4">
                        <div className="ms-3">
                            <h2>Familiar</h2>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-10 col-xl-8">
                        <div className="">
                            <i className="fs-5 mx-3">Express js</i>|
                            <i className="fs-5 mx-3">MongoDB</i>|
                            <i className="fs-5 mx-3">Firebase</i>|
                            <i className="fab fa-react fs-5 mx-3">Libraries</i>|
                            <i className="fab fa-cc-stripe fs-5 mx-3">Gateway</i>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="px-5 mx-5">
                <Row className="mt-5">
                    <Col className="col-12 col-md-2 col-xl-4">
                        <div className="ms-3">
                            <h2>Tools</h2>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-10 col-xl-8">
                        <div className="">
                            <i className="fs-5 mx-3">VS Code</i>|
                            <i className="fab fa-github-square fs-5 mx-3"> Version</i>|
                            <i className="fab fa-chrome fs-5 mx-3"> Dev Tools</i>|
                            <i className="fs-5 mx-3">Netlify</i>|
                            <i className="fs-5 mx-3">Heroku</i>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </Container>
    );
};

export default About;