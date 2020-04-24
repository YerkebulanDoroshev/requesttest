import React, { Component } from 'react';
import './App.css';

import { Form } from './components';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
