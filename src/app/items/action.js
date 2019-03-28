import axios from 'axios';
import {
  SET_ITEM,
} from './constant';

function setItem(name, price) {
  return {
    type: SET_ITEM,
    name,
    price,
  };
}

// eslint-disable-next-line func-names
const registerItemProduct = function (name, price, jwtToken) {
  const instance = axios.create({
    baseURL: 'http://192.168.1.18:8888/',
    timeout: 1000,
    headers: { 'JWT-TOKEN': jwtToken },
  });

  const resource = {
    category:  "product",
    name: name,
    price:  price,
  };

  return (dispatch) => {

    return instance.post('v1/items', { resource })
      .then((response) => {
        dispatch(setItem(name, price));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// eslint-disable-next-line func-names
const registerItemService = function (name, price, unit, jwtToken) {
  const instance = axios.create({
    baseURL: 'http://192.168.1.18:8888/',
    timeout: 1000,
    headers: { 'JWT-TOKEN': jwtToken },
  });

  const resource = {
    category:  "service",
    name: name,
    price:  price,
  };

  return (dispatch) => {
    return instance.post('v1/items', { resource })
      .then((response) => {
        dispatch(setItem(name, price));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { registerItemProduct, registerItemService };
