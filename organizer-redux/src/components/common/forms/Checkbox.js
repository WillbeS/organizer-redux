import React from 'react';

const Checkbox = (props) => {


    return (
        <div className='form-check'>
            <input
                type='checkbox'
                className='form-check-input'
                name={props.name}
                value={props.value}
                onChange={props.onChange} />
            <label className='form-check-label' htmlFor={props.name}>{props.placeholder}</label>
        </div>
    );
}

export default Checkbox;