import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="pb-5">
                <Container >
                    <Navbar.Brand as={Link} to="/">Raihan Portfolio</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="home" className="text-white">Home</Nav.Link>
                            <Nav.Link as={Link} to="portfolio" className="text-white">Portfolio</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;