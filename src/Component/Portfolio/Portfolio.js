import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import useProjects from '../../Hooks/useProjects';
import Pd from './Pd';

const Portfolio = () => {
    const [portfolio] = useProjects();
    return (
        <>
        <div className="bg-dark">
            <Container className="text-white">
                <div className="text-center py-5">
                    <h1 className="fs-1 fw-bold"> Welcome To My 
                        <Typewriter 
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={[' Projects',' Portfolio']}
                                />
                    </h1>
                </div>
                
                <Row>
                    {
                        portfolio.map( pd => <Pd
                        key = {pd.id}
                        pd = {pd} 
                        ></Pd>)
                    }
                </Row>
            </Container>
        </div>
        </>
    );
};

export default Portfolio;