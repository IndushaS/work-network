import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employees from './components/employees';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Employees/>
      </div>
    );
  }
}

export default App;