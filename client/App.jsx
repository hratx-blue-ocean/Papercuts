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
        <ListGroup horizontal>
          <ListGroup.Item>
            <Link to="/">Home</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/profile">Profile</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/clubs">Book Clubs</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/clubs/detail">Club Details (Temporary)</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/subscriptions">Subscriptions</Link>
          </ListGroup.Item>
          <div>
            {!user ? (
              <ListGroup horizontal>
                <ListGroup.Item>
                  <LoginModal />
                </ListGroup.Item>
                <ListGroup.Item>
                  <RegisterModal />
                </ListGroup.Item>
              </ListGroup>
            ) : (
              <ListGroup horizontal>
                <ListGroup.Item>{user.email}</ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/">
                    <Button onClick={logout}>Logout</Button>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            )}
          </div>
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
