import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
    state = {
        persons: [
            { id: '1', name: 'Max', age: '27' },
            { id: '2', name: 'Manu', age: '36' },
            { id: '3', name: 'Keith', age: '43' }
        ],
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        //Spread operator is used below to get a copy of the original and not the oiginal
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice(); or ................
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = 
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />;
            
        }



        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons} 
                    clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
        //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hi I am a React App!!'));
    }
}

export default App;
