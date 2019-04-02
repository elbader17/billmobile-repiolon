import { connect } from 'react-redux'
import Home from './Component';

const mapStateToProps = state => ({
  name: state.identitiFiscal.name,
});

const component = connect(
  mapStateToProps,
)(Home);

export default component;
