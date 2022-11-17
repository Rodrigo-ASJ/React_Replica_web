import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Covers from '@assets/fotos/covers.jpg'
import { ReactComponent as Charts } from '../../assets/icons/microphone.svg'
import { ReactComponent as Albums } from '../../assets/icons/albums.svg'
import { ReactComponent as More } from '../../assets/icons/more.svg'

export const Discover = () => {
  return (
    <section id='discover'>
      <Header />
   
    <main className='d-flex discover-bg flex-grow-1'>
    <Container className='d-flex flex-column justify-content-center'>
       <Row>
         <Col md={6} className='pt-3'>
           <h1 className='display-3 fw-normal mb-5'>Discover new music</h1>
           <div className="d-flex flex-wrap mb-4">

           <div className='item me-2 me-md-4 mb-2 flex-shrink-1'>
            <Charts className='mb-3'/>
            <p>Charts</p>
           </div>
           <div className='item me-2 me-md-4 mb-2'>
            <Albums className='mb-3'/>
            <p>Albums</p>
           </div>
           <div className='item mb-2'>
            <More className='mb-3'/>
            <p>More</p>
           </div>
           </div>
           <p className='lead fw-normal mb-4'>BY joining you can benefit by listening to the latest albums realesed </p>
         
         </Col>
         <Col md={6} className='text-center'>
          <img src={Covers} className="img-fluid" alt="mujer mirando al cielo"/>
         </Col>
       </Row>
     </Container>
 
    </main>
 
    <Footer />
    </section>
  )
}

export default Discover