import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import toastr from 'toastr';
import {register} from '../../actions/authActions';
import {connect} from 'react-redux';

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            repeat: '',
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

        if (!this.isValidForm()) {
            return;
        }

        this.props.register(this.state.username.toLowerCase(), this.state.password);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error) {
            toastr.error(newProps.error);
        }

        if (newProps.loggedIn) {
            toastr.success('User registration successfull!');
            this.props.history.push('/');
        }
    }

    isValidForm() {
        const username = this.state.username;
        const password = this.state.password;
        const repeat = this.state.repeat;

        let formIsValid = true;
        let error = '';

        if (username === '' || password === '') {
            error = 'All input fields are required!';
            formIsValid = false;
        }

        if (password !== repeat) {
            error = 'Passwords missmatch!';
            formIsValid = false;
        }

        if (error) {
            this.setState({ error });
        }

        return formIsValid;
    }


    render() {
        return (
            <div className='row'>
                <div className='col-md-4 offset-md-4'>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <RegisterForm
                        username={this.state.username}
                        password={this.state.password}
                        repeat={this.state.repeat}
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
        register: (username, password) => dispatch(register(username, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);