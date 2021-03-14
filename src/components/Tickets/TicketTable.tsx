import React from "react";
import {Table} from "react-bootstrap";
import {TicketHeader, TicketRow} from '.';
import {ITicket} from '../../utils/interfaces';

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
          tickets.map((ticket:ITicket) => <TicketRow {...ticket} />)
        }
      </tbody>
    </Table>
  );
};

export default TicketTable
