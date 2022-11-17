import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Formulario from '@pages/join/Form_join'


export const Join = () => {
  return (
    <><Header />
   
    <main id='join' className='d-flex discover-bg flex-grow-1'>
    <Container className='d-flex flex-column justify-content-center'>
       <Row>
         <Col className='pt-3'>
           <h1 className='display-3 fw-normal mb-5'>Discover new music</h1>    
           <p className='lead fw-normal mb-4'>BY joining you can benefit by listening to the latest albums realesed </p>   
         </Col>
         <Col>
          <div className='bg-dark px-5 py-4 rounded-4'>

         <Formulario/>
          </div>
         </Col>
       </Row>
     </Container>
 
    </main>
 
    <Footer />
    </>
  )
}

export default Join