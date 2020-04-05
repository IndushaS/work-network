import React from 'react';
import fire from '/Users/hamza/Desktop/work-network/client/src/config/fire.js';

class Home extends React.Component {



  logout() {
    fire.auth().signOut();
  }
 


  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>You Are Logged In</h1>

        <button onClick = {this.logout}>Logout</button>


   
          <p>ID: {fire.auth().currentUser.uid}</p>

   
       


      </div>
    )
  }


}




export default Home;