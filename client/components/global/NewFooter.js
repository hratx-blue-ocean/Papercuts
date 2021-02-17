import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

export const NewFooter = () => {
  return (
    <Navbar id='footer' className='footer bg-light'>
      <Container className='d-flex justify-content-center'>
        Copyright &copy; Papercuts Books 2020-2021
      </Container>
    </Navbar>
  );
};
