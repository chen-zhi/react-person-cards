import React from 'react';

const person = (props) => {
    return <p onClick={props.click}>I am {props.name} and {props.age} years old!</p>
};

export default person;