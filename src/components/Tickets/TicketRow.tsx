import React from 'react';
import {ITicket} from '../../utils/interfaces';

import {TicketActions} from '.';

const TicketRow = (props:ITicket) => {
    const {id,name, description,user,priority,status} = props;
    return (
        <tr>
          <td>{name}</td>
          <td style={{maxWidth:'200px'}}>{description}</td>
          <td>{user}</td>
          <td>{priority}</td>
          <td>{status}</td>
          <td> <TicketActions ticketId={id} /> </td>
        </tr>
    )
}

export default TicketRow
