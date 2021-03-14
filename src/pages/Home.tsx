import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickets } from "../redux/actions/actions";
import { IState } from "../utils/interfaces";
import { RootState } from "../redux/reducers/index";

import ReactLoading from "react-loading";
import { MainContainer, TitleText } from "../components/common";
import { TicketTable } from "../components/Tickets";

const Home = () => {
  const ticketsState = useSelector((state: RootState): IState => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <MainContainer>
      <TitleText title="Listado de Tickets" />
      {ticketsState.isLoading ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          Cargando tickets
          <ReactLoading type="cubes" color="#000" />
        </div>
      ) : (
        <TicketTable tickets={ticketsState.tickets} />
      )}
    </MainContainer>
  );
};

export default Home;
