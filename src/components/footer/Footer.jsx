import React from 'react'
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Twitter from '@assets/social_media/twitter.svg'
import Facebook from '@assets/social_media/facebook.svg'

export const Footer = () => {
  return (
   <footer>
    <Navbar bg="dark" variant="dark">
        <Container>
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
            <Nav.Link  as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/twitter"> <img
              src={Twitter}
              width="20"
              height="20"
              className="d-inline-block align-top me-2"
              alt="twitter"
            /> Twitter</Nav.Link>
            <Nav.Link as={Link} to="/facebook"><img
              src={Facebook}
              width="20"
              height="20"
              className="d-inline-block align-top me-2"
              alt="facebook"
            />Facebook</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>

  )
}

export default Footer