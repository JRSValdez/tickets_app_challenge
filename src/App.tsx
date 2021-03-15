import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { MainNavbar } from "./components/common";
import { Home, NotFound, Ticket, Login } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainNavbar />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/ticket/:action/:id">
            <Ticket />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
