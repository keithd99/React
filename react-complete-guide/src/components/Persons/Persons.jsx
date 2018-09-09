import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    componentWillMount(){
        console.log('Inside Persons Component WIll mount');
    }

    componentDidMount(){
        console.log('Inside Persons Componen Did mount');
    }
    componentWillReceiveProps(nextProps){
        console.log('[UPDATE Persons.js] Inside component will receive props', nextProps);
    }

    //shouldComponentUpdate(nextProps, nextState){
    //    console.log('[Update Persons.js] Should component update ', nextProps, nextState);
     //   return nextProps.Persons !== this.props.persons;
    //}

    componentWillUpdate(nextProps, nextState){
        console.log('[Update Persons.js] component will update', nextProps, nextState);
    }


    componentDidUpdate(){
        console.log('Component Did mount');
    }
    render() {
        console.log('Inside Persons Render');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)} />)
        });
    }
}

export default Persons;