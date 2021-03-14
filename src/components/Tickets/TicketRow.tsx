import React from 'react';
import {ITicket} from '../../utils/interfaces';

import {TicketActions} from '.';

interface ITicketRowProps {
  ticket:ITicket
}

const TicketRow = ({ticket}:ITicketRowProps) => {
    const {id,name, description,user,priority,status} = ticket;
    return (
        <tr>
          <td>{name}</td>
          <td style={{maxWidth:'200px'}}>{description}</td>
          <td>{user}</td>
          <td>{priority}</td>
          <td>{status}</td>
          <td> <TicketActions ticket={ticket} /> </td>
        </tr>
    )
}

export default TicketRow
