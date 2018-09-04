import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

    state = {
        userName: 'keithd99State'
    };

    usernameChangedHandler = (event) => {
        this.setState({
            userName: event.target.value
        }
        );
    };
    render() {
        const style = {
            backgroundColor: 'red',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <UserInput change={this.usernameChangedHandler} userName={this.state.userName} style={style} />
                <UserOutput userName={this.state.userName} />
                <UserOutput />
            </div>
        );
    }
}

export default App;
