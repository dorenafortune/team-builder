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
            <label htmlFor="name">Name</label>
            <input
            id="name"
            type="text"
            placeholder="Name"
            onChange={handleChanges}
            name="name"
            value={person.name}
            />
            <label htmlFor="email">Email</label>
            <input
            id="email"
            type="text"
            placeholder="Email"
            onChange={handleChanges}
            name="email"
            value={person.email}
            />
             <label htmlFor="role">Role</label>
            <input
            id="role"
            type="text"
            placeholder="Role"
            onChange={handleChanges}
            name="role"
            value={person.email}
            />
        </form>

    );
}

export default Form;