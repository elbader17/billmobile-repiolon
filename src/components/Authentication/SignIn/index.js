import { connect } from 'react-redux'
import SignIn from './Component';
import { signIn } from '../../../app/authentication/actions';

const mapStateToProps = (state) => ({
    jwtToken: state.authentication.jwtToken,
}) ;

function mapDispatchToProps(dispatch) {
    return {
        signIn: (email, password) => dispatch(signIn(email, password)),
    };
}

  
const component = connect( 
    mapStateToProps,
    mapDispatchToProps,
)(SignIn);

export default component;