import React, { useState } from 'react';
import './App.css';
import Form from "./Form"
import Person from "./Person"

function App() {
  const [persons, setPerson] = useState([{

    name: "Jerome",
    email: "jeromeisawesome@jaymo.com",
    role: "Nurse"

  },
  {
    name: "Lupe",
    email: "guadalupe@gmail.com",
    role: "Emergency Tech"

  },

  {
    name: "Cariza",
    email: "chorizo@gmail.com",
    role: "Doctor"

  }

  ]);

  const addNewPerson = person => {
    const newPerson = {
      name: person.name,
      email: person.email,
      role: person.role
    };
    setPerson([...persons, newPerson]);
  };

  return (
    <div className="App">
      <h1>Team Member</h1>
      <Form addNewPerson={addNewPerson}/>
      <Person persons={persons}/>

    </div>
  );
}

export default App;
