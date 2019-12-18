import React from 'react';

const Person = props => {
    return (
        <div className="person-list">
            {props.persons.map(person => (
                <div className="person">
                    <h2>{person.name}</h2>
                    <h3>{person.role}</h3>
                    <p>{person.email}</p>
                    </div>
            ))}
        </div>

    );
};

export default Person