import axios from 'axios';
import {
  CREATE_ITEM,
  UPDATE_ITEM,
} from './constant';

function createItemAction(name, price) {
  return {
    type: CREATE_ITEM,
    name,
    price,
  };
}

function updateItemAction(id, name, price) {
  return {
    type: UPDATE_ITEM,
    id,
    name,
    price,
  };
}

// eslint-disable-next-line func-names
const createItem = (category, name, price) => {

  const resource = {
    category,
    name,
    price,
  };

  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.post('v1/items', { resource })
      .then(() => {
        dispatch(createItemAction(name, price));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


const updateItem = (id, name, price) => {
  const resource = {
    name,
    price,
  };

  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.put(`v1/items/${id}`, { resource })
      .then(() => {
        dispatch(updateItemAction(name, price));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export { createItem, updateItem };
