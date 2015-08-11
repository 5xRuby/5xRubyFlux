import React from 'react';
import AppStore from '../stores/AppStore';

var ItemInput = require('./ItemInput.js');
var ItemList = require('./ItemList.js');

[
  {user: '', email: '', text: ''},
  {user: '', email: '', text: ''},
]

const App = React.createClass({
  getInitialState() {
    return {items: AppStore.getItems()};
  },
  handleChange() {
    var items = AppStore.getItems();
    this.setState({items});
  },
  itemClicked(index){
    // this.setState({highlight: index});
  },
  componentWillMount(){
    AppStore.addChangeListener(this.handleChange);
  },
  componentWillUnmount() {
    AppStore.removeChangeListener(this.handleChange);
  },

  render() {
    return (
    <div>
      <header>
        <h1>MyApp</h1>
      </header>
      <ItemList items={this.state.items}
        highlight={this.state.highlight}
        itemClicked={this.itemClicked} />

      <ItemInput />
    </div>
    );
  }
});

module.exports = App;
