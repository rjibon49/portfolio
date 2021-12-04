import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../../Global/GlobalStyle.css';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="" sticky="top">
                <Container >
                    <Navbar.Brand as={Link} to="/" >Raihan Portfolio</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="home" className="text-white navItem">Home</Nav.Link>
                            <Nav.Link ><HashLink smooth to="#aboutMe" className="text-white navItem"> About Me</HashLink></Nav.Link>
                            <Nav.Link as={Link} to="blogs" className="text-white navItem">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="portfolio" className="text-white navItem">Portfolio</Nav.Link>
                            <Nav.Link ><HashLink smooth to="#contactMe" className="text-white navItem"> Contact</HashLink></Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;