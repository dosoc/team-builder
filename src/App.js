import React, { useState } from 'react'
import './App.css';
import Team from './components/team'
import Form from './components/form'


const initialTeam ={
    name: "",
    role: "",
    email: ""
  }

function App() {
  const [ team, setTeam ] = useState([]);

  const [ formValues, setFormValues] = useState(initialTeam);

  const [ formErrors, setFormErrors] = useState("")

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }
  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name,
      role: formValues.role,
      email: formValues.email
    };
    setTeam([...team, newTeamMember]);
    setFormValues(initialTeam);
  }
  const clearTeam = ()=> {
    setTeam([]);
  }


  return (
    <div className='container'>
      <h1>The Dream Team</h1>
      {formErrors && <h2>{formErrors}</h2>}
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
        clear={clearTeam}
      />
      <Team team={team}/>
    </div>
    
  );
}

export default App;
