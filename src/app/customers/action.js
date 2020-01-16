import { fetch_api } from '../../utils/fetchrefresh';
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

function updateCustomerAction(id, name, identification, category) {
  const customer = {id, name, identification, category};
  return {
    type: UPDATE_CUSTOMER,
    customer
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
  return (dispatch) => {
    return fetch_api('/v1/fiscal_identities', 'POST', false, { resource })
      .then((response) => {
        console.log(response)
        return dispatch(createCustomerAction(response))
      })
      .catch((error) => console.log(error));
  };
};

const listCustomers = () => {
  return (dispatch) => {
    return fetch_api('/v1/fiscal_identities', 'GET', false)
      .then((resources) => {
        console.log(resources)
        dispatch(customerListAction(resources))
      })
      .catch((error) => console.log(error));
  };
};

const updateCustomer = ({ id, name, identification, category }) => {
  const resource = {
    name,
    identification,
    category
  };
  return (dispatch) => {
    return fetch_api(`/v1/fiscal_identities/${id}`,'PUT', false, { resource })
      .then((response) => {
        console.log(response);
        dispatch(updateCustomerAction(customer.id, customer.attributes.name, customer.attributes.identification, customer.attributes.category));
      })
      .catch((error) => console.log(error));
  };
};

const deleteCustomer = (id) => {
  return () => {
    return fetch_api(`/v1/fiscal_identities/${id}`,'DELETE', false)
      .then(() => console.log('Customer Delete OK'))
      .catch((error) => console.log(error));
  };
};

export { createCustomer, updateCustomer, listCustomers, deleteCustomer };
