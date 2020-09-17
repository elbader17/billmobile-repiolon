import customersReducer from '../reducer';
import { 
  CREATE_CUSTOMER,
  LIST_CUSTOMERS,
} from '../constant';

describe('post reducer', () => {
  it('test addCustomers', () => {
    const action = { 
      type: CREATE_CUSTOMER, 
      customer: {}
    };
    const expectedState = { 
      customers: [{}]
    };
    expect(customersReducer(undefined, action)).toEqual(expectedState);
  });
/*
  it('test setCustomers', () => {
    const action = { 
      type: LIST_CUSTOMERS, 
      customers: []
    };
    const expectedState = { 
      customers: []
    };
    expect(customersReducer(undefined, action)).toEqual(expectedState);
  });
*/
});