import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import bannerImg from '../../../Image/banner.png'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';

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
                <Row>
                    <Col className="d-flex align-items-center col-sm-12 col-md-6">
                        <div data-aos="fade-up"  className="ms-5">
                            <h1 className="text-white">I'am</h1>
                            <h1 className="text-white">Md. Raihan Hossain</h1>
                            <span style={{ color: 'red', fontWeight: 'bold', fontSize:'25px' }}>
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
                            <div className="mt-5">
                            <a href="https://drive.google.com/file/d/1mPdmpHT4dS99HcEK4mJF9fyOBzze6BD2/view" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', backgroundColor:'DodgerBlue', padding:'10px 20px', color:'white', borderRadius:'5px', fontWeight:'bold', fontSize:'18px', margin:'0px 15px'}}>Resume</a>

                            <a href="https://www.upwork.com/freelancers/~011c05ba5c4f086413" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', backgroundColor:'DodgerBlue', padding:'10px 20px', color:'white', borderRadius:'5px', fontWeight:'bold', fontSize:'18px', margin:'0px 15px'}}>Hire Me</a>
                            </div>
                        </div>
                    </Col>

                    <Col className="col-sm-12 col-md-6">
                        <Image src={bannerImg} style={{width:'90%', height:'500px', padding:50}} data-aos="zoom-in"/>
                    </Col>
                </Row>
            </Container>
    );
};

export default Ban;