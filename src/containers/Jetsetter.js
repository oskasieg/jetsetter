import React, { Component } from 'react';

import './Jetsetter.css';
import NewItem from '../components/NewItem';
import CountDown from '../components/CountDown';
import Items from '../components/Items';
import { connect } from 'react-redux';
import { checkOffAll } from '../redux/actions';
import UndoRedoContainer from './UndoRedoContainer';

class Application extends Component {
  render() {
    const { items, markAllAsUnpacked } = this.props;

    const packedItems = items.present.filter((item) => item.packed);
    const unpackedItems = items.present.filter((item) => !item.packed);

    return (
      <div className='Application'>
        <NewItem />
        <UndoRedoContainer />
        <CountDown />
        <Items title='Unpacked Items' items={unpackedItems} />
        <Items title='Packed Items' items={packedItems} />
        <button className='button full-width' onClick={markAllAsUnpacked}>
          Mark All As Unpacked
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
