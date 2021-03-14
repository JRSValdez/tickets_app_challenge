import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPriorities,
  fetchStates,
  setSelectedTicket,
} from "../redux/actions/actions";
import { IState, ITicket } from "../utils/interfaces";
import { RootState } from "../redux/reducers/index";

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
import ReactLoading from "react-loading";

type acntionType = "add" | "edit" | "view";

interface IParams {
  id: string;
  action: acntionType;
}

const initialState: ITicket = {
  id: 0,
  name: "",
  description: "",
  priority: 0,
  user: "",
  status: 0,
  attachments: [
    {
      id: 0,
      type: "",
      download: "",
    },
  ],
};

const Ticket = () => {
  const ticketState = useSelector((state: RootState): IState => state.tickets);
  const { id, action }: IParams = useParams();
  const dispatch = useDispatch();

  let editable: boolean = action === "edit";
  let view: boolean = action === "view";

  const [ticket, setTicket] = useState(initialState);

  useEffect(() => {
    dispatch(fetchPriorities());
    dispatch(fetchStates());

    if (editable || view) {
      setTicket(ticketState.selectedTicket);
    }
  }, []);

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
      {ticketState.selectedTicket.id > 0 ? (
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
                  value={ticket.status}
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
                  value={ticket.priority}
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
          {!editable ? <TicketAttachments /> : null}
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
