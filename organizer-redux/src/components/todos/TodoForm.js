import React from 'react';
import Input from '../common/forms/Input';
import Submit from '../common/forms/Submit';
import Select from '../common/forms/Select';

const TodoForm = (props) => (
    <form>
        <div>{props.error}</div>
        <Input
            name='name'
            placeholder='Name'
            value={props.todo.name}
            onChange={props.onChange} />
        <Select 
            name='type'
            placeholder='Type'
            value={props.todo.type}
            options={([
                'Single',
                'Times', 
                'Minutes', 
                'Hours'])}
            onChange={props.onChange} />
        <Input
            type='number'
            name='target'
            placeholder='Target'
            value={props.todo.target}
            onChange={props.onChange} />
        <br />
        <Submit
            value={props.submitValue}
            onClick={props.onSubmit} />
    </form>
);

export default TodoForm;