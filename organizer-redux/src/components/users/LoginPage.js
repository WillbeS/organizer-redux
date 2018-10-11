import React, {Component} from 'react';
import Auth from './Auth';
import FormHelper from '../common/forms/FormHelper';
import LoginForm from './LoginForm';
import toastr from 'toastr';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div  className='row'>
            <div className='col-md-4 offset-md-4'>
            <h1>Login</h1>
                <p>Please enter your username and password.</p>
            </div>
            </div>
        );
    }
}