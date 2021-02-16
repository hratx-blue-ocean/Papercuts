import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch, //use if needed
  useParams, // use if needed
} from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { Button, ListGroup, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from './context/context.jsx';
import { AuthContext } from './context/authContext.jsx';
import Header from './components/global/Header.jsx';
import Footer from './components/global/Footer.jsx';
import BookDetail from './components/global/BookDetail.jsx';
<<<<<<< HEAD
import BookClub from './components/bookClubPage/bookClub.jsx';
import Profile from './components/profilePage/profilePage.jsx';
import { LoginModal, RegisterModal } from './components/global/loginRegisterModal.jsx';
import logout from './components/global/logout.js';
=======
import MyLibrary from './components/profilePage/myLibrary.jsx';
import BookClub from './components/bookClubPage/BookClub.jsx';
import BookClubs from './components/bookClubPage/BookClubs.jsx';
import Subscriptions from './components/subscriptionsPage/Subscriptions.jsx';
import { ChangePasswordForm } from './components/global/ChangePasswordForm.jsx';
import Error from './components/global/Error.jsx';
>>>>>>> main

export const App = () => {
  const user = useContext(AuthContext);
  const { exampleClubs } = useContext(AppContext);
  const [show, setShow] = useState(false);
  return (
    <Router>
<<<<<<< HEAD
      <div>
        <ListGroup className="navList" horizontal>
          <ListGroup.Item to="/" as={Link} action variant="dark">
            Home
          </ListGroup.Item>
          <ListGroup.Item to="/clubs" as={Link} action variant="dark">
            Book Clubs
          </ListGroup.Item>
          <ListGroup.Item to="/clubs/detail" as={Link} action variant="dark">
            Club Details (Temporary)
          </ListGroup.Item>
          <ListGroup.Item as={Link} to="/subscriptions" action variant="dark">
            Subscriptions
          </ListGroup.Item>
          {!user ? (
            <ListGroup horizontal>
              <LoginModal as={Link} />
              <RegisterModal as={Link} />
            </ListGroup>
          ) : (
            <ListGroup horizontal>
              <ListGroup.Item as={Link} to="/profile" action variant="dark">
                {user.email}
              </ListGroup.Item>

              <ListGroup.Item action variant="dark" onClick={logout}>
                Logout
              </ListGroup.Item>
            </ListGroup>
          )}
        </ListGroup>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            {/* Cayla, put in your component here when ready */}
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/clubs">
            {/* Chris, your component here*/}
          </Route>
          <Route path="/clubs/detail">
            <BookClub />
          </Route>
          <Route path="/subscriptions">
            <Subscriptions />
          </Route>
        </Switch>
      </div>
      <Button variant="primary" onClick={() => setShow(true)}>
=======
      <Header user={user} />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route exact path='/'>
              {/* Cayla, put in your component here when ready */}
            </Route>
            <Route path='/profile' component={MyLibrary}></Route>
            <Route exact path='/clubs' component={BookClubs}>
              {/* <BookClubs /> */}
            </Route>
            <Route path='/clubs/detail' component={BookClub}>
              {/* <BookClub /> */}
            </Route>
            <Route path='/subscriptions' component={Subscriptions}>
              {/* <Subscriptions /> */}
            </Route>
            <Route exact path='/changePassword/:email/:token'>
              <ChangePasswordForm />
            </Route>
            <Route component={Error} />
          </Switch>
        </Container>
      </main>
      <Footer />
      <Button variant='primary' onClick={() => setShow(true)}>
>>>>>>> main
        Open Example Book Detail Modal
      </Button>
      <BookDetail
        handleClose={() => {
          setShow(false);
        }}
        show={show}
      />
    </Router>
  );
};
