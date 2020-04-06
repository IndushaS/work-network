import React, { Component } from 'react';
import Gantt from './Gantt';
import './group.css';
import Forum from './forum';
import Team from './Team';

const data = {
  data: [
      { id: 1, text: 'Integrate new API', start_date: '2020-04-04', duration: 3, progress: 0.6 },
      { id: 2, text: 'Create Routing', start_date: '2020-04-05', duration: 3, progress: 0.4 }
  ],
  links: [
      { id: 1, source: 1, target: 2, type: '0' }
  ]
};

class Group extends Component {

  render() {
    return (
      <div className="parent">
          <div className="title"><h1>Backend Team</h1></div>
        <div className="forum">
           <Forum/>
        </div>
        <div className="project"> 
            <h3>Projects</h3>
            <Gantt tasks={data}/>
            <div>
            <Team/>
        </div>
        </div>
        
           
            
             
      </div>
   
    );
  }
}

export default Group;