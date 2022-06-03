import React, { Component, createContext } from 'react';
import './index.css';

const MyContext = createContext();
const { Provider, Consumer } = MyContext;
export default class A extends Component {
  state = {
    data: 123
  };

  render() {
    return (
      <div className="a">
        <h2>A 組件</h2>
        <h3>A 要傳的 data 為 {this.state.data}</h3>
        <Provider value={{ data: this.state.data }}>
          <B />
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="b">
        <h2>B 組件</h2>
        <C />
      </div>
    );
  }
}

class C extends Component {
  // 只能用於類式組件
  static contextType = MyContext;

  render() {
    return (
      <div className="c">
        <h2>C 組件</h2>
        <h3>A 組件傳來的資料為: {this.context.data}</h3>
        <D />
      </div>
    );
  }
}

function D() {
  return (
    <div className="d">
      <h2>D 組件</h2>
      {/* 函數式組件跟類式組件都可以用 */}
      <Consumer>{(value) => <h3>A 組件傳來的資料為: {value.data}</h3>}</Consumer>
    </div>
  );
}
