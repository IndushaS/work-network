import React from 'react';
import fire from '../config/fire.js';

class Home extends React.Component {



  logout() {
    fire.auth().signOut();
  }
 


  render() {
    return (
      <div style={{textAlign: 'center'}}>
      <a onClick = {this.logout}>Logout</a>
      </div>
    )
  }


}




export default Home;