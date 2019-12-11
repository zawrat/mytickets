import React from 'react';
import './App.css';
import TicketList from './TicketList'
import { tickets } from './tickets'

function App() {
  return (
    <div className="App">
      <TicketList tickets = { tickets }/>
    </div>
  );
}

export default App;
