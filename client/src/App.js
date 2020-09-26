import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import AppNav from "./components/AppNav";

import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import AppFrame from "./pages/AppFrame";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <AppNav />
        <Switch>
          <Route exact path="/books">
            <AppFrame />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route path="/NoMatch">
            <NoMatch />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
