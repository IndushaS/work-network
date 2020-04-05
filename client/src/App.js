import React, { Component } from 'react';
import fire from '/Users/hamza/Desktop/work-network/client/src/config/fire.js';
import Login from "./components/Login";
import Home from "./components/Home";


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
      <div className="App">
        { this.state.user ? ( <Home /> ) : ( <Login /> ) }
      </div>
    );
  }
}

export default App;