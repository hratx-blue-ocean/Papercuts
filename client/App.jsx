import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch, //use if needed
  useParams // use if needed
} from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { Button, ListGroup, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from './context/context.jsx';
import { AuthContext } from './context/authContext.jsx';
import Header from './components/global/Header.jsx';
import Footer from './components/global/Footer.jsx';
import BookDetail from './components/global/BookDetail.jsx';
import MainProfilePage from './components/profilePage/main.jsx';
import HomePage from './components/homePage/homePage.jsx';
import BookClub from './components/bookClubPage/BookClub.jsx';
import BookClubs from './components/bookClubPage/BookClubs.jsx';
import Subscriptions from './components/subscriptionsPage/Subscriptions.jsx';
import Checkout from './components/payments/Checkout.jsx';
import { ChangePasswordForm } from './components/global/ChangePasswordForm.jsx';
import Error from './components/global/Error.jsx';
import CreateBookClub from './components/createBookClubPage/CreateBookClub.jsx';
import RecommendedBooks from './components/profilePage/recommendedBooks.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SettingPage } from './components/settingPage/index.js';
import { NewFooter } from './components/global/NewFooter.js';

export const App = () => {
  const user = useContext(AuthContext);
  const [show, setShow] = useState(false);

  return (
    <div id='bodyContainer'>
      <Router>
        <Header user={user} />
        <main
          className='d-flex justify-content-center'
          style={{ paddingBottom: '25px' }}
        >
          <Container className='p-1 m-1' fluid>
            <Switch>
              <Route path='/profile'>
                <MainProfilePage user={user} />
              </Route>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/clubs' component={BookClubs} />
              {/* need to set up dynamic routing for different book clubs based on Id */}
              <Route path='/clubs/detail/:id' component={BookClub} />
              <Route path='/clubs/create'>
                <CreateBookClub user={user} />
              </Route>
              <Route path='/subscriptions' component={Subscriptions} />
              <Route path='/checkout' component={Checkout} />
              <Route path='/setting'>
                <SettingPage user={user} />
              </Route>

              <Route exact path='/changePassword/:email/:token' component={ChangePasswordForm} />
              <Route component={Error} />
            </Switch>
          </Container>
        </main>
        <NewFooter />
      </Router>
    </div>
  );
};
