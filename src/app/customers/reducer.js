import producer from 'immer';
import {
  CREATE_CUSTOMER,
  LIST_CUSTOMERS,
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

export default customersReducer = (state = initialState, action) => {
  return producer(state, (draftState) => {
    switch (action.type) {
      case CREATE_CUSTOMER:
        return addCustomer({
          draftState,
          customer: action.customer,
        });
      case LIST_CUSTOMERS:
        return setCustomers({
          draftState,
          customers: action.customers.data,
        });
      default:
        return draftState;
    }
  });
};