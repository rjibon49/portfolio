import React, { useEffect } from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../../Global/GlobalStyle.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Project = ({pj}) => {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1000,
            easing:'ease-in'
        });
        
    },[])
    const {id, title, gallery1} = pj;
    return (
        <Col className="col-sm-12 col-md-6 col-xl-4">
            <div className="m-3 banner-img content" data-aos="zoom-in">
                <div class="content-overlay"></div>
                <Image src={gallery1} style={{width:'100%', height:'200px'}}/>
                    
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">{title}</h3>
                            <Link to={`/portfolio/${id}`}>
                                <button className="btn btn-primary content-text text-white">More Details</button>
                            </Link>
                    </div>
                    
            </div>
        </Col>
    );
};

export default Project;