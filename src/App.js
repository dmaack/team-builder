import React, { useState } from 'react';
import './App.css';
import MemberForm from './components/MemberForm';
import Member from './components/Member';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Dominique',
      email: 'dominiquemaack@gmail.com',
      role: 'student'
    }
  ]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMembers([...members, newMember])
  }
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <MemberForm addNewMember={addNewMember}/>
      <Member members={members}/>
    </div>
  );
}

export default App;
