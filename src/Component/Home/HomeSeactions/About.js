import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../../Global/GlobalStyle.css'

const About = () => {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1000,
            easing:'ease-in'
        });
        
    },[])
    return (
        <Container className="text-white mt-5 py-5" id="aboutMe">
            <div className="text-center">
                <h1 className="fs-1 fw-bold headTitle"> About Me</h1>
                <div className="text-center fs-5 HeaadSubTitle">
                    <p>As a Front-end web developer & computer science graduate, I am interested to work in a place where I would be able to learn and explore myself with new and trending technologies.</p>
                </div>
            </div>
                <Row className="mt-5">
                    <Col xs={12} md={2}>
                        <div data-aos="slide-right">
                            <h2>Skills</h2>
                        </div>
                    </Col>
                    <Col xs={12} md={10}>
                        <div className="skilsItem">
                            <i data-aos="zoom-in" className="fab fa-html5 fs-1"></i>
                            <i data-aos="zoom-in" className="fab fa-css3-alt fs-1"></i>
                            <i data-aos="zoom-in" className="fab fa-js-square fs-1"></i>
                            <i data-aos="zoom-in" className="fab fa-react fs-1"></i>
                            <i data-aos="zoom-in" className="fab fa-node-js fs-1"></i>
                            <i data-aos="zoom-in" className="fab fa-bootstrap fs-1"></i>
                            <i data-aos="zoom-in" className="fab fa-elementor fs-1"></i>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} sm={12} md={2}>
                        <div data-aos="slide-right">
                            <h2>Familiar</h2>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={10}>
                        <div className="skilsItem fs-5">
                            <i data-aos="zoom-in" >Express js |</i>
                            <i data-aos="zoom-in" >MongoDB |</i>
                            <i data-aos="zoom-in" >Firebase |</i>
                            <i data-aos="zoom-in" className="fab fa-react">Libraries |</i>
                            <i data-aos="zoom-in" className="fab fa-cc-stripe">Gateway</i>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={2}>
                        <div data-aos="slide-right">
                            <h2>Tools</h2>
                        </div>
                    </Col>
                    <Col xs={12} md={10}>
                        <div className="skilsItem fs-5">
                            <i data-aos="zoom-in">VS Code |</i>
                            <i data-aos="zoom-in" className="fab fa-github-square"> Version |</i>
                            <i data-aos="zoom-in">Netlify |</i>
                            <i data-aos="zoom-in" >Heroku |</i>
                            <i data-aos="zoom-in" className="fab fa-chrome "> Dev Tools</i>   
                        </div>
                    </Col>
                </Row>
            
        </Container>
    );
};

export default About;