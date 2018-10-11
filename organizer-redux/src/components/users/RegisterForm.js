import React from 'react';
import Input from '../common/forms/Input';
import Submit from '../common/forms/Submit';

const RegisterForm = (props) => (
    <form>
        <div>{props.error}</div>
        <Input
            name='username'
            placeholder='Username'
            value={props.user.username}
            onChange={props.onChange} />
        <Input
            type='password'
            name='password'
            placeholder='Password'
            value={props.user.password}
            onChange={props.onChange} />
        <Input
            type='password'
            name='confirmPassword'
            placeholder='Confirm  Password'
            value={props.user.confirmPassword}
            onChange={props.onChange} />
        <br />
        <Submit
            value='Register'
            onClick={props.onSave} />
    </form>
);

export default RegisterForm;