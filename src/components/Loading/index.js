import { connect } from 'react-redux';
import Loading from './Component';

const mapStateToProps = state => ({
  jwtToken: state.authentication.jwtToken,
});

export default connect(mapStateToProps)(Loading);