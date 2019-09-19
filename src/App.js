import React, { useState } from 'react';
import './App.scss';
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
      <header>
        <h1>Team Builder</h1>
      </header>  
     
     <div className='main-content'> 
      <Member className='member-card' members={members}/>
      
     </div>
     <MemberForm className='add-member' addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
