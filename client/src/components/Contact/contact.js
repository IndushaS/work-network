import React, { Component } from 'react';
import './contact.css'

class Contact extends Component {
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

        <div class="dropdown">
            <button class="dropbtn">Contact</button>
            
            <div class="dropdown-content">
                {this.state.employees.map(employee => 
                    <div key={employee.ID}>
                        <a href="#">{employee.Email}</a>
                        <a href="#">{employee.PhoneNumber}</a>
                    </div>    

                )}
            </div>
        </div>

      );
    }
  }

  export default Contact;