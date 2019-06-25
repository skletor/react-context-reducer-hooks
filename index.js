import React, { Component } from 'react';
import { render } from 'react-dom';
import Fruits from './Fruits';
import './style.css';
import Store from './store';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Store>
      <div>
        <Fruits />
      </div>
      </Store>
    );
  }
}

render(<App />, document.getElementById('root'));
