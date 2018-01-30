import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Raz Kronenberg personal page</h1>
        </header>

        <div className="appPanel">
          <div className="leftPanel">
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
          <div className="mainPanel">
            <p> main panel </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
