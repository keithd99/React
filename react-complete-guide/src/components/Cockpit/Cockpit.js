import React from 'react';
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux2';

const cockpit = (props) => {
    const assignedClasses = [];
    let buttonClass = classes.Button;

    if (props.showPersons) {
        buttonClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                className={buttonClass}
                onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log in</button>    
        </Aux>
    );
};

export default cockpit;