import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';

import './Application.css';
import Jetsetter from '../Jetsetter';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = { items: defaultState };

  addItem = (item) => {
    this.setState({ items: [item, ...this.state.items] });
  };

  removeItem = (id) => {
    const { items } = this.state;
    const filteredItems = items.filter((item) => item.id !== id);
    this.setState({ items: filteredItems });
  };

  checkOffItem = (id) => {
    const { items } = this.state;
    const filteredItems = items.map((item) => {
      if (id === item.id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    this.setState({ items: filteredItems });
  };

  markAllAsUnpacked = () => {
    const { items } = this.state;
    const filteredItems = items.map((item) => ({ ...item, packed: false }));
    this.setState({ items: filteredItems });
  };

  render() {
    const { items } = this.state;

    const packedItems = items.filter((item) => item.packed);
    const unpackedItems = items.filter((item) => !item.packed);

    return (
      <Jetsetter
        addItem={this.addItem}
        removeItem={this.removeItem}
        checkOffItem={this.checkOffItem}
        markAllAsUnpacked={this.markAllAsUnpacked}
        packedItems={packedItems}
        unpackedItems={unpackedItems}
      />
    );
  }
}

export default Application;
