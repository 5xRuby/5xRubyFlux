var _ = require('lodash');
import AppActions from '../actions/AppActions.js';
import React from 'react';

const ItemInput = React.createClass({
  getInitialState() {
    return {'email': null, 'name': null, 'text': ''};
  },

  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleClick() {
    AppActions.addItem(this.state);
  },
  render() {
    return <div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input type="text" id='email' name='email'
          className='form-control'
          onChange={this.handleChange}
          value={this.state.email} />
      </div>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input type="text" id='name' name='name'
          className='form-control'
          onChange={this.handleChange}
          value={this.state.name} />
      </div>
      <div className='form-group'>
        <label htmlFor='text'>Text</label>
        <textarea id='text' name='text'
          className='form-control'
          onChange={this.handleChange}
          value={this.state.text}/>
      </div>
      <div className='form-group'>
        <button onClick={this.handleClick} className='btn btn-success'>Add Item</button>
      </div>
    </div>;
  }
});

module.exports = ItemInput;
