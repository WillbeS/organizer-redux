import React from 'react';
import Input from '../common/forms/Input';
import Submit from '../common/forms/Submit';

const RegisterForm = (props) => (
    <form>
        <div>{props.error}</div>
        <Input
            name='username'
            placeholder='Username'
            value={props.username}
            onChange={props.onChange} />
        <Input
            type='password'
            name='password'
            placeholder='Password'
            value={props.password}
            onChange={props.onChange} />
        <Input
            type='password'
            name='repeat'
            placeholder='Confirm  Password'
            value={props.confirmPassword}
            onChange={props.onChange} />
        <br />
        <Submit
            value='Register'
            onClick={props.onSubmit} />
    </form>
);

export default RegisterForm;