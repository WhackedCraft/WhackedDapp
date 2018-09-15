import React, { Component } from 'react';
import { web3ProviderName } from '../utils/web3';
import './App.css';

import Navbar from './Navbar.js';

class App extends Component {
  render() {
    return (
      <Navbar />
    );
  }
}

export default App;
