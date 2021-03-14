import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import {
  MainContainer,
  RoundedInputText,
  RoundedDropDown,
  TitleText,
  RoundedTextArea,
} from "../components/common";
import { TicketAttachments } from "../components/Tickets";

interface IParams {
  id: string;
}

const Ticket = () => {
  const { id }: IParams = useParams();
  return (
    <MainContainer>
      <TitleText title={`Ticket #${id}`} />
        <Form>
          <Row>
            <Col sm={12} md={8}>
              <Form.Group controlId="forTicket">
                <RoundedInputText
                  title="Ticket"
                  name="name"
                  placeholder="Ticket"
                  value=""
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={4}>
              <Form.Group controlId="forStatus">
                <RoundedDropDown
                  title="Estado"
                  name="status"
                  value={2}
                  options={[{id:1,name:'Open'},{id:2,name:'Closed'}]}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={8}>
              <Form.Group controlId="forDescription">
                <RoundedTextArea
                  title="Contenido / Descripción"
                  name="name"
                  value=""
                  placeholder='test'
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={4}>
              <Form.Group controlId="forPriority">
                <RoundedDropDown
                  title="Prioridad"
                  name="priority"
                  value={2}
                  options={[{id:1,name:'Alta'},{id:2,name:'Baja'}]}
                />
              </Form.Group>
            </Col>
          </Row>
          <TicketAttachments />
        </Form>
    </MainContainer>
  );
};
<Form>
  <Form.Group controlId="formBasicEmail">
    <RoundedInputText
      title="Ticket"
      name="name"
      placeholder="Ticket"
      value=""
    />
  </Form.Group>
</Form>;

export default Ticket;
