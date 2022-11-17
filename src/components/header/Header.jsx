import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as LogoSVG } from '../../assets/logos/logo.svg'

export const Header = () => {
  return (
    <header>
  <Navbar className="pt-4" variant='dark'>
        <Container>
          <Navbar.Brand as={Link} to="/" className='d-flex align-items-center'>
          <LogoSVG className='me-3'/> Soundwave
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="discover">Discover</Nav.Link>
            <Nav.Link as={Link} to="join">Join</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>


  )
}

export default Header