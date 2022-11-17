import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as LogoSVG } from '../../assets/logos/logo.svg'

export const Header = () => {
  return (
    <header>
  <Navbar className="pt-4" variant='dark'>
        <Container>
          <Navbar.Brand href="#home" className='d-flex align-items-center'>
          <LogoSVG className='me-3'/> Soundwave
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Discover</Nav.Link>
            <Nav.Link href="#features">Join</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header