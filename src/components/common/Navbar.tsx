import React from "react";
import styled from 'styled-components';
import { Navbar,Nav } from "react-bootstrap";
import {RoundedButton} from '../common';
import {ITheme} from '../../utils/interfaces';

const MyNavbar = styled(Navbar)`
  background-color: ${props => props.theme.primary};
  & a {
    color: #fff !important;
  }
`;

const MainNavbar = () => {
  return (
    <React.Fragment>
      <MyNavbar className='justify-content-between'>
        <MyNavbar.Brand href="#">Tickets App</MyNavbar.Brand>
        <MyNavbar.Toggle aria-controls="basic-navbar-nav" />
        <MyNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Tickets</Nav.Link>
          </Nav>
          <RoundedButton>
            Cerrar Sesión
          </RoundedButton>
        </MyNavbar.Collapse>
      </MyNavbar>
    </React.Fragment>
  );
};

export default MainNavbar;
