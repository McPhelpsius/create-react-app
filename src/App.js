import React, { Component } from 'react';
import marked from 'marked';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
  constructor () {
    super();
    this.state = {markedDown: ''};
    this.doTheMarkdown = this.doTheMarkdown.bind(this);
  }
  doTheMarkdown (event) {
    let markyMark = marked(event.target.value);
    this.setState({markedDown: markyMark});
    document.getElementById('markedDown').innerHTML = this.state.markedDown;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>It works, okay?</h2>
        </div>
        <textarea rows="" cols="" onChange={this.doTheMarkdown} onKeyUp={this.doTheMarkdown}></textarea>
        <div id="markedDown"></div>
      </div>
    );
  }
}

export default App;
