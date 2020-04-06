import React, { Component } from 'react';
import fire from "./config/fire.js";
import './App.css';
import Login from './components/Login';
import Main from './components/main';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }
  

  render() {
    return (
     
     <div className="Web">
        { this.state.user ? ( <Main /> ) : ( <Login /> ) }
        
      </div>
    );
  }
}

export default App;