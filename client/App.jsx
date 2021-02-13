import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch, //use if needed
  useParams, // use if needed
} from "react-router-dom";
import BookClub from "./components/bookClubPage/bookClub.jsx";
import React, { useContext } from "react";
import { AppContext } from "./context/context.jsx";
import { AuthContext } from "./context/authContext.jsx";

export const App = () => {
  const { pie } = useContext(AppContext);
  const user = useContext(AuthContext);
  user.then(({ userData }) => console.log(userData));
  return (
    <Router>
      {/* @Jason, put this logic into a navbar at some point */}
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">About</Link>
          </li>
          <li>
            <Link to="/clubs">Clubs</Link>
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
          <Route path="/clubs">
            <BookClub />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
