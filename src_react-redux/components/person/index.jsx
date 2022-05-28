import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../../redux/actions/person';

class Person extends Component {
  addPerson = (type) => {
    return (event) => {
      if (type === 'click' || (type === 'key' && event.key === 'Enter')) {
        let { value: name } = this.inputText;
        this.props.addPerson({ id: Date.now(), name });
        this.inputText.value = '';
      }
    };
  };

  render() {
    return (
      <div>
        <h2>Person 組件</h2>
        <h3>上方組件的總和{this.props.sum}</h3>
        <input onKeyPress={this.addPerson('key')} ref={(c) => (this.inputText = c)} type="text" />
        <button onClick={this.addPerson('click')}>加一人</button>
        <ul>
          {this.props.person.map((p) => (
            <li key={p.id}>姓名: {p.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ person: state.person, sum: state.count }), {
  addPerson
})(Person);
