import React from 'react';

const Select = (props) => {
    let options = <option value=''>No values</option>
    if (props.options) {
        options = props.options.map((op, index) => {
            return <option key={index} value={op}>{op}</option>
        });
    }
    
    return (
        <div className='form-group'>
            <label htmlFor={props.name}>{props.placeholder}</label>
            <select
                className='form-control'
                name={props.name}
                value={props.value}
                onChange={props.onChange}>{options}</select>
        </div>
    );
}

export default Select;