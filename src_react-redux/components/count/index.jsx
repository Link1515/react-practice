import React, { Component } from 'react';
import { increment, decrement } from '../../redux/actions/count';
import { connect } from 'react-redux';

class Count extends Component {
  plus = () => {
    const { value } = this.select;
    this.props.increment(+value);
  };

  minus = () => {
    const { value } = this.select;
    this.props.decrement(+value);
  };

  render() {
    return (
      <div>
        <h1>總和: {this.props.count}</h1>
        <h3>下方組件的人數: {this.props.personSum}</h3>

        <select ref={(c) => (this.select = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}

export default connect(
  // mapStateToProps
  (state) => ({ count: state.count, personSum: state.person.length }),
  // mapDispatchToProps
  // 物件寫法，直接帶入引入的 action， react-redux 會自動 dispatch
  {
    increment,
    decrement
  }

  // 物件寫法(自行引入 store 來 dispatch)
  // {
  //   increment: (data) => store.dispatch({ type: 'increment', data }),
  //   decrement: (data) => store.dispatch({ type: 'decrement', data }),
  // }

  // 函數寫法(自己調用 dispatch，且不透過 action)
  // (dispatch) => ({
  //   increment: (data) => dispatch({ type: 'increment', data }),
  //   decrement: (data) => dispatch({ type: 'decrement', data })
  // })
)(Count);
