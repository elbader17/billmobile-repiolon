import React from 'react';
import { shallow } from 'enzyme';
import AddItem from './AddItem';
import NewItem from './Component';

jest.mock('../../../constants/metrics', () => ({ METRICS: { heightHeader: {} } }));

const promise = Promise.resolve(0);
const createItemMock = jest.fn(() => promise);

const setupAddItem = () => {
  const props = {
    data: {
      nameProduct: '',
      price: '',
      nameService:'',
      value:''
    } 
  }
  const functionalComponent = shallow(<AddItem {...props}/>);
  return {props, functionalComponent};
};

describe('test functional component AddItem', () => {
  test('render correctly component AddItem', () => {
    const {functionalComponent} = setupAddItem();
    expect(functionalComponent).toMatchSnapshot();
  });
});

test('render correctly component NewItem', () => {
  const component = shallow(<NewItem />)
  expect(component).toMatchSnapshot();
});

test('call the createItem function with param product', () => {
  const component = shallow(<NewItem createItem={createItemMock}/>);
  const button = component.findWhere(node => node.prop('testID') === 'buttonSave');
  button.simulate('press');
  expect(createItemMock).toBeCalled();
});

test('call the createItem function with param service', () => {
  const component = shallow(<NewItem createItem={createItemMock}/>);
  component.setState({isProduct: false});
  const button = component.findWhere(node => node.prop('testID') === 'buttonSave');
  button.simulate('press');
  expect(createItemMock).toBeCalled();
});

test('initial state of isProduct is true', () => {
  const component = shallow(<NewItem />);
  expect(component.instance().state.isProduct).toBe(true);
});

describe('check title button save item', () => {
  test('state isProduct true - button Text GUARDAR PRODUCTO', () => {
    const component = shallow(<NewItem />);
    const button = component.findWhere(node => node.prop('testID') === 'buttonSave');
    const title = [ 'GUARDAR ', 'PRODUCTO' ];
    expect(button.props().title.props.children).toEqual(title);
  });

  test('state isProduct false - button Text GUARDAR SERVICIO', () => {
    const component = shallow(<NewItem />);
    component.setState({isProduct: false});
    const button = component.findWhere(node => node.prop('testID') === 'buttonSave');
    const title = [ 'GUARDAR ', 'SERVICIO' ];
    expect(button.props().title.props.children).toEqual(title);
  });
});

describe('check correctly setState button save', () => {
  test('product button sets the state isProduct to true', () => {
    const component = shallow(<NewItem />);
    component.setState({isProduct: false});
    const button = component.findWhere(node => node.prop('testID') === 'product');
    button.simulate('press');
    expect(component.instance().state.isProduct).toBe(true);
  });

  test('service button sets the state isProduct to false', () => {
    const component = shallow(<NewItem />);
    const button = component.findWhere(node => node.prop('testID') === 'service');
    button.simulate('press');
    expect(component.instance().state.isProduct).toBe(false);
  });
});

describe('check disabled button save', () => {
  test('button disabled at startup', () => {
    const component = shallow(<NewItem />);
    const button = component.findWhere(node => node.prop('testID') === 'buttonSave');
    expect(button.props().disabled).toBe(true);
  });

  test('GUARDAR PRODUCTO button enabled with the correct data', () => {
    const component = shallow(<NewItem />);
    component.setState({nameProduct:'Coca Cola', priceProduct:'123', isProduct: true,});
    const button = component.findWhere(node => node.prop('testID') === 'buttonSave');
    expect(button.props().disabled).toBe(false);
  });

  test('GUARDAR PRODUCTO button disabled with nameProduct empty', () => {
    const component = shallow(<NewItem />);
    component.setState({nameProduct:'', priceProduct:'123', isProduct: true,});
    const button = component.findWhere(node => node.prop('testID') === 'buttonSave');
    expect(button.props().disabled).toBe(true);
  });

  test('GUARDAR PRODUCTO button disabled with price empty', () => {
    const component = shallow(<NewItem />);
    component.setState({nameProduct:'Coca Cola', priceProduct:'', isProduct: true,});
    const button = component.findWhere(node => node.prop('testID') === 'buttonSave');
    expect(button.props().disabled).toBe(true);
  });

  test('GUARDAR SERVICIO button enabled with the correct data', () => {
    const component = shallow(<NewItem />);
    component.setState({nameService:'Flete', valueService:'123', isProduct: false,});
    const button = component.findWhere(node => node.prop('testID') === 'buttonSave');
    expect(button.props().disabled).toBe(false);
  });

  test('GUARDAR SERVICIO button disabled with nameService empty', () => {
    const component = shallow(<NewItem />);
    component.setState({nameService:'', valueService:'123', isProduct: false,});
    const button = component.findWhere(node => node.prop('testID') === 'buttonSave');
    expect(button.props().disabled).toBe(true);
  });

  test('GUARDAR SERVICIO button disabled with value empty', () => {
    const component = shallow(<NewItem />);
    component.setState({nameService:'Flete', valueService:'', isProduct: false,});
    const button = component.findWhere(node => node.prop('testID') === 'buttonSave');
    expect(button.props().disabled).toBe(true);
  });
});