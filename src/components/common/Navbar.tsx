import React from "react";
import styled from "styled-components";

import { Navbar, Badge } from "react-bootstrap";
import { RoundedButton, StyledLink } from "../common";

const MyNavbar = styled(Navbar)`
  background-color: ${(props) => props.theme.primary};
  & a {
    color: #fff !important;
  }
`;

const MainNavbar = () => {
  return (
    <React.Fragment>
      <MyNavbar>
        <StyledLink className="mr-4" to="/">
          <h4>
            <Badge variant="secondary">Tickets App</Badge>
          </h4>
        </StyledLink>

        <MyNavbar.Toggle aria-controls="basic-navbar-nav" />
        <MyNavbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <StyledLink to="/"> Tickets </StyledLink>
          <RoundedButton>Cerrar Sesión</RoundedButton>
        </MyNavbar.Collapse>
      </MyNavbar>
    </React.Fragment>
  );
};

export default MainNavbar;
