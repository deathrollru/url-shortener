import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
              <h1>URL Shortener</h1>
              <form method="POST" action="/" name="shortenUrl" id="shortenUrlForm" className="shorten-form">
                  <input id="url" name="url" type="text" placeholder="Paste a link to shorten it" className="shorten-input" />
                  <input type="submit" value="Shorten!" className="shorten-button" />
              </form>
          </div>
      </div>
    );
  }
}

export default App;
