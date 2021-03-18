import React from "react";
import Nav from "./components/Nav.jsx";
import Login from "./components/Login.jsx";
import Welcome from "./components/Welcome";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
