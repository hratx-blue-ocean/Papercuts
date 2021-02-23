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
  Button
} from 'react-bootstrap';
import { LoginModal, RegisterModal } from './loginRegisterModal.jsx';
import logout from './logout.js';
import logo from '../../../Docs/readMeImage/logo.png';
// style={{ borderBottom: '2px solid #111', maxWidth: '100vw' }}
const Header = ({ user, title, variant, background }) => {
  const scale = 5;
  return (
    <Navbar className='nav font-weight-light font-lg' bg={background} sticky='top'>
      <Container style={{ maxWidth: '100vw' }}>
        <Navbar.Brand to='/' as={Link}>
          <img
            alt='logo image'
            src={logo}
            width={`${1451 / scale}`}
            height={`${308 / scale}`}
            className='d-inline-block align-top'
          />{' '}
        </Navbar.Brand>
        <Nav className='mr-auto'>
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
          <Nav.Link as={Link} to='/about' variant={variant}>
            About
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
        {/* <Button variant='outline-info'>
            <Image
              src={search}
              style={{ width: '40px', height: '40px', color: 'red' }}
              className='d-inline-block align-top'
              alt='Search Icon'
            />
          </Button> */}
      </Container>
    </Navbar>
  );
};
Header.defaultProps = {
  title: 'PAPERCUTS BOOKSTORE',
  variant: '',
  background: 'light'
};
export default Header;
