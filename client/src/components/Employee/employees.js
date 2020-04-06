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
      <div >
        <ul>
        {this.state.employees.map(employee => 
          <li className="User" key={employee.ID}>
              <h1 >{employee.Name} | {employee.Role}</h1>
              <h2>Management Engineering Intern</h2>
          </li>
        )}
        </ul>
      </div>
    );
  }
}

export default Employees;