import React, { Component } from 'react';
import FormHelper from '../common/forms/FormHelper';
import RegisterForm from './RegisterForm';
import toastr from 'toastr';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-4 offset-md-4'>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                </div>
            </div>
        );
    }
}