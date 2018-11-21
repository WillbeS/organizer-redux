import React from 'react';
import StatusBox from './StatusBox';
import Progress from './Progress';
import { Link } from 'react-router-dom';
import ProgressTimer from './ProgressTimer';

import './Todo.css';

const TodoDaily = (props) => {
    const hiddenRowId = 'hidden-row-' + props.todo._id;
    const editBtn = (
        <Link to={'/todo/edit/' + props.todo._id} className='btn btn-secondary'>Edit</Link>
    );
    //const completed = props.todo.complete_date !== null;

    return (
        <tr>
            <td className='align-middle d-none d-lg-table-cell'>
                <StatusBox
                    checked={props.todo.done}
                    todo={props.todo}
                    onClick={props.onUpdateStatus} />
                <span className='margin-left-10'>{props.todo.name}</span>
            </td>
            <td className='align-middle d-none d-lg-table-cell'>
                <Progress
                    todo={props.todo}
                    onSave={props.onUpdateProgress} />
            </td>
            <td className='align-middle d-none d-lg-table-cell'>
                {editBtn}
                <ProgressTimer
                    todo={props.todo}
                    onStart={props.onTimerStart}
                    onPause={props.onTimerPause}
                    onReset={props.onTimerReset}
                    onUpdateProgress={props.onUpdateProgress}
                    seconds={props.seconds} 
                    targetSeconds={props.targetSeconds} 
                    />
            </td>
            <td colSpan='3' className='align-middle d-lg-none d-md-table-cell'>
                    <table className='mobile-inside'>
                        <tbody>
                            <tr>
                                <td className='align-middle first'>
                                    <StatusBox
                                        checked={props.todo.done}
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
                                    <Progress
                                        todo={props.todo}
                                        onSave={props.onUpdateProgress} />
                                </td>
                            </tr>
                            <tr className={hiddenRowId + ' collapse'}>
                                <td colSpan='2' className='align-middle'>
                                    {editBtn}
                                    <ProgressTimer
                                        todo={props.todo}
                                        onStart={props.onTimerStart}
                                        onPause={props.onTimerPause}
                                        onReset={props.onTimerReset}
                                        onUpdateProgress={props.onUpdateProgress}
                                        seconds={props.seconds} 
                                        targetSeconds={props.targetSeconds} 
                                        />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
        </tr>
                );
            }
            
export default TodoDaily;