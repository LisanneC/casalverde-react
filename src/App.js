import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PagesContainer from './pages/PagesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <PagesContainer pages={ [] } />
        </div>

      </div>
    );
  }
}

export default App;
