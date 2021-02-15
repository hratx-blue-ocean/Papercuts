import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, ListGroup } from 'react-bootstrap';
import { LoginModal, RegisterModal } from './loginRegisterModal.jsx';

const Header = ({ user, title, variant, background }) => {
  return (
    <Navbar className="nav" fixed="top" bg={background} expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>{title}</Navbar.Brand>
        </LinkContainer>
        <i>
          <img
            src="../images/search.svg"
            width="62"
            height="62"
            className="d-inline-block align-top"
            alt="Search Icon"
          />
        </i>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/" variant={variant}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/subscriptions" variant={variant}>
              <Nav.Link>Subscriptions</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/clubs" variant={variant}>
              <Nav.Link>Book Clubs</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/clubs/detail" variant={variant}>
              <Nav.Link>Club Details (Temporary)</Nav.Link>
            </LinkContainer> */}
            {!user ? (
              <ListGroup horizontal>
                <LoginModal as={Link} />
                <RegisterModal as={Link} />
              </ListGroup>
            ) : (
              <ListGroup horizontal>
                <ListGroup.Item as={Link} to="/profile" action variant={variant}>
                  {user.email}
                </ListGroup.Item>

                <ListGroup.Item action variant={variant} onClick={logout}>
                  Logout
                </ListGroup.Item>
              </ListGroup>
            )}
          </Nav>
        </Navbar.Collapse>
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
