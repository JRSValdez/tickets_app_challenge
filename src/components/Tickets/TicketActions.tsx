import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedTicket } from "../../redux/actions/actions";

import { FaEdit, FaRegEye } from "react-icons/fa";
import { ITicket } from "../../utils/interfaces";

const ICON_SIZE = 25;

const IconsContainer = styled.div`
  & svg {
    cursor: pointer;
  }
`;

interface ITicketActionsProps {
    ticket:ITicket
}

const TicketActions = ({ticket}:ITicketActionsProps ) => {
  const dispacth = useDispatch();

  const { id } = ticket;

  const editPath = `/ticket/edit/${id}`;
  const viewPath = `/ticket/view/${id}`;

  let history = useHistory();

  const editClick = () => {
    dispacth(setSelectedTicket(ticket));
    history.push(editPath);
  };

  const viewClick = () => {
    dispacth(setSelectedTicket(ticket));
    history.push(viewPath);
  };

  return (
    <IconsContainer className="d-flex flex-row justify-content-around">
      <FaEdit size={ICON_SIZE} title="Editar Ticket" onClick={editClick} />
      <FaRegEye size={ICON_SIZE} title="Ver Ticket" onClick={viewClick} />
    </IconsContainer>
  );
};

export default TicketActions;
