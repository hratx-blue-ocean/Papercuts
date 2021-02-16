import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch, //use if needed
  useParams, // use if needed
} from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { Button, ListGroup, Container, Row, Col, Form } from 'react-bootstrap';
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
import Checkout from './components/payments/Checkout.jsx';
import { ChangePasswordForm } from './components/global/ChangePasswordForm.jsx';
import Error from './components/global/Error.jsx';
import { SettingPage } from './components/settingPage/index.js';
import CreateBookClub from './components/createBookClubPage/CreateBookClub.jsx';

export const App = () => {
  const user = useContext(AuthContext);
  const { exampleClubs } = useContext(AppContext);
  const [show, setShow] = useState(false);
  return (
    <Router>
      <Switch>
        <Route exact path='/' />
        <Route path='/profile' component={MyLibrary} />
        <Route exact path='/clubs' component={BookClubs} />
        {/* need to set up dynamic routing for different book clubs based on Id */}
        <Route path='/clubs/detail' component={BookClub} />
        <Route path='/clubs/create'>
          <CreateBookClub user={user} />
        </Route>
        <Route path='/subscriptions' component={Subscriptions} />
        <Route path='/setting' component={SettingPage} />
        <Route path='/checkout' component={Checkout} />
        <Route exact path='/changePassword/:email/:token' component={ChangePasswordForm} />
        <Route component={Error} />
      </Switch>

      <Header user={user} />

      <Container style={{ marginTop: '80px' }}>
        <Row>
          <Col lg={8}>
            <Row>
              <Col sm={9}>
                <Form.Control placeholder='Search books by title' />
              </Col>
              <Col sm={3}>
                <Button variant='dark' block>
                  Search
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={5}>
                <div style={{ height: '500px', width: '325px' }}>
                  <img
                    style={{ height: '100%', width: '100%' }}
                    src='https://juliaquinn.com/WP/wp-content/uploads/2020/11/Bridgerton_TVTie-In_TRADE.jpg'
                  />
                </div>
              </Col>
              <Col sm={7}></Col>
            </Row>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>

      <BookDetail
        handleClose={() => {
          setShow(false);
        }}
        show={show}
      />
      {/* <Footer /> */}
    </Router>
  );
};
