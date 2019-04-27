import { connect } from 'react-redux'
import SignUp from './Component';
import { signUp } from '../../../app/authentication/actions';
import { confirmCode } from '../../../app/authentication/actions';

function mapDispatchToProps(dispatch) {
    return {
        signUp: (password, name,attributes) => dispatch(signUp(password, name,attributes)),
        confirmCode: (email, confirmationCode) => dispatch(confirmCode(email,confirmationCode)),
    };
}

const component = connect( 
    mapDispatchToProps,
)(SignUp);

export default component;