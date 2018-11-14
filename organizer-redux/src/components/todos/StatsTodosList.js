import React from 'react';
import StatsTodo from './StatsTodo';

const StatsTodosList = (props) => {
    const data = props.data;
    let rows = Object.keys(data).map(key => {
        return <StatsTodo
            key={key}
            todo={data[key]}
            onUpdateStatus={props.onUpdateStatus}
            onUpdateProgress={props.onUpdateProgress}
            onEditClick={props.onEditClick}
            onDeleteClick={props.onDeleteClick} />
    });

    return (
        <div>
            <div className='table-responsive'>
                <table className="table table-hover">
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StatsTodosList;