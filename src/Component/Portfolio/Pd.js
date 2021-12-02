import React, { useEffect } from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../Global/GlobalStyle.css';

const Pd = ({pd}) => {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1000,
            easing:'ease-in'
        });
        
    },[])

    const {id, title, gallery1} = pd;

    return (
        <Col xs={12} sm={12} md={6} lg={4}>
            <div className="m-3 banner-img content" data-aos="zoom-in">
                <div className="content-overlay" ></div>
                <Image src={gallery1} className="img-thumbnail testimg"/>
                    
                    <div className="content-details fadeIn-bottom" style={{backgroundColor: 'rgba(3, 3, 3, 0.842)', padding: '60px 0px'}}>
                        <h3 className="content-title">{title}</h3>
                            <Link to={`/portfolio/${id}`}>
                                <button className="btn btn-primary content-text text-white">More Details</button>
                            </Link>
                    </div>
                    
            </div>
        </Col>
    );
};

export default Pd;