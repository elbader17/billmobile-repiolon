import { connect } from 'react-redux'
import Invoice from './Component';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
});

const component = connect(
  mapStateToProps,
)(Invoice);

export default component;