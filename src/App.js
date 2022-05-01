import React, { Component } from 'react';
import Hello from './components/Hello/Hello';
import Test from './components/Test/Test';

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Test />
      </div>
    );
  }
}
