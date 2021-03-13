import React, { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickets } from "../redux/actions/actions";
import { RoundedButton, MainContainer, MainNavbar } from "../components/common";
import { ITheme, IState } from "../utils/interfaces";

interface IHomeProps {
  children?: ITheme;
}

const Home = (props: IHomeProps) => {
  const ticketsState = useSelector((state: IState) => state.tickets);
  const dispatch = useDispatch();

  const theme = useContext(ThemeContext);

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <React.Fragment>
      <MainNavbar />
      <MainContainer>
      </MainContainer>
    </React.Fragment>
  );
};

export default Home;
