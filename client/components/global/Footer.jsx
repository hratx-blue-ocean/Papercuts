import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container className='d-flex'>
        <Col>
          <Row>
            <h3 className='font-weight-bold'>PAPERCUTS</h3>
          </Row>
          <Row>Copyright &copy; Papercuts Books 2020-2021</Row>
          <Row>
            <i>Privacy</i>
            {' -- '}
            <i>Terms</i>
          </Row>
        </Col>
        <Col>
          <Row>
            <h5 className='font-weight-bold'>Product</h5>
          </Row>
          <br />
          <Row>
            <h5>Product</h5>
          </Row>
          <Row>
            <h5>Product</h5>
          </Row>
          <Row>
            <h5>Product</h5>
          </Row>
        </Col>
        <Col>
          <Row>
            <h5 className='font-weight-bold'>Features</h5>
          </Row>
          <br />
          <Row>
            <h5>Features</h5>
          </Row>
          <Row>
            <h5>Features</h5>
          </Row>
          <Row>
            <h5>Features</h5>
          </Row>
        </Col>
        <Col>
          <Row>
            <h5 className='font-weight-bold'>Resources</h5>
          </Row>
          <br />
          <Row>
            <h5>Resources</h5>
          </Row>
          <Row>
            <h5>Resources</h5>
          </Row>
          <Row>
            <h5>Resources</h5>
          </Row>
        </Col>
        <Col>
          <Row>
            <h5 className='font-weight-bold'>Company</h5>
          </Row>
          <br />
          <Row>
            <h5>Company</h5>
          </Row>
          <Row>
            <h5>Company</h5>
          </Row>
          <Row>
            <h5>Company</h5>
          </Row>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
