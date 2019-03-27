import { connect } from 'react-redux'
import Item from './Component';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
});

const component = connect(
  mapStateToProps,
)(Item);

export default component;