import React from 'react';
import Input from '../common/forms/Input';
import Submit from '../common/forms/Submit';

const LoginForm = (props) => (
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
        <br />
        <Submit
            value='Login'
            onClick={props.onSave} />
    </form>
);

export default LoginForm;