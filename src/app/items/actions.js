import axios from 'axios';
import {
  CREATE_ITEM,
  UPDATE_ITEM,
  LIST_ITEMS,
} from './constants';

function createItemAction(item) {
  return {
    type: CREATE_ITEM,
    item //id,attributes
  };
}

function updateItemAction(id, name, price) {
  const item = {id, name, price};
  return {
    type: UPDATE_ITEM,
    item
  };
}

function itemListAction(items) {
  return {
    type: LIST_ITEMS,
    items,
  };
}

const createItem = ({ category, name, price }) => {
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
      .then((response) => {
        return dispatch(createItemAction(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const listItems = () => {
  return (dispatch) => {
    return axios.get('v1/items')
      .then((resources) => {
        console.log(resources);
        dispatch(itemListAction(resources.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const updateItem = ({id, category, name, price}) => {
  const resource = {
    name,
    price,
    category
  };

  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.put(`v1/items/${id}`, { resource })
      .then((response) => {
        const item = response.data.data;
        dispatch(updateItemAction(item.id, item.attributes.name, item.attributes.price));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { createItem, updateItem, listItems };
