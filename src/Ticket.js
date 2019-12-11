import React from 'react';

function Ticket( {data} ) {
  return (
    <div className='bg-light-blue dib grow br3 pa2 ma3 bw2 shadow-5 tc'>
        <img alt = '' src={ data.imageFront }></img>
    </div>
  );
}

export default Ticket;
