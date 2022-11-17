import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Girl from '@assets/fotos/landing-page-girl.png'

export const Home = () => {
  return (
   <section id="home">
    <Header />
   
   <main  className='d-flex flex-grow-1'>
   <Container className='d-flex flex-column justify-content-end'>
      <Row>
        <Col><img src={Girl} className="img-fluid" alt="mujer mirando al cielo"/></Col>
        <Col className='pt-15'>
          <h1 className='display-3 fw-normal'>Feel the music</h1>
          <p className='lead fw-normal mb-4'>Stream Over 20 thousand songs with one click</p>
          <Link className="btn btn-primary" to="/join">Join Now</Link>
        </Col>
      </Row>
    </Container>

   </main>

   <Footer />
   </section>
  )
}

export default Home