import React from 'react';
var Item = require('./Item.js');

const ItemList = React.createClass({
  items() {
    return this.props.items.map((item, index) => {
        var highlight = index === this.props.highlight ? 'highlight' : null;

        return <Item item={item}
          index={index}
          className={highlight}
          itemClicked={this.props.itemClicked}
        />
    });
    //[<li>itema</li>, <li>itemb</li>]
  },

  render() {
    return <ul>
     {this.items()}
    </ul>;
  }
});

module.exports = ItemList;
