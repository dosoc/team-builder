import React, { useState, useEffect } from 'react';



export default function Form(props) {
    const {values, update, submit, clear, memberToEdit} = props
    const [member, setMember] = useState(null)

    useEffect(()=>{
        setMember(memberToEdit)
    },[memberToEdit])

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form'onSubmit={onSubmit}>
            <label>Name
                <input 
                type="text"
                name="name"
                value={values.name}
                onChange={onChange}
                placeholder="Name..."
                />
            </label>
            <label>Role
                <select value={values.role} name="role" onChange={onChange}>
                    <option value={""}>-- Role --</option>
                    <option value={"Point Guard"}>Point Guard</option>
                    <option value={"Shooting Guard"}>Shooting Guard</option>
                    <option value={"Small Forward"}>Small Forward</option>
                    <option value={"Power Forward"}>Power Forward</option>
                    <option value={"Center"}>Center</option>
                </select>
            </label>
            <label>Email
                <input 
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                placeholder="Email..."
                />
            </label>
            <div className='submit'>
                <button  disabled={!values.name || !values.role || !values.email}>Add to Team</button>
            </div>
            <div className='clear'>
                <button onClick={clear}>Clear Team</button>
            </div>
        </form>
    )
}