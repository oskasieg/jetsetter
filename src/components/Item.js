import React, { Component } from 'react';
import './Item.css';
import { connect } from 'react-redux';
import { toggleItem, removeItem } from '../redux/actions';

class Item extends Component {
  render() {
    const { item, onRemoveItem, onCheckOffItem } = this.props;
    return (
      <article className='Item'>
        <label htmlFor={item.id}>
          <input type='checkbox' checked={item.packed} onChange={() => onCheckOffItem(item)} id={item.id} />
          {item.value}
        </label>
        <button className='Item-remove' onClick={() => onRemoveItem(item)}>
          Remove
        </button>
      </article>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onCheckOffItem: (id) => dispatch(toggleItem(id)),
  onRemoveItem: (id) => dispatch(removeItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
