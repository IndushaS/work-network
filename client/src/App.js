import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employees from './components/employees';
import Forum from './components/forum';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Forum/>
      </div>
    );
  }
}

export default App;