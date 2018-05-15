import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import UserForm from './components/UserForm/UserForm'

class App extends Component {


  state = {
    repos:null,
  }
  getUser = (e) =>{
    e.preventDefault();
    const user = e.target.elements.username.value;
    if(user){
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) =>{
        const repos = res.data.public_repos;
        this.setState({repos});
      });
    } else return;
    
  }

  render() {
    return (
      <div>
        <UserForm getUser={this.getUser} />
        {this.state.repos ? <p>Number of repos:{this.state.repos }</p> : <p>Please enter the username</p>}
      </div>
      
    );
  }
}

export default App;
