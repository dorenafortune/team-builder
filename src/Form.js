import React, {useState} from 'react';


const Form = props => {
    const [person, setPerson] = useState({

        name: "",
        email: "",
        role: ""

    });

    const handleChanges = event => {
        setPerson({
            ...person,
            [event.target.name]: event.target.value
        });
        console.log(event.target.name);
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewPerson(person);
        setPerson({name: "", email: "", role: ""})
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name:</label>
            <input
            id="name"
            type="text"
            placeholder="Enter name"
            onChange={handleChanges}
            name="name"
            value={person.name}
            />
            <label htmlFor="email">Email:</label>
            <input
            id="email"
            type="text"
            placeholder="Enter email"
            onChange={handleChanges}
            name="email"
            value={person.email}
            />
             <label htmlFor="role">Role:</label>
            <input
            id="role"
            type="text"
            placeholder="Enter role"
            onChange={handleChanges}
            name="role"
            value={person.email}
            />
            <button type="submit">Add Member</button>
        </form>

    );
}

export default Form;