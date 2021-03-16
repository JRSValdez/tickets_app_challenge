import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickets } from "../redux/actions/actions";
import { IState } from "../utils/interfaces";
import { RootState } from "../redux/reducers/index";

import ReactLoading from "react-loading";
import {
  CenterContainer,
  MainContainer,
  TitleText,
} from "../components/common";
import { TicketTable } from "../components/Tickets";

const Home = () => {
  const ticketsState = useSelector((state: RootState): IState => state.tickets);
  const dispatch = useDispatch();

  const getTickets = useCallback(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  useEffect(() => {
    getTickets();
  }, [getTickets]);

  return (
    <MainContainer>
      <TitleText title="Listado de Tickets" />
      {ticketsState.isLoading ? (
        <CenterContainer column>
          <React.Fragment>
            Cargando tickets
            <ReactLoading type="cubes" color="#000" />
          </React.Fragment>
        </CenterContainer>
      ) : (
        <TicketTable tickets={ticketsState.tickets} />
      )}
    </MainContainer>
  );
};

export default Home;
