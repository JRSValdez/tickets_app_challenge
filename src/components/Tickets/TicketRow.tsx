import React from 'react';
import {ITicket} from '../../utils/interfaces';

import {TicketActions} from '.';

interface ITicketRowProps {
  ticket:ITicket
}

const TicketRow = ({ticket}:ITicketRowProps) => {
    const {name, description,user,priority,state} = ticket;
    return (
        <tr>
          <td>{name}</td>
          <td style={{maxWidth:'200px'}}>{description}</td>
          <td>{user.name}</td>
          <td>{priority.name}</td>
          <td>{state.name}</td>
          <td> <TicketActions ticket={ticket} /> </td>
        </tr>
    )
}

export default TicketRow
