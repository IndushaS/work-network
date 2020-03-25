import React, { Component } from 'react';
import './employees.css'

class Employees extends Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    fetch('/api/hello')
      .then(res => res.json())
      .then(employees => this.setState({employees}, () => console.log('employees fetched...', employees)));
  }

  render() {
    return (
      <div>
        <h2>Employees List</h2>
        <ul>
        {this.state.employees.map(employee => 
          <li key={employee.ID}>
              <p>ID: {employee.ID} , Name: {employee.Name} , Role: {employee.Role}</p></li>
        )}
        </ul>
      </div>
    );
  }
}

export default Employees;