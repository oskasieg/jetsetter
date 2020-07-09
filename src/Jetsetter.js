import React, { Component } from 'react';
import NewItem from './components/NewItem';
import CountDown from './components/CountDown';
import Items from './components/Items';

class Jetsetter extends Component {
  render() {
    const { addItem, removeItem, unpackedItems, packedItems, checkOffItem, markAllAsUnpacked } = this.props;

    return (
      <div className='Application'>
        <NewItem onSubmit={addItem} />
        <CountDown />
        <Items title='Unpacked Items' items={unpackedItems} onRemoveItem={removeItem} onCheckOffItem={checkOffItem} />
        <Items title='Packed Items' items={packedItems} onRemoveItem={removeItem} onCheckOffItem={checkOffItem} />
        <button className='button full-width' onClick={markAllAsUnpacked}>
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

export default Jetsetter;
