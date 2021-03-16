import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPriorities,
  fetchStates,
  addTicket,
  updateTicket,
  setSelectedTicket,
} from "../redux/actions/actions";
import { API_END, API_START, TicketsDispatch } from "../redux/actions/types";
import { IState } from "../utils/interfaces";
import { RootState } from "../redux/reducers/index";

import ReactLoading from "react-loading";
import { Form, Row, Col } from "react-bootstrap";
import {
  MainContainer,
  RoundedInputText,
  RoundedDropDown,
  TitleText,
  RoundedTextArea,
  RoundedButton,
  CenterContainer,
  ErrorAlert,
} from "../components/common";
import { TicketAttachments } from "../components/Tickets";
import { TicketScreenInitialState } from "../utils/initialStates";

type acntionType = "add" | "edit" | "view";

interface IParams {
  id: string;
  action: acntionType;
}

const Ticket = () => {
  const globalState = useSelector((state: RootState): RootState => state);
  const [ticket, setTicket] = useState(TicketScreenInitialState.ticket);
  const { id, action }: IParams = useParams();
  const dispatch: TicketsDispatch = useDispatch();

  let editable: boolean = action === "edit";
  let view: boolean = action === "view";
  let add: boolean = action === "add";

  const getData = useCallback(() => {
    dispatch({ type: API_START, payload: null });
    dispatch(fetchPriorities()).then(() =>
      dispatch(fetchStates()).then(() => {
        dispatch({ type: API_END, payload: null });
        if (editable || view) {
          dispatch(setSelectedTicket(parseInt(id))).then(({ payload }) => {
            setTicket(payload);
          });
        } else {
          setTicket(TicketScreenInitialState.ticket);
        }
      })
    );
  }, [dispatch, editable, view]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;

    if (name === "state") {
      setTicket({
        ...ticket,
        state: {
          ...ticket.state,
          id: parseInt(value),
        },
      });
    } else if (name === "priority") {
      setTicket({
        ...ticket,
        priority: {
          ...ticket.priority,
          id: parseInt(value),
        },
      });
    } else {
      setTicket({
        ...ticket,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (add) {
      dispatch(
        addTicket({ ...ticket, user_id: globalState.auth.user.id })
      ).then(() => {});
    } else {
      dispatch(updateTicket({ ...ticket, user_id: globalState.auth.user.id })).then(() => {});
    }
  };

  return (
    <MainContainer>
      <TitleText title={add ? "Nuevo Ticket" : `Ticket #${id}`} />
      {!globalState.tickets.isLoading ? (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm={12} md={8}>
              <Form.Group controlId="forTicket">
                <RoundedInputText
                  title="Ticket"
                  name="name"
                  placeholder="Ticket"
                  value={ticket.name}
                  onChange={handleChange}
                  disabled={view}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={4}>
              <Form.Group controlId="forStatus">
                <RoundedDropDown
                  title="Estado"
                  name="state"
                  value={ticket.state.id}
                  options={globalState.tickets.states}
                  onChange={handleChange}
                  disabled={view}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={8}>
              <Form.Group controlId="forDescription">
                <RoundedTextArea
                  title="Contenido / Descripción"
                  name="description"
                  value={ticket.description}
                  placeholder="Contenido / Descripción del Ticket"
                  onChange={handleChange}
                  disabled={view}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={4}>
              <Form.Group controlId="forPriority">
                <RoundedDropDown
                  title="Prioridad"
                  name="priority"
                  value={ticket.priority.id}
                  options={globalState.tickets.priorities}
                  onChange={handleChange}
                  disabled={view}
                />
              </Form.Group>
              <Form.Group
                controlId="forPriority"
                className="d-flex mt-4 justify-content-center"
              >
                {editable || add ? (
                  <RoundedButton color="primary" type="submit">
                    {editable ? "Editar" : "Guardar"}
                  </RoundedButton>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
          {!editable ? (
            <TicketAttachments
              files={globalState.tickets.selectedTicket.attachments}
            />
          ) : null}
        </Form>
      ) : (
        <CenterContainer>
          <div>
            Cargando
            <ReactLoading type="cubes" color="#000" />
          </div>
        </CenterContainer>
      )}
      {globalState.tickets.error ? (
        <CenterContainer>
          <ErrorAlert message={globalState.tickets.message} />
        </CenterContainer>
      ) : null}
    </MainContainer>
  );
};

export default Ticket;
