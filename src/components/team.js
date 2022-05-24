import React from 'react';
import TeamMember from './teammember'


export default function Team (props) {
    const { team, edit } = props;

    return (
        <div className='team'>
        {team.map((mem, i) => {
                return <div className='team-member' key={i}>
                <TeamMember name={mem.name} role={mem.role} email={mem.email}/>
                <button onClick={edit}>Edit</button>
                </div>
        })}
        </div>
    )
}