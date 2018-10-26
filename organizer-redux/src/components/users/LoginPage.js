import React, {Component} from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import toastr from 'toastr';

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

        if(!this.isValidForm()) {
            return;
        }

        this.props.login(this.state.username.toLowerCase(), this.state.password);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error) {
            toastr.error(newProps.error);
        }

        if (newProps.loggedIn) {
            toastr.success('User login successfull!');
            this.props.history.push('/');
        }
    }

    isValidForm() {
        const username = this.state.username;
        const password = this.state.password;

        let formIsValid = true;
        let error = '';

        if (username === '' || password === '') {
            error = 'All input fields are required!';
            formIsValid = false;
        }

        if (error) {
            this.setState({ error });
        }

        return formIsValid;
    }

    render() {
        console.log('Login Page render');
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
        loggedIn: state.auth.loggedIn,
        error: state.auth.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => dispatch(login(username, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);