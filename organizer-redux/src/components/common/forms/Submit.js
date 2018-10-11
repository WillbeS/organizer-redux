import React from 'react';

const Submit = (props) => {
    return (
        <div>
            <input
                className='btn btn-primary'
                type='submit'
                value={props.value}
                onClick={props.onClick} />
        </div>
    );
}

export default Submit;