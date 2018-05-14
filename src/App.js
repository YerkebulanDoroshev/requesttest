import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import UserForm from './components/UserForm/UserForm'

class App extends Component {

  getUser = (e) =>{
    e.preventDefault();
    const user = e.target.elements.username.value;
    console.log(user)
  }

  render() {
    return (
      <UserForm getUser={this.getUser} />
    );
  }
}

export default App;
