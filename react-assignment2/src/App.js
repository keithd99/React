import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    characterCount: '0',
    characters: []
  };

  inputChangedHandler = (event) => {
    //const characterCount = [...this.state.characterCount];
    let characterCount = event.target.value.length;
    this.setState({ characterCount: characterCount });
    this.setState({ characters: event.target.value.split('') });
  };

  deleteCharacterHandler = (index) => {
    const characters = [...this.state.characters];
    characters.splice(index, 1);
    this.setState(
      {
        characterCount: characters.length,
        characters: characters
      });
  }

  render() {
    const charList = this.state.characters.map((char, index) => {
      return <CharComponent
        character={char}
        key={index}
        clicked={() => this.deleteCharacterHandler(index)}
      />
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.characters.join('')}
        />
        <p>The character count is currently:{this.state.characterCount}</p>
        <ValidationComponent textLength={this.state.characterCount} />
        {charList}
      </div>
    );
  }
}

export default App;
