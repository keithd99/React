import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: '27' },
            { name: 'Manu', age: '36' },
            { name: 'Keith', age: '43' }
        ]
    }

    switchNameHandler = (newName) => {
        //console.log('Function hit');
        //DON't DO THIS .... this.state.persons[0].name = 'Maximillian';
        this.setState({
            persons: [
                { name: newName, age: '27' },
                { name: 'Manu', age: '38' },
                { name: 'Keith', age: '43' }
            ]
        });
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: '27' },
                { name: event.target.value, age: '38' },
                { name: 'Keith', age: '43' }
            ]
        });
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi I am a React App</h1>
                <p>This is really working</p>
                <button
                    style={style}
                    onClick={this.switchNameHandler}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={() => this.switchNameHandler('Maximillian')}
                    changed={this.nameChangedHandler}
                >My hobbies: Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    click={this.switchNameHandler.bind(this, 'Max!')}
                />
            </div>
        );
        //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hi I am a React App!!'));
    }
}

export default App;
