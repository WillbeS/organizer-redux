import React from 'react';
import DAilyTodo from './DailyTodo';

const DailyTodosList = (props) => {
    const data = props.data;
    let rows = Object.keys(data).map(key => {
        return <DAilyTodo
            key={key}
            todo={data[key]}
            onUpdateStatus={props.onUpdateStatus}
            onUpdateProgress={props.onUpdateProgress}
            onEditClick={props.onEditClick} />
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

export default DailyTodosList;