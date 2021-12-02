import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import '../../Global/GlobalStyle.css';

const ProjectDetails = () => {
    const {projectId} = useParams();

    const [portfolioDetils, setPortfolioDetails] = useState({});

    useEffect(() => {
        const url = `https://api.npoint.io/1cefefaade9cc475e221/${projectId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPortfolioDetails(data))
    },[projectId]);

    const{ title, subtitle, images, gallery1, gallery2, gallery3, gallery4, gallery5, liveSite, clientCode, serverCode, d1, d2, d3, Details, technonogy} = portfolioDetils;

    function ControlledCarousel() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };


    return (
        <div className="bg-dark">
            <Container className="py-5 text-white">
            <div className="pb-5 text-center ">
                <h1>{title}</h1>
                <h6>({subtitle})</h6>
                <li>{d1}</li>
                <li>{d2}</li>
                <li>{d3}</li>
                <div className="mt-5 portpoliobtn">
                    <a href={liveSite} target="_blank" rel="noopener noreferrer" ><i className="fas fa-link fs-3"></i> Live Site</a>
                    <a href={clientCode} target="_blank" rel="noopener noreferrer"><i className="fab fa-github fs-3"></i> Client Code</a>
                    <a href={serverCode} target="_blank" rel="noopener noreferrer"><i className="fab fa-github fs-3"></i> Server Code</a>
                </div>
                <h6 className="my-4">{technonogy}</h6>
            </div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item interval={1000}>
                        <Image className="d-block w-100" src={gallery1} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <Image className="d-block w-100" src={gallery2} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <Image className="d-block w-100" src={gallery3} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <Image className="d-block w-100" src={gallery4} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <Image className="d-block w-100"  src={gallery5} alt="" />
                    </Carousel.Item>
                </Carousel>
                    <div className="m-5 p-5">
                        <p>{Details}</p>
                    </div>
                <Row className="">
                    <Col xs={12} md={6}>
                        <div className="pb-5">
                            <Image src={gallery1} className="img-thumbnail my-4"/>
                            <Image src={gallery2} className="img-thumbnail my-4"/>
                            <Image src={gallery3} className="img-thumbnail my-4"/>
                            <Image src={gallery4} className="img-thumbnail my-4"/>
                            <Image src={gallery5} className="img-thumbnail my-4"/>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div>
                            <Image src={images} style={{width:'100%'}}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
    }
    render()
          return ( <ControlledCarousel />);
};

export default ProjectDetails;