import React from "react";
import styled from "styled-components";
import { IAuth } from "../../utils/interfaces";
import { RootState } from "../../redux/reducers/index";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { FaEdit, FaRegEye } from "react-icons/fa";
import { ITicket } from "../../utils/interfaces";

const ICON_SIZE = 25;

const IconsContainer = styled.div`
  & svg {
    cursor: pointer;
  }
`;

interface ITicketActionsProps {
  ticket: ITicket;
}

const TicketActions = ({ ticket }: ITicketActionsProps) => {
  const authState = useSelector((state: RootState): IAuth => state.auth);
  const { id } = ticket;

  const isAdmin = authState.user.is_admin;

  const editPath = `/ticket/edit/${id}`;
  const viewPath = `/ticket/view/${id}`;

  let history = useHistory();

  const editClick = () => {
    history.push(editPath);
  };

  const viewClick = () => {
    history.push(viewPath);
  };

  return (
    <IconsContainer className="d-flex flex-row justify-content-around">
      {isAdmin ? (
        <FaEdit size={ICON_SIZE} title="Editar Ticket" onClick={editClick} />
      ) : null}
      <FaRegEye size={ICON_SIZE} title="Ver Ticket" onClick={viewClick} />
    </IconsContainer>
  );
};

export default TicketActions;
