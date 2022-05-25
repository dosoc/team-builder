import React from 'react'

export default function TeamMember(props) {
    const { name, role, email, edit, remove } = props;

    return (
            <div>
                <h2>Name: {name}</h2>
                <p>Role: {role}</p>
                <p>Email: {email}</p>
                <button onClick={()=>edit(name)}>Edit</button>
                <button onClick={()=>remove(name)}>Remove</button>
            </div>
    )

}