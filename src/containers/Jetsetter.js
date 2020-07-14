import React, { Component } from 'react';

import './Jetsetter.css';
import NewItem from '../components/NewItem';
import CountDown from '../components/CountDown';
import Items from '../components/Items';
import { connect } from 'react-redux';
import { checkOffAll, deleteUnpackedItems, checkOnAll } from '../redux/actions';
import UndoRedoContainer from './UndoRedoContainer';

class Application extends Component {
  render() {
    const { items, markAllAsUnpacked, deleteUnpackedItems, markAllAsPacked } = this.props;

    const packedItems = items.present.filter((item) => item.packed);
    const unpackedItems = items.present.filter((item) => !item.packed);

    return (
      <div className='Jetsetter'>
        <h1>Jetsetter</h1>
        <NewItem />
        <UndoRedoContainer />
        <CountDown />
        <Items title='Unpacked Items' items={unpackedItems} />
        <Items title='Packed Items' items={packedItems} />
        <button className='button full-width' onClick={markAllAsUnpacked}>
          Mark All As Unpacked
        </button>
        <button className='button full-width' onClick={markAllAsPacked}>
          Mark All As Packed
        </button>
        <button className='button full-width' onClick={deleteUnpackedItems}>
          Delete Unpacked Items
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  markAllAsUnpacked: () => dispatch(checkOffAll()),
  markAllAsPacked: () => dispatch(checkOnAll()),
  deleteUnpackedItems: () => dispatch(deleteUnpackedItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
