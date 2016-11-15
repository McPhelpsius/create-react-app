import React, { Component } from 'react';
import marked from 'marked';
import Radium from 'radium';
import logo from './logo.svg';
import globalStyles from './globals';
import './App.css';

const {flex, half} = globalStyles;

const styles = {
  editor:  {
    backgroundColor: '#000',
    color: '#FFF',
    padding: '1rem',
    margin: '1rem 1rem 1rem .5rem',
    fontFamily: 'monospace',
    width: "90%",
    height: "77vh",
    ':focus': {
      outline: '0'
    }
  },
  output: {
    border: 'thin black solid',
    padding: '0 1rem',
    wordWrap: 'wrap-word',
    width: "90%",
    height: "80vh",
    minHeight: "80vh",
    margin: "1rem 1rem 1rem .5rem"
  },
  heading: {
    textAlign: 'center'
  }
}

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
        <section style={styles.heading}>
          <h1>Nathan's Magical Markdown</h1>
          <p>If you type something in the black, you will feel instant gratification of seeing translated your text in the white box.</p>
        </section>
        <div style={flex}>
          <div style={half}>
            <textarea rows="" cols="" style={styles.editor} onChange={this.doTheMarkdown} onKeyUp={this.doTheMarkdown}></textarea>
          </div>
          <div style={half}>
            <div id="markedDown" style={styles.output}></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Radium(App);
