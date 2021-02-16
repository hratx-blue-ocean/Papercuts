import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar className='footer bg-light' style={{ border: '1px solid #111', maxWidth: '100vw' }}>
      <Container className='d-flex' style={{ maxWidth: '100vw' }}>
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
            <p>Product</p>
          </Row>
          <Row>
            <p>Product</p>
          </Row>
          <Row>
            <p>Product</p>
          </Row>
        </Col>
        <Col>
          <Row>
            <h5 className='font-weight-bold'>Features</h5>
          </Row>
          <br />
          <Row>
            <p>Features</p>
          </Row>
          <Row>
            <p>Features</p>
          </Row>
          <Row>
            <p>Features</p>
          </Row>
        </Col>
        <Col>
          <Row>
            <h5 className='font-weight-bold'>Resources</h5>
          </Row>
          <br />
          <Row>
            <p>Resources</p>
          </Row>
          <Row>
            <p>Resources</p>
          </Row>
          <Row>
            <p>Resources</p>
          </Row>
        </Col>
        <Col>
          <Row>
            <h5 className='font-weight-bold'>Company</h5>
          </Row>
          <br />
          <Row>
            <p>Company</p>
          </Row>
          <Row>
            <p>Company</p>
          </Row>
          <Row>
            <p>Company</p>
          </Row>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Footer;
