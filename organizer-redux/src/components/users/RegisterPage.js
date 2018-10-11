import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
//import toastr from 'toastr';

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
                        onSave={this.onSubmitHandler} />
                </div>
            </div>
        );
    }
}

export default RegisterPage;