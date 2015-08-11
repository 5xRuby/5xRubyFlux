import React from 'react';

const Item = React.createClass({
  handleClick() {
    this.props.itemClicked(this.props.index);
  },

  render() {
    return <li onClick={this.handleClick} className={this.props.className}>
      <span>{this.props.item.email}</span>
      <span>{this.props.item.name}</span>
      <span>{this.props.item.text}</span>
    </li>;
  }
});

module.exports = Item;
