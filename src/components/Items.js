import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
  state = {
    searchTerm: '',
  };

  updateSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  };

  render() {
    const { title, items } = this.props;
    const { onRemoveItem, onCheckOffItem } = this.props;

    const filteredItems = items.filter((item) => item.value.substr(0, this.state.searchTerm.length) === this.state.searchTerm);

    return (
      <section className='Items'>
        <h2>
          {title} ({items.length})
        </h2>
        <Filter searchTerm={this.state.searchTerm} onChange={this.updateSearchTerm} />
        {filteredItems.map((item) => (
          <Item key={item.id} onCheckOffItem={onCheckOffItem} onRemoveItem={onRemoveItem} item={item} />
        ))}
      </section>
    );
  }
}

export default Items;
