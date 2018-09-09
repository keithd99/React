import React, { Component } from 'react';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';

import classes from './Person.css';
class Person extends Component {
    constructor(props) {
        super(props);
        console.log('Inside Person constructor', props);
        this.inputElement = React.createRef();

    }
    componentWillMount() {
        console.log('Inside Person Component WIll mount');
    }

    componentDidMount() {
        console.log('Inside Person Componen Did mount');
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        console.log('Next ISAUTHENTICATED', this.props.authenicated);
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I am authenticated</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        );
        /* return [
            <p key="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>,
            <p key="2">{this.props.children}</p>,
            <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        ]; */
    }
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
}
export default withClass(Person, classes.Person);