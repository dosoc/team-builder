import React from 'react'

export default function TeamMember(props) {
    const { name, role, email } = props;

    return (
            <div className='team-member'>
                <h2>{name}</h2>
                <p>{role}</p>
                <p>{email}</p>
            </div>
    )

}