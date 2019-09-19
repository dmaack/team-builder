import React from 'react';

const Member = props => {

    return(
        <div className='member-cards'>
           {props.members.map(member => (
              
                   <div className='member' key={member.id}>
                       <h2>{member.name}</h2>
                       <p><strong>Email: </strong>{member.email}</p>
                       <p><strong>Role: </strong>{member.role}</p>
                   </div>
               
           ))} 
        </div>
    )
}

export default Member;