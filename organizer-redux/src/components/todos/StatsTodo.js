import React from 'react';

import { Link } from 'react-router-dom';
import './Todo.css';

const StatsTodo = (props) => {
    const todo = props.todo;
    const hiddenRowId = 'hidden-row-' + props.todo._id;
    const editBtn = (
        <Link to={'/todo/edit/' + props.todo._id} className='btn btn-secondary'>Edit</Link>
    );
    const stats = 'Repeat every: ' + todo.Repeat + ' days -- Target (' + todo.type + '): ' + todo.target; 

    return (
        <tr>
            <td className='align-middle d-none d-lg-table-cell'>
                <span className='margin-left-10'>{props.todo.name}</span>
            </td>
            <td className='align-middle d-none d-lg-table-cell'>
                <span>{stats}</span>
            </td>
            <td className='align-middle d-none d-lg-table-cell'>
                {editBtn}
                {<button className='btn btn-secondary' onClick={(e) => (props.onDeleteClick(e, props.todo._id))}>[Delete]</button>}
            </td>
            <td colSpan='3' className='align-middle d-lg-none d-md-table-cell'>
                <table className='mobile-inside'>
                    <tbody>
                        <tr>
                            <td className='align-middle first'>
                                <span className='margin-left-10'>{props.todo.name}</span>
                            </td>
                            <td className='align-middle'>
                                <button className='btn-collapse align-middle' data-toggle="collapse" data-target={'.' + hiddenRowId}>V</button>
                            </td>
                        </tr>
                        <tr className={hiddenRowId + ' collapse'}>
                            <td colSpan='2' className='align-middle'>
                                <span>{stats}</span>
                            </td>
                        </tr>
                        <tr className={hiddenRowId + ' collapse'}>
                            <td colSpan='2' className='align-middle'>
                                {editBtn}
                                {<button className='btn btn-secondary' onClick={(e) => (props.onDeleteClick(e, props.todo._id))}>[Delete]</button>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    );
}

export default StatsTodo;