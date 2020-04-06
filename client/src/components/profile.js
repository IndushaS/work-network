import React, { Component } from 'react';
import './profile.css';
import Employees from './Employee/employees';
import Photo from './Photo/photo';
import Header from './mississauga.png';
import Skills from './Skills/skills'
import Contact from './Contact/contact'

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="Header">
            
              <Photo />
              <Employees />
              <h2>Developer | Management Engineering Intern</h2>
          </div>
        </div>

        <div className="Right">
          <Skills />
        </div>

      </div>
    );
  }
}

export default Profile;