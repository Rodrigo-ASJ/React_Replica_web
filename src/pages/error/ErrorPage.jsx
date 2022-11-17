import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ErrorPage = () => {
  return (
    <section id='discover'>
    <Header />
 
  <main className='d-flex discover-bg flex-grow-1'>
  <Container className='d-flex flex-column justify-content-center'>
     <Row>
       <Col className='pt-3'>
         <h1 className='display-3 fw-normal mb-5'>404 ERROR</h1>
       </Col>
     </Row>
   </Container>

  </main>

  <Footer />
  </section>
  )
}

export default ErrorPage