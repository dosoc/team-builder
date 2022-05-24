import React from 'react'

export default function TeamMember(props) {
    const { name, role, email } = props;

    return (
            <div>
                <h2>Name: {name}</h2>
                <p>Role: {role}</p>
                <p>Email: {email}</p>
            </div>
    )

}