import axios from 'axios';
import {
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  LIST_CUSTOMERS,
} from './constant';

function createCustomerAction(customer) {
  return {
    type: CREATE_CUSTOMER,
    customer,
  };
}

function updateCustomerAction(id, name, identity, category) {
  return {
    type: UPDATE_CUSTOMER,
    id,
    name,
    identity,
    category,
  };
}

function customerListAction(customers) {
  return {
    type: LIST_CUSTOMERS,
    customers,
  };
}

const createCustomer = ({ name, identification, category }) => {
  const resource = {
    category,
    name,
    identification,
  };

  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.post('v1/fiscal_identities', { resource })
      .then((response) => {
        console.log(response.data);
        return dispatch(createCustomerAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const listCustomers = () => {

  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.get('v1/fiscal_identities')
      .then((resources) => {
        dispatch(customerListAction(resources.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const updateCustomer = ({ id, name, identification, category }) => {
  const resource = {
    name,
    identification,
    category,
  };

  return (dispatch, getState) => {
    const instance = axios.create({
      headers: { 'JWT-TOKEN': getState().authentication.jwtToken },
    });
    return instance.put(`v1/fiscal_identities/${id}`, { resource })
      .then(() => {
        dispatch(updateCustomerAction(name, identification, category));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export { createCustomer, updateCustomer, listCustomers };
