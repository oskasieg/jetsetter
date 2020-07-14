import uniqueId from 'lodash/uniqueId';
import Api from '../lib/api';

export const getAllItems = () => {
  return async (dispatch) => {
    const items = await Api.getAll();

    dispatch({
      type: 'UPDATE_ALL_ITEMS',
      items,
    });
  };
};

export const addItem = (value) => {
  const item = {
    packed: false,
    id: uniqueId(),
    value,
  };

  return (dispatch) => {
    Api.add(item).then((item) => {
      dispatch({
        type: 'ADD_ITEM',
        item,
      });
    });
  };
};

export const removeItem = (itemToRemove) => {
  return (dispatch) => {
    Api.delete(itemToRemove).then(() => {
      dispatch({
        type: 'REMOVE_ITEM',
        item: itemToRemove,
      });
    });
  };
};

export const toggleItem = (item) => {
  const updatedItem = { ...item, packed: !item.packed };

  return async (dispatch) => {
    await Api.update(updatedItem);
    dispatch({
      type: 'TOGGLE_ITEM',
      item,
    });
  };
};

export const checkOffAll = () => {
  return (dispatch) => {
    Api.markAllAsUnpacked().then(() =>
      dispatch({
        type: 'CHECKOFF_ALL',
      })
    );
  };
};

export const deleteUnpackedItems = () => {
  return async (dispatch) => {
    await Api.deleteUnpackedItems().then(() => {
      dispatch({
        type: 'DELETE_UNPACKED_ITEMS',
      });
    });
  };
};

export const redoItemAction = () => ({
  type: 'REDO_ITEM_ACTION',
});

export const undoItemAction = () => ({
  type: 'UNDO_ITEM_ACTION',
});
