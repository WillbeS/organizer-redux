import React, {Component} from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/authActions';
//import toastr from 'toastr';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: ''
        }

        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onInputChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.loginSuccess) {
            console.log(newProps.token);
            //this.props.history.push('/');
        }
    }

    render() {
        return(
            <div  className='row'>
            <div className='col-md-4 offset-md-4'>
            <h1>Login</h1>
                <p>Please enter your username and password.</p>
                <LoginForm
                    username={this.state.username}
                    password={this.state.password}
                    error={this.state.error}
                    onChange={this.onInputChangeHandler}
                    onSubmit={this.onSubmitHandler} />
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loginSuccess: state.login.success,
        token: state.login.token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => dispatch(loginAction(username, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);