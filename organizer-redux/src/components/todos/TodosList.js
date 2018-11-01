import React from 'react';
import StatusBox from './StatusBox';

const TodosList = (props) => {
    const data = props.data;
    let rows = Object.keys(data).map(key => {
        const todo = data[key];
        return <tr key={key}>
            <td><StatusBox /></td>
            <td>{todo.name}</td>
            <td>{todo.progress} / {todo.target}</td>
            <td>
                <button onClick={(e) => (props.onEditClick(e, key))}>[Edit]</button> 
                <button onClick={(e) => (props.onDeleteClick(e, key))}>[Delete]</button>
            </td>
        </tr>
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