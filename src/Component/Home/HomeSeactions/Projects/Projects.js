import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProjects from '../../../../Hooks/useProjects';
import Project from './Project';
import '../../../../Global/GlobalStyle.css';

const Projects = () => {

    const [projects] = useProjects();

    return (
        <Container className="text-white mt-5 py-5">
            <div className="text-center mb-5">
                <h1 className="fs-1 fw-bold"> Projects</h1>
                <div className="fs-5 HeaadSubTitle">
                    <p>As a Front-end web developer & computer science graduate, I am interested to work in a place where I would be able to learn and explore myself with new and trending technologies.</p>
                </div>
            </div>

            <Row>
                {
                    projects.map( pj => <Project
                    key = {pj.id}
                    pj = {pj} 
                    ></Project>)
                }
            </Row>
        </Container>
    );
};

export default Projects;