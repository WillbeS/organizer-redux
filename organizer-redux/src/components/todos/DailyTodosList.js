import React from 'react';
import DailyTodo from './DailyTodo';

const DailyTodosList = (props) => {
    const data = props.data;
    let rows = Object.keys(data).map(key => {
        return <DailyTodo
            key={key}
            todo={data[key]}
            onUpdateStatus={props.onUpdateStatus}
            onUpdateProgress={props.onUpdateProgress}
            onEditClick={props.onEditClick}
            onTimerStart={props.onTimerStart}
            onTimerPause={props.onTimerPause} 
            onTimerReset={props.onTimerReset}
            seconds={props.seconds} 
            targetSeconds={props.targetSeconds} 
            />
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