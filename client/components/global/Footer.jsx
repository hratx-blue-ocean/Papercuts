import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <h3 className="font-weight-bold">PAPERCUTS</h3>
          </Col>
          <Col className="text-center py-3">Copyright &copy; Papercuts Books 2020-2021</Col>
          <Col>
            <i>Privacy</i> -- <i>Terms</i>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="font-weight-bold">Product</h5>
          </Col>
          <br />
          <Col>
            <h5>Product</h5>
          </Col>
          <Col>
            <h5>Product</h5>
          </Col>
          <Col>
            <h5>Product</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="font-weight-bold">Features</h5>
          </Col>
          <br />
          <Col>
            <h5>Features</h5>
          </Col>
          <Col>
            <h5>Features</h5>
          </Col>
          <Col>
            <h5>Features</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="font-weight-bold">Resources</h5>
          </Col>
          <br />
          <Col>
            <h5>Resources</h5>
          </Col>
          <Col>
            <h5>Resources</h5>
          </Col>
          <Col>
            <h5>Resources</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="font-weight-bold">Company</h5>
          </Col>
          <br />
          <Col>
            <h5>Company</h5>
          </Col>
          <Col>
            <h5>Company</h5>
          </Col>
          <Col>
            <h5>Company</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
