import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import bannerImg from '../../../Image/banner.png'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import '../../../Global/GlobalStyle.css';

const Ban = () => {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1000,
            easing:'ease-in'
        });
        
    },[])
    return (
        <Container>
                <Row className="d-flex align-items-center">
                    <Col xs={12} sm={12} md={6}>
                        <div data-aos="fade-up"  className="banner-title">
                            <h1 className="text-white title1">I'am</h1>
                            <h1 className="text-white title1">Md. Raihan Hossain</h1>
                            <span style={{ color: '#0fbcf9', fontWeight: 'bold', fontSize:'25px'}} className="subtitle">
                                <Typewriter 
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={['Front-end Developer','MERN Stack Developer']}
                                />
                            </span>
                            <div className="mt-5 hirebtn">
                            <a href="https://drive.google.com/file/d/1qz8oeQuYIoSZMyJ1uOLfO3_MQDoWAkm7/view" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', backgroundColor:'DodgerBlue', padding:'10px 20px', color:'white', borderRadius:'5px', fontWeight:'bold', fontSize:'18px', margin:'0px 15px'}} >Resume</a>

                            <a href="https://www.upwork.com/freelancers/~011c05ba5c4f086413" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', backgroundColor:'DodgerBlue', padding:'10px 20px', color:'white', borderRadius:'5px', fontWeight:'bold', fontSize:'18px', margin:'0px 15px'}}>Hire Me</a>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={6}>
                        <div className="bannerimage">
                        <Image src={bannerImg} data-aos="zoom-in"/>
                        </div>
                    </Col>
                </Row>
            </Container>
    );
};

export default Ban;