import producer from 'immer';
import {
  CREATE_ITEM,
} from './constant';

const initialState = {
  name: '',
  price: '',
};

function setItems({ draftState, name, price }) {
  draftState.name = name;
  draftState.price = price;
  return draftState;
}

export default addItemReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case CREATE_ITEM:
        return setItems({
          draftState,
          name: action.name,
          price: action.price,
        });
      default:
        return draftState;
    }
  });
};
