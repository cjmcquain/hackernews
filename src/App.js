import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = "Welcome to the Road to learn React";
    var user = {
      name: 'Charles McQuain',
      age: 31
    }

    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <p>{user.name}</p>
        <p>{user.age}</p>
      </div>
    );
  }
}

export default App;
