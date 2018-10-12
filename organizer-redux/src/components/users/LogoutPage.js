import {Component} from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import {logout} from '../../actions/authActions';

class LogoutPage extends Component {
    componentWillMount() {
        this.props.logout();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error) {
            toastr.error(newProps.error);
        }

        if (!newProps.loggedIn) {
            this.props.history.push('/users/login');
        }
    }


    render() {
        return null;
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.auth.loggedIn,
        error: state.auth.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);