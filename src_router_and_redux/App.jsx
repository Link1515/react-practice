import React, { Component } from 'react';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
// import axios from 'axios';
import Hello from './components/Hello/Hello';
import Test from './components/Test/Test';
import Comp1 from './pages/comp1';
import Comp2 from './pages/comp2';
import Nested from './pages/nested';
import NestedPage1 from './pages/nested_page1';
import NestedPage2 from './pages/nested_page2';
import store from './redux/store';
import { createIncrementAsyncAction, createDecrementAction } from './redux/count_action';

export default class App extends Component {
  state = {
    comp1Id: ''
  };

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }

  setComp1Id = (e) => {
    this.setState({ comp1Id: e.target.value });
  };

  increment = () => {
    store.dispatch(createIncrementAsyncAction(+this.select.value, 1000));
  };
  decrement = () => {
    store.dispatch(createDecrementAction(+this.select.value));
  };

  render() {
    // axios.get('http://localhost:3000/api1/reactTestServer').then((res) => {
    //   console.log(res);
    // });
    const { comp1Id } = this.state;

    return (
      <div>
        <Hello>123</Hello>
        <Test />
        <br />
        ------
        <br />
        <h2>react router dom</h2>
        <NavLink to={`comp1/1${comp1Id}`}>組件1</NavLink>
        <input type="text" onChange={this.setComp1Id} />
        <NavLink to="comp2">組件2</NavLink>
        <NavLink replace to="nested">
          嵌套路由
        </NavLink>
        <Routes>
          <Route path="comp1/:id" element={<Comp1 />} />
          <Route path="comp2" element={<Comp2 />} />
          <Route path="nested" element={<Nested />}>
            <Route path="nestedPage1" element={<NestedPage1 />} />
            <Route path="nestedPage2" element={<NestedPage2 />} />
          </Route>
          <Route path="/" element={<Navigate replace to="/comp2" />} />
        </Routes>
        <br />
        ----
        <br />
        <h2>redux</h2>
        <h3>sum: {store.getState()}</h3>
        <select ref={(c) => (this.select = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
