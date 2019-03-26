import { connect } from 'react-redux'
import NewItem from './Component';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
});

const component = connect(
  mapStateToProps,
)(NewItem);

export default component;