import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainNavbar, ProtectedPage } from "./components/common";
import { Home, NotFound, Ticket, Login, MyTickets } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainNavbar />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <ProtectedPage exact path="/">
            <Home />
          </ProtectedPage>
          <ProtectedPage exact path="/ticket/me">
            <MyTickets />
          </ProtectedPage>
          <ProtectedPage exact path="/ticket/:action/:id?">
            <Ticket />
          </ProtectedPage>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
