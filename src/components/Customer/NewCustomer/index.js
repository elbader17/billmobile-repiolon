import { connect } from 'react-redux';
import NewCustomer from './Component';
import { createCustomer } from '../../../app/customers/action';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  fiscalIdentity: state.fiscalIdentity,
});

const mapDispatchToProps = (dispatch) => {
  return {
    saveFiscalIdentity: (name, identification, category, id, navigation) => {
      dispatch(createCustomer({ name, identification, category }))
        .then(() => {
          navigation.navigate('CustomerList')
        });
    },
    type: 'collection'
  };
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCustomer);

export default component;