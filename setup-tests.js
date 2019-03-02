  // setup-tests.js
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);
global.mockStore = mockStore;