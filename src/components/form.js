import React from 'react';



export default function Form(props) {
    const {values, update, submit, clear} = props

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
                <input 
                type="text"
                name="role"
                value={values.role}
                onChange={onChange}
                placeholder="Role..."
                />
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