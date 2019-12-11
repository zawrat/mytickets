import React from 'react';
import Ticket from './Ticket'

function TicketList( {tickets} ) {
  return (
    <div>
        <h1>This is ticket list</h1>

        {
            tickets.map(ticket => {
                return <Ticket data = { ticket }/>;
            })
        }
        
    </div>
  );
}

export default TicketList;
