import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { IAuth } from "../../utils/interfaces";
import { RootState } from "../../redux/reducers/index";
import { logOuthUser } from "../../redux/actions/auth";

import { Navbar, Badge, NavDropdown } from "react-bootstrap";
import { CenterContainer, RoundedButton, StyledLink } from "../common";

const MyNavbar = styled(Navbar)`
  background-color: ${(props) => props.theme.primary};
  & a {
    color: #fff;
  }
`;

const MainNavbar = () => {
  const authState = useSelector((state: RootState): IAuth => state.auth);
  const dispatch = useDispatch();

  const handeLogOut = () => {
    dispatch(logOuthUser());
    localStorage.setItem("accessToken", "");
  };

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
          {authState.isLoggedIn ? (
            <NavDropdown title="Tickets" id="collasible-nav-dropdown">
              <CenterContainer>
                <StyledLink color="secondary" to="/">
                  Tickets
                </StyledLink>
              </CenterContainer>
              <NavDropdown.Divider />
              <CenterContainer>
                <StyledLink color="secondary" to="/ticket/add">
                  Nuevo Ticket
                </StyledLink>
              </CenterContainer>
              <NavDropdown.Divider />
              <CenterContainer>
                <StyledLink color="secondary" to="/ticket/me">
                  Mis Tickets
                </StyledLink>
              </CenterContainer>
            </NavDropdown>
          ) : null}

          {authState.isLoggedIn ? (
            <RoundedButton onClick={() => handeLogOut()}>
              Cerrar Sesión
            </RoundedButton>
          ) : null}
        </MyNavbar.Collapse>
      </MyNavbar>
    </React.Fragment>
  );
};

export default MainNavbar;
