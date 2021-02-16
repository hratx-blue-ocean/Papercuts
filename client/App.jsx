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
import MyLibrary from './components/profilePage/myLibrary.jsx';
import BookClub from './components/bookClubPage/BookClub.jsx';
import BookClubs from './components/bookClubPage/BookClubs.jsx';
import Subscriptions from './components/subscriptionsPage/Subscriptions.jsx';
import { ChangePasswordForm } from './components/global/ChangePasswordForm.jsx';
import Error from './components/global/Error.jsx';

import './style.css';

export const App = () => {
  const user = useContext(AuthContext);
  const { exampleClubs } = useContext(AppContext);
  const [show, setShow] = useState(false);
  return (
    <Router>
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
