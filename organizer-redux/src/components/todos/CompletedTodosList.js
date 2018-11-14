import React from 'react';
import CompletedTodo from './CompletedTodo';

const CompletedTodosList = (props) => {
    const data = props.data;
    let rows = Object.keys(data).map(key => {
        return <CompletedTodo
            key={key}
            todo={data[key]}
            onUpdateStatus={props.onUpdateStatus} />
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

export default CompletedTodosList;