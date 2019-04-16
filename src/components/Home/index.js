import { connect } from 'react-redux'
import Home from './Component';

const mapStateToProps = state => ({
  name: state.fiscalIdentity.name,
});

const component = connect(
  mapStateToProps,
)(Home);

export default component;
