import React, { useState } from 'react';

const MemberForm = props => {
    const [member, setMember] = useState({name: '', email: '', role: ''});
    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value})
    }

    //creating our new member
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        //clears out the input values
        setMember({name: '', email: '', role: ''});
    }
    return(
        <form onSubmit={submitForm}>
            <label htmlFor='member-name'><strong>Name: </strong>
            <input id='member-name' type='text' name='name' onChange={handleChanges} value={member.name}></input></label>
            <label htmlFor='member-email'><strong>Email: </strong>
            <input id='member-email' type='text' name='email' onChange={handleChanges} value={member.email}></input></label>
            <label htmlFor='member-role'><strong>Role: </strong>
            <input id='member-role' type='text' name='role' onChange={handleChanges} value={member.role}></input></label>
            <button type='submit'>Add Member</button>
        </form>
    )
}

export default MemberForm;