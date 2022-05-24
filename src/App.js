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

  const [ memberToEdit, setMemberToEdit] = useState({})

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }
  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      role: formValues.role.trim(),
      email: formValues.email
    };

    if (!newTeamMember.name || !newTeamMember.role) {
      setFormErrors("Please enter a Name and Role for New Team Member")
      return;
    }
    setTeam([...team, newTeamMember]);
    setFormValues(initialTeam);
    setFormErrors("")
  }
  const clearTeam = ()=> {
    setTeam([]);
    setFormErrors("")
  }

  const editTeamMember = evt => {
    console.log(evt)
  }


  return (
    <div className='container'>
      <h1>The Dream Team</h1>
      {formErrors && <h2 className='error'>{formErrors}</h2>}
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
        clear={clearTeam}
      />
      <Team team={team} edit={editTeamMember}/>
    </div>
    
  );
}

export default App;
