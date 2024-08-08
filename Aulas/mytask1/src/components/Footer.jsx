import React from 'react';
import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container fluid>
                    <Link to="/">
                        <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" width="32"/>
                    </Link>
                    <Navbar.Toggle/>
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/privacidade">Política de Privacidade</Link>
                        </Nav>
                </Container>
            </Navbar>
    </footer>
  );
}

export default Footer;
