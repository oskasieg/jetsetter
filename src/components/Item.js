import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render() {
    const { item, onRemoveItem, onCheckOffItem } = this.props;
    return (
      <article className='Item'>
        <label htmlFor={item.id}>
          <input type='checkbox' checked={item.packed} onChange={() => onCheckOffItem(item.id)} id={item.id} />
          {item.value}
        </label>
        <button className='Item-remove' onClick={() => onRemoveItem(item.id)}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
