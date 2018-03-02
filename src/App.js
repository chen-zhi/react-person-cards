import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jay', age: 28 },
      { name: 'Max', age: 20 },
      { name: 'Zhi', age: 18 }
    ],
    otherState: 'value'
  }

  switchNameHander = () => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: 'Jacy', age: 28 },
        { name: 'Jone', age: 20 },
        { name: 'Steve', age: 18 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.switchNameHander}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person click={this.switchNameHander} name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
