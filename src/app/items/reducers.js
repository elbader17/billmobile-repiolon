import producer from 'immer';
import {
  CREATE_ITEM,
  LIST_ITEMS,
} from './constants';

const initialState = {
  items: [],
};

function addItem({ draftState, item }) {
  draftState.items.push(item);
  return draftState;
}

function setItems({ draftState, items }) {
  draftState.items = items.data;
  return draftState;
}

export default itemsReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case CREATE_ITEM:
        return addItem({
          draftState,
          item: action.item
        });
      case LIST_ITEMS:
        return setItems({
          draftState,
          items: action.items,
        });
      default:
        return draftState;
    }
  });
};
