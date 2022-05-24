import React from 'react';
import TeamMember from './teammember'


export default function Team (props) {
    const { team } = props;

    return (
        <div className='team'>
        {team.map((mem, i) => {
                return <TeamMember name={mem.name} role={mem.role} email={mem.email} key={i}/>
        })}
        </div>
    )
}