import { connect } from 'react-redux'
import Home from './Component';

const mapStateToProps = state => ({
  user: state.userservice,
});

const component = connect(
  mapStateToProps,
)(Home);

export default component;
