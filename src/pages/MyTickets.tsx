import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTicketsByUser } from "../redux/actions/actions";
import { RootState } from "../redux/reducers/index";

import ReactLoading from "react-loading";
import { MainContainer, TitleText } from "../components/common";
import { TicketTable } from "../components/Tickets";

const MyTickets = () => {
  const globalState = useSelector((state: RootState):RootState => state);
  const dispatch = useDispatch();

  const getTickets = useCallback(() => {
    dispatch(getTicketsByUser(globalState.auth.user.id));
  }, [dispatch]);

  useEffect(() => {
    getTickets();
  }, [getTickets]);

  return (
    <MainContainer>
      <TitleText title="Mis Tickets" />
      {globalState.tickets.isLoading ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          Cargando tickets
          <ReactLoading type="cubes" color="#000" />
        </div>
      ) : (
        <TicketTable tickets={globalState.tickets.tickets} />
      )}
    </MainContainer>
  );
};

export default MyTickets;
