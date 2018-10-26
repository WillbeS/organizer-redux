import React from 'react';
import Input from '../common/forms/Input';
import Submit from '../common/forms/Submit';

const ListForm = (props) => {
    return (
        <form>
            <div>{props.error}</div>
            <Input
                name='name'
                placeholder='Name'
                value={props.name}
                onChange={props.onChange} />
            <br />
            <Submit
                value='Submit'
                onClick={props.onSubmit} />
        </form>
    );
}

export default ListForm;