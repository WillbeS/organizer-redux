import React from 'react';
import TodoMain from './TodoMain';

const TodosList = (props) => {
    const data = props.data;
    let rows = Object.keys(data).map(key => {
        return <TodoMain
            key={key}
            todo={data[key]}
            onUpdateStatus={props.onUpdateStatus}
            onUpdateProgress={props.onUpdateProgress}
            onEditClick={props.onEditClick}
            onDeleteClick={props.onDeleteClick} />
    });

    return (
        <div>
            <h2>List All Tasks</h2>
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

export default TodosList;