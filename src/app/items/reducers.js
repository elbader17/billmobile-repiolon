import producer from 'immer';
import {
  CREATE_ITEM,
  LIST_ITEMS,
} from './constants';

const initialState = {
  items: [],
};

function addItem({ draftState, category, name, price }) {
  draftState.items.push({ category, name, price });
  return draftState;
}

function setItems({ draftState, items }) {
  draftState.items = items;
  return draftState;
}

export default itemsReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case CREATE_ITEM:
        return addItem({
          draftState,
          category: action.category,
          name: action.name,
          price: action.price,
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
