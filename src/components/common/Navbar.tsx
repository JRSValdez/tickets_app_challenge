import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { Navbar } from "react-bootstrap";
import {RoundedButton, StyledLink} from '../common';

const MyNavbar = styled(Navbar)`
  background-color: ${props => props.theme.primary};
  & a {
    color: #fff !important;
  }
`;

const MainNavbar = () => {
  return (
    <React.Fragment>
      <MyNavbar>
        <MyNavbar.Brand href="#">Tickets App</MyNavbar.Brand>
        <MyNavbar.Toggle aria-controls="basic-navbar-nav" />
        <MyNavbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
          <StyledLink to='/'> Tickets </StyledLink>
          <RoundedButton>
            Cerrar Sesión
          </RoundedButton>
        </MyNavbar.Collapse>
      </MyNavbar>
    </React.Fragment>
  );
};

export default MainNavbar;
