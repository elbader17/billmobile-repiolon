import { connect } from 'react-redux';
import NewCustomer from '../NewCustomer/Component';
import { updateCustomer } from '../../../app/customers/action';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
  fiscalIdentity: state.fiscalIdentity,
});

const mapDispatchToProps = (dispatch) => {
  return {
    saveFiscalIdentity: (name, identification, category, id) => (
      dispatch(updateCustomer({id, name, identification, category }))
    ),
    type: 'collection'
  };
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCustomer);

export default component;