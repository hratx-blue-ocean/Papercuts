import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, ListGroup, Form, Image, Button } from 'react-bootstrap';
import { LoginModal, RegisterModal } from './loginRegisterModal.jsx';
import logout from './logout.js';
import search from '../images/search.svg';

const Header = ({ user, title, variant, background }) => {
  return (
    <Navbar className='nav fixed-top' bg={background}>
      <Container>
        <Navbar.Brand to='/' as={Link} variant={variant}>
          <strong>{title}</strong>
        </Navbar.Brand>

        <Nav className='mr-auto'>
          <Nav.Link to='/' as={Link} variant={variant}>
            Home
          </Nav.Link>
          <Nav.Link to='/clubs' as={Link} variant={variant}>
            Book Clubs
          </Nav.Link>
          <Nav.Link as={Link} to='/subscriptions' variant={variant}>
            Subscriptions
          </Nav.Link>
          {/* {user && ( */}
            <Nav.Link as={Link} to='/profile' variant={variant}>
              Profile
            </Nav.Link>
          {/* )} */}
        </Nav>

        <Nav className='ml-auto'>
          {!user ? (
            <>
              <LoginModal />
              <RegisterModal />
            </>
          ) : (
            <Nav.Link variant={variant} onClick={logout}>
              Logout from {user.email}
            </Nav.Link>
          )}
        </Nav>

        <Form className='ml-auto' inline>
          <Form.Control type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-info'>
            <Image
              src={search}
              style={{ width: '40px', height: '40px', color: 'red' }}
              className='d-inline-block align-top'
              alt='Search Icon'
            />
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

Header.defaultProps = {
  title: 'PAPERCUTS BOOKSTORE',
  variant: '',
  background: 'light',
};

export default Header;
