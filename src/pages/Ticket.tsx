import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPriorities, fetchStates } from "../redux/actions/actions";
import { TicketsDispatch } from "../redux/actions/types";
import { IState, ITicket } from "../utils/interfaces";
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
} from "../components/common";
import { TicketAttachments } from "../components/Tickets";

type acntionType = "add" | "edit" | "view";

interface IParams {
  id: string;
  action: acntionType;
}

const initialState: ITicket = {
  id: 0,
  name: "",
  description: "",
  user: {
    id:0,
    name:'',
    email:''
  },
  priority: {
    id:0,
    name:''
  },
  state: {
    id:0,
    name:''
  },
  attachments: [
  ],
  comments:[]
};

const Ticket = () => {
  const ticketState = useSelector((state: RootState): IState => state.tickets);
  const { id, action }: IParams = useParams();
  const dispatch: TicketsDispatch = useDispatch();

  let editable: boolean = action === "edit";
  let view: boolean = action === "view";
  let add: boolean = action === "add";

  const getSelects = useCallback(() => {
    setIsLoading(true);
    dispatch(fetchPriorities()).then(() =>
      dispatch(fetchStates()).then(() => {
        if (editable || view) {
          setTicket(ticketState.selectedTicket);
        }
        setIsLoading(false);
      })
    );
  }, [dispatch, editable, view]);

  const [ticket, setTicket] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getSelects();
  }, [getSelects]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let target = e.target;
    setTicket({
      ...ticket,
      [target.name]: target.value,
    });
  };

  return (
    <MainContainer>
      <TitleText title={`Ticket #${id}`} />
      {!isLoading ? (
        <Form>
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
                  name="status"
                  value={ticket.state.id}
                  options={ticketState.states}
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
                  options={ticketState.priorities}
                  onChange={handleChange}
                  disabled={view}
                />
              </Form.Group>
              <Form.Group
                controlId="forPriority"
                className="d-flex mt-4 justify-content-center"
              >
                {editable ? (
                  <RoundedButton color="primary">
                    {editable ? "Editar" : "Guardar"}
                  </RoundedButton>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
          {!editable ? (
            <TicketAttachments files={ticketState.selectedTicket.attachments} />
          ) : null}
        </Form>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          Cargando
          <ReactLoading type="cubes" color="#000" />
        </div>
      )}
    </MainContainer>
  );
};

export default Ticket;
