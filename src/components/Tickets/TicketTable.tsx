import React from "react";
import {ITicket} from '../../utils/interfaces';

import {Table} from "react-bootstrap";
import {TicketHeader, TicketRow} from '.';

interface ITicketTableProps {
  tickets:ITicket[]
}

const TicketTable = (props:ITicketTableProps) => {
  const {tickets} = props;

  return (
    <Table striped bordered hover responsive size="sm" >
      <thead>
        <TicketHeader />
      </thead>
      <tbody>
        {
          tickets.map((ticket:ITicket) => <TicketRow key={ticket.id} ticket={ticket} />)
        }
      </tbody>
    </Table>
  );
};

export default TicketTable
