import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch, //use if needed
  useParams, // use if needed
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BookClub from "./components/bookClubPage/BookClub.jsx";
import React, { useState, useContext } from "react";
import { AppContext } from "./context/context.jsx";
import BookDetail from "./components/global/BookDetail.jsx";
import { Button } from "react-bootstrap";

export const App = () => {
  const { exampleClubs } = useContext(AppContext);
  const [show, setShow] = useState(true);
  return (
    <Router>
      <Button variant="primary" onClick={() => setShow(true)}>
        Open Example Book Detail Modal
      </Button>
      <BookDetail
        handleClose={() => {
          setShow(false);
        }}
        show={show}
      />
      {/* @Jason, put this logic into a navbar at some point */}
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/clubs">Book Clubs</Link>
          </li>
          <li>
            <Link to="/clubs/detail">Club Details (Temporary)</Link>
          </li>
        </ul>

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
        </Switch>
      </div>
    </Router>
  );
};
