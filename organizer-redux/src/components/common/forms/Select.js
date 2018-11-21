import React from 'react';

const Select = (props) => {
    let options = null;
    if (props.options) {
        options = props.options.map((op, index) => {
            return <option key={index} value={op[0]}>{op[1]}</option>
        });
    }
    
    return (
        <div className='form-group'>
            <label htmlFor={props.name}>{props.placeholder}</label>
            <select
                className='form-control'
                name={props.name}
                value={props.value}
                onChange={props.onChange}>
                    <option value="" disabled>Select your option</option>
                    {options}
                </select>
        </div>
    );
}

export default Select;