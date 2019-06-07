import producer from 'immer';
import {
  CREATE_ITEM,
  LIST_ITEMS,
  UPDATE_ITEM
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

function setItem({ draftState, item }) {
  function findItem(x) { 
    return x.id === item.id;
  };
  const itemFind = draftState.items.find(findItem);
  itemFind.attributes.name = item.name;
  itemFind.attributes.price = item.price;
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
      case UPDATE_ITEM:
        return setItem({
          draftState,
          item: action.item,
        });
      default:
        return draftState;
    }
  });
};
