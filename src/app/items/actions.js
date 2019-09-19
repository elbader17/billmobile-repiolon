import { fetch_api } from '../../utils/fetchrefresh';
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

  return (dispatch) => {
    return fetch_api('/v1/items', 'POST', false, { resource })
      .then((response) => dispatch(createItemAction(response.data)))
      .catch((error) => {
        console.log(error);
      });
  };
};

const listItems = () => {
  return (dispatch) => {    
    return fetch_api('/v1/items', 'GET', false)
      .then(response => {
        dispatch(itemListAction(response))
      })
      .catch(error => console.log(error))
  };
};

const updateItem = ({id, category, name, price}) => {
  const resource = {
    name,
    price,
    category
  };

  return (dispatch) => {
    return fetch_api(`/v1/items/${id}`,'PUT', false, { resource })
      .then((response) => {
        const item = response.data;
        dispatch(updateItemAction(item.id, item.attributes.name, item.attributes.price));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { createItem, updateItem, listItems };