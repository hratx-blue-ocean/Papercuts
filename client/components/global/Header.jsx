import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, ListGroup } from 'react-bootstrap';
import { LoginModal, RegisterModal } from './loginRegisterModal.jsx';
import logout from './logout.js';
import search from '../images/search.svg';

const Header = ({ user, title, variant, background }) => {
  return (
    <Navbar className='nav' fixed='top' bg={background} expand='lg' collapseOnSelect>
      <Container>
        <ListGroup.Item to='/' as={Link} action variant={variant}>
          <Navbar.Brand>{title}</Navbar.Brand>
        </ListGroup.Item>
        <i>
          <img
            src={search}
            style={{ width: '30px', height: '30px', color: 'red' }}
            className='d-inline-block align-top'
            alt='Search Icon'
          />
        </i>
        <ListGroup className='navList mr-auto' horizontal>
          <ListGroup.Item to='/' as={Link} action variant={variant}>
            Home
          </ListGroup.Item>
          <ListGroup.Item to='/clubs' as={Link} action variant={variant}>
            Book Clubs
          </ListGroup.Item>
          <ListGroup.Item to='/clubs/detail' as={Link} action variant={variant}>
            Club Details (Temporary)
          </ListGroup.Item>
          <ListGroup.Item as={Link} to='/subscriptions' action variant={variant}>
            Subscriptions
          </ListGroup.Item>
        </ListGroup>
        {!user ? (
          <ListGroup horizontal>
            <LoginModal as={Link} />
            <RegisterModal as={Link} />
          </ListGroup>
        ) : (
          <ListGroup horizontal>
            <ListGroup.Item as={Link} to='/profile' action variant={variant}>
              {user.email}
            </ListGroup.Item>

            <ListGroup.Item action variant={variant} onClick={logout}>
              Logout
            </ListGroup.Item>
          </ListGroup>
        )}
      </Container>
    </Navbar>
  );
};

Header.defaultProps = {
  title: 'PAPERCUTS BOOKSTORE',
  variant: 'light',
  background: 'light',
};

export default Header;
