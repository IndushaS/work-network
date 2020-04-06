import React, { Component } from 'react';
import './Team.css'

class Team extends Component {
  constructor() {
    super();
    this.state = {
      Group: []
    };
  }

  componentDidMount() {
    fetch('/api/employees') 
      .then(res => res.json())
      .then(Group => this.setState({Group}, () => console.log('employees fetched...', Group)));
  }

  render() {
    return (
        
      <div>
        <h3>Group Members</h3>
        <table>
        <tr>
        <th>Contact Info</th>
       
    
        </tr>

        
        {this.state.Group.map(Group => <div> 
           
            <tr key={Group.Employee_ID}>
                <td>{Group.Name}</td>
                <td>{Group.Role}</td>
                <td>{Group.Email}</td>
            </tr>
             

            
        </div>
          
        )}
        
        
        
        </table>
        

      
      </div>
    );
  }
}

export default Team;