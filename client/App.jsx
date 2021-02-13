import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch, //use if needed
  useParams, // use if needed
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookClub from './components/bookClubPage/bookClub.jsx';
import React, { useContext } from 'react';
import { AppContext } from './context/context.jsx';
import { AuthContext } from './context/authContext.jsx';
import ListGroup from 'react-bootstrap/ListGroup';
import { LoginModal, RegisterModal } from './components/global/loginRegisterModal.jsx';
import Button from 'react-bootstrap/Button';
import logout from './components/global/logout.js';

export const App = () => {
  const user = useContext(AuthContext);
  const { exampleClubs } = useContext(AppContext);
  return (
    <Router>
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
            {/* Sean, Jerrick, put in your component here when ready */}
          </Route>
          <Route exact path="/clubs">
            {/* Chris, your component here*/}
          </Route>
          <Route path="/clubs/detail">
            <BookClub />
          </Route>
          <Route path="/subscriptions">{/* subscriptions path */}</Route>
        </Switch>
      </div>
    </Router>
  );
};
