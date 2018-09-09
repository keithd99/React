import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';


class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Inside [App.js] constructor', props);
        this.state = {
            persons: [
                { id: '1', name: 'Max', age: '27' },
                { id: '2', name: 'Manu', age: '36' },
                { id: '3', name: 'Keith', age: '43' }
            ],
            showPersons: false
        }
    }

    componentWillMount() {
        console.log('Inside App.js componentwillmount')
    }

    componentDidMount() {
        console.log('Inside Component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE App.js] Inside component will receive props', nextProps);
    }

    //shouldComponentUpdate(nextProps, nextState){
    //    console.log('[Update App.js] Should component update ', nextProps, nextState);
    //    return true;
    //}

    componentWillUpdate(nextProps, nextState) {
        console.log('[Update App.js] component will update', nextProps, nextState);
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
        console.log('App.js inside Render');
        let persons = null;
        if (this.state.showPersons) {
            persons =
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />;

        }
        return (
            <Aux>
                <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler} />
                {persons}
            </Aux>
        );
        //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hi I am a React App!!'));
    }
}

export default withClass(App, classes.App);
