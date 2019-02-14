import { connect } from 'react-redux'
import SignUp from './Component';
import { signUp } from '../../../app/authentication/actions';
import { confirmCode } from '../../../app/authentication/actions';

const mapStateToProps = (state) => ({
    modalVisible: state.modalVisible
}) ;

function mapDispatchToProps(dispatch) {
    return {
        signUp: (password, name,attributes) => dispatch(signUp(password, name,attributes)),
        confirmCode: (name, confirmationCode) => dispatch(confirmCode(name,confirmationCode)),
    };
}

const component = connect( 
    mapStateToProps,
    mapDispatchToProps,
)(SignUp);

export default component;