import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  ListGroup,
  Form,
  Image,
  Button,
} from 'react-bootstrap';
import { LoginModal, RegisterModal } from './loginRegisterModal.jsx';
import logout from './logout.js';
import search from '../../assets/images/search.svg';

const Header = ({ user, title, variant, background }) => {
  return (
    <Navbar
      className='nav fixed-top'
      bg={background}
      fixed='top'
      style={{ border: '1px solid #111', maxWidth: '100vw' }}
    >
      <Container style={{ maxWidth: '100vw' }}>
        <Navbar.Brand to='/' as={Link} variant={variant}>
          <strong className='font-weight-bold'>{title}</strong>
        </Navbar.Brand>

        <Nav className='mr-auto'>
          <Nav.Link to='/' as={Link} variant={variant}>
            Home
          </Nav.Link>
          <NavDropdown title='Book Clubs'>
            <Nav.Link to='/clubs' as={Link} variant={variant}>
              Browse
            </Nav.Link>
            <Nav.Link to='/clubs/create' as={Link} variant={variant}>
              Create a Book Club
            </Nav.Link>
          </NavDropdown>
          <Nav.Link as={Link} to='/subscriptions' variant={variant}>
            Subscriptions
          </Nav.Link>
          {user && (
            <Nav.Link as={Link} to='/profile' variant={variant}>
              Profile
            </Nav.Link>
          )}
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
