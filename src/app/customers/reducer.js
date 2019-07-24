import producer from 'immer';
import {
  CREATE_CUSTOMER,
  LIST_CUSTOMERS,
  UPDATE_CUSTOMER
} from './constant';

const initialState = {
  customers: [],
};

function addCustomer({ draftState, customer }) {
  draftState.customers.push(customer);
  return draftState;
}

function setCustomers({ draftState, customers }) {
  draftState.customers = customers;
  return draftState;
}

function setCustomer({ draftState, customer }) {
  function findCustomer(x) { 
    return x.id === customer.id;
  };
  const customerFind = draftState.customers.find(findCustomer);
  customerFind.attributes.name = customer.name;
  customerFind.attributes.category = customer.category;
  customerFind.attributes.identification = customer.identification;
  return draftState;
}

export default customersReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case CREATE_CUSTOMER:
        return addCustomer({
          draftState,
          customer: action.customer.data,
        });
      case LIST_CUSTOMERS:
        return setCustomers({
          draftState,
          customers: action.customers.data,
        });
      case UPDATE_CUSTOMER:
        return setCustomer({
          draftState,
          customer: action.customer,
        });
      default:
        return draftState;
    }
  });
};