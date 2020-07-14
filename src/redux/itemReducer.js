import uniqueId from 'lodash/uniqueId';

// const items = [
//   { value: 'Pants', id: uniqueId(), packed: false },
//   { value: 'Jacket', id: uniqueId(), packed: false },
//   { value: 'iPhone Charger', id: uniqueId(), packed: false },
//   { value: 'MacBook', id: uniqueId(), packed: false },
//   { value: 'Sleeping Pills', id: uniqueId(), packed: true },
//   { value: 'Underwear', id: uniqueId(), packed: false },
//   { value: 'Hat', id: uniqueId(), packed: false },
//   { value: 'T-Shirts', id: uniqueId(), packed: false },
//   { value: 'Belt', id: uniqueId(), packed: false },
//   { value: 'Passport', id: uniqueId(), packed: true },
//   { value: 'Sandwich', id: uniqueId(), packed: true },
// ];

const initialState = {
  items: {
    past: [],
    present: [],
    future: [],
  },
};

const itemReducer = (state = initialState, action) => {
  const { past, present, future } = state.items;

  if (action.type === 'UPDATE_ALL_ITEMS') {
    return {
      items: {
        past: [],
        present: action.items,
        future: [],
      },
    };
  }

  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      items: {
        past: [present, ...past],
        present: [...present, { id: uniqueId(), packed: false, value: action.item.value }],
        future,
      },
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      items: {
        past: [present, ...past],
        present: present.filter((item) => item.id !== action.item.id),
        future,
      },
    };
  }

  if (action.type === 'TOGGLE_ITEM') {
    return {
      ...state,
      items: {
        past: [present, ...past],
        present: present.map((item) => {
          if (item.id === action.item.id) return { ...item, packed: !item.packed };
          return item;
        }),
        future,
      },
    };
  }

  if (action.type === 'CHECKOFF_ALL') {
    return {
      ...state,
      items: {
        past: [present, ...past],
        present: present.map((item) => ({ ...item, packed: false })),
        future,
      },
    };
  }

  if (action.type === 'CHECKON_ALL') {
    return {
      items: {
        past: [present, ...past],
        present: present.map((item) => ({ ...item, packed: true })),
        future: [],
      },
    };
  }

  if (action.type === 'DELETE_UNPACKED_ITEMS') {
    return {
      items: {
        past: [present, ...past],
        present: present.filter((item) => item.packed),
        future: [],
      },
    };
  }

  if (action.type === 'UNDO_ITEM_ACTION') {
    if (!past.length) return state;

    const newFuture = [present, ...future];
    const [newPresent, ...newPast] = past;

    return {
      items: {
        past: newPast,
        present: newPresent,
        future: newFuture,
      },
    };
  }

  if (action.type === 'REDO_ITEM_ACTION') {
    if (!future.length) return state;

    const newPast = [present, ...past];
    const [newPresent, ...newFuture] = future;

    return {
      items: {
        past: newPast,
        present: newPresent,
        future: newFuture,
      },
    };
  }

  return state;
};

export default itemReducer;
