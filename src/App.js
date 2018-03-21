import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from "./Clock";
import ClickButton from "./ClickButton";
import ColoredBlock from "./ColoredBlock";



var test="hello";
class App extends Component {
  render() {
      var test2="hello2";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            Hi {this.props.name}!
          <br/>{"test"+" mine"+(25*10)}
          <br/>{test}
          <br/>{test2}
        </p>
          <Clock></Clock>
          <ClickButton></ClickButton>
          <br/>
          <div className="main-content">
              <ColoredBlock/>
          </div>
      </div>
    );
  }
}

export default App;
