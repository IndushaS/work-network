import React from 'react';
import fire from '../config/fire.js';
import './Login.css';

class Login extends React.Component {

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  render() {
    return (

      <div class="box">
        <h1>Welcome to WorkNet</h1>
    
        <input class="email" id="email" placeholder="Enter Email.." type="text" />
   
        <input class="email" id="password" placeholder="Enter Password.." type="password" />
      
      <a href="#" onClick={this.login}><div class="btn">Sign In</div></a>

      <a href="#" onClick={this.signUp}><div id="btn2">Sign Up</div></a>    
      </div>
      
    )
  }
}

export default Login;