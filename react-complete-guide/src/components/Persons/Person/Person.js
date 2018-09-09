import React, { Component } from 'react';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

import classes from './Person.css';
class Person extends Component {
    constructor(props) {
        super(props);
        console.log('Inside Person constructor', props);
    }
    componentWillMount() {
        console.log('Inside Person Component WIll mount');
    }

    componentDidMount() {
        console.log('Inside Person Componen Did mount');
    }
    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
        /* return [
            <p key="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>,
            <p key="2">{this.props.children}</p>,
            <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        ]; */
    }
}

export default withClass(Person, classes.Person);