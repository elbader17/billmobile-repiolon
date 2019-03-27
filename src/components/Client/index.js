import { connect } from 'react-redux'
import Client from './Component';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
});

const component = connect(
  mapStateToProps,
)(Client);

export default component;