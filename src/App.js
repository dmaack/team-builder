import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [team, setTeam] = useState();
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <TeamForm />
      <Team />
    </div>
  );
}

export default App;
