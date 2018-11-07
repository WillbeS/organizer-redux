import React from 'react';
import Input from '../common/forms/Input';
import Submit from '../common/forms/Submit';
import Select from '../common/forms/Select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

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
                'single',
                'times',
                'minutes',
                'amount'])}
            onChange={props.onChange} />
        <Input
            type='number'
            name='target'
            placeholder='Target'
            value={props.todo.target}
            onChange={props.onChange} />
        <br />
        {props.allProps &&
            <div>
                <Input
                    type='number'
                    name='Repeat'
                    placeholder='Repeat'
                    value={props.todo.Repeat}
                    onChange={props.onChange} />
                <br />
                Start Date:
                <DatePicker
                    selected={moment(props.todo.deadline)} 
                    onChange={(date => props.onChange({target: {name: 'deadline', value: date.toISOString() }}))} />
            </div>

        }
        <Submit
            value={props.submitValue}
            onClick={props.onSubmit} />
    </form>
);

export default TodoForm;