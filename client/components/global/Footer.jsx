import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className='d-flex footer'>
      <br />
      <Col>
        <Row>
          <h4 className='font-weight-bold'>PAPERCUTS</h4>
        </Row>
        <Row>Copyright &copy; Papercuts Books 2020-2021</Row>
        <Row>
          <i>Privacy </i>
          {'|'}
          <i> Terms</i>
        </Row>
      </Col>
      <Col>
        <Row>
          <h6 className='font-weight-bold'>Product</h6>
        </Row>
        <br />
        <Row>
          <h6>Detail</h6>
        </Row>
        <Row>
          <h6>Detail</h6>
        </Row>
        <Row>
          <h6>Detail</h6>
        </Row>
      </Col>
      <Col>
        <Row>
          <h6 className='font-weight-bold'>Features</h6>
        </Row>
        <br />
        <Row>
          <h6>Detail</h6>
        </Row>
        <Row>
          <h6>Detail</h6>
        </Row>
        <Row>
          <h6>Detail</h6>
        </Row>
      </Col>
      <Col>
        <Row>
          <h6 className='font-weight-bold'>Resources</h6>
        </Row>
        <br />
        <Row>
          <h6>Detail</h6>
        </Row>
        <Row>
          <h6>Detail</h6>
        </Row>
        <Row>
          <h6>Detail</h6>
        </Row>
      </Col>
      <Col>
        <Row>
          <h6 className='font-weight-bold'>Company</h6>
        </Row>
        <br />
        <Row>
          <h6>Detail</h6>
        </Row>
        <Row>
          <h6>Detail</h6>
        </Row>
        <Row>
          <h6>Detail</h6>
        </Row>
      </Col>
    </Container>
  );
};

export default Footer;
