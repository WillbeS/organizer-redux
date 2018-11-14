import React from 'react';
import StatusBox from './StatusBox';

import './Todo.css';

const TodoDaily = (props) => {
    const hiddenRowId = 'hidden-row-' + props.todo._id;
    const completed = props.todo.complete_date !== null;
    const progress = `${props.todo.progress} / ${props.todo.target} ${props.todo.type}`;

    return (
        <tr>
            <td className='align-middle d-none d-lg-table-cell'>
                <StatusBox
                    checked={completed}
                    todo={props.todo}
                    onClick={props.onUpdateStatus} />
                <span className='margin-left-10'>{props.todo.name}</span>
            </td>
            <td className='align-middle d-none d-lg-table-cell'>
                <span>{progress}</span>
            </td>
            <td colSpan='3' className='align-middle d-lg-none d-md-table-cell'>
                <table className='mobile-inside'>
                    <tbody>
                        <tr>
                            <td className='align-middle first'>
                                <StatusBox
                                    checked={completed}
                                    todo={props.todo}
                                    onClick={props.onUpdateStatus} />
                                <span className='margin-left-10'>{props.todo.name}</span>
                            </td>
                            <td className='align-middle'>
                            <button className='btn-collapse align-middle' data-toggle="collapse" data-target={'.' + hiddenRowId}>V</button>
                            </td>
                        </tr>
                        <tr className={hiddenRowId + ' collapse'}>
                            <td colSpan='2' className='align-middle'>
                            <span>{progress}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    );
}

export default TodoDaily;