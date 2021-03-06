import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDaily, fetchCompleted, editTodo, deleteTodo } from '../../actions/todoActions';
import actionTypes from '../../constants/actionTypes';
import toastr from 'toastr';
import AppHelper from '../common/AppHelper';
import { Link } from 'react-router-dom';
import DailyTodosList from './DailyTodosList';
import CompletedTodosList from './CompletedTodosList';

class DailyTodosPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCompleted: false,
            timer: null,
            seconds: 0,
            targetSeconds: 1800,
            autoStop: true,
        }

        this.url = 'https://pagafun.com/apps/sounds/lotr.mp3';
        this.audio = new Audio(this.url);
        this.repeatSound = 20;
        this.isPlaying = false;

        this.onUpdateStatus = this.onUpdateStatus.bind(this);
        this.onUpdateProgress = this.onUpdateProgress.bind(this);
        this.onShowCompleted = this.onShowCompleted.bind(this);
        this.onHideCompleted = this.onHideCompleted.bind(this);
        this.tick = this.tick.bind(this);
        this.onTimerStart = this.onTimerStart.bind(this);
        this.onTimerReset = this.onTimerReset.bind(this);
        this.onTimerPause = this.onTimerPause.bind(this);
    }

    componentDidMount() {
        if (this.props.remote === actionTypes.TODOS_FETCHED ||
            this.props.remote === actionTypes.COMPLETED_TODOS_FETCHED) {
            return;
        }

        console.log('Fetching daily todos');

        this.loadDailyTodos();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error) {
            toastr.error(newProps.error);
            return;
        }

        if (newProps.remote === actionTypes.TODOS_FETCHED) {

            //TODO - move this later in start of day set up
            //Do deadline check
            for (const key in newProps.data) {
                const todo = newProps.data[key];
                if (AppHelper.dateIsInPast(todo.deadline)) {
                    todo.deadline = AppHelper.getDateNoHoursISO(new Date());
                    todo.noncompleted_count++;
                    todo.total += todo.progress;
                    todo.progress = 0;
                    this.props.editTodo(key, todo);
                }

                if(AppHelper.dateIsInPast(todo.complete_date) && todo.done) {
                    todo.done = false;
                    todo.complete_date = null;
                    todo.progress = 0;
                    this.props.editTodo(todo._id, todo);
                }
            }
        }

        if (newProps.remote === actionTypes.TODO_UPDATED) {
            this.loadDailyTodos();
        }
    }

    loadDailyTodos() {
        const date = AppHelper.getDateNoHoursISO(new Date());
        this.props.fetchDaily(date);
        this.props.fetchCompleted(date);
    }

    onUpdateStatus(todo) {
        if (todo.done) {
            // change it to false (uncomplete)
            todo.deadline = AppHelper.getDateNoHoursISO(new Date());
            todo.completed_count--;
            todo.total -= todo.progress;
            todo.complete_date = null;
        } else {
            //change it to true (complete)
            todo.deadline = AppHelper.changeDeadline(todo.deadline, todo.Repeat);
            todo.completed_count++;
            todo.total += todo.progress;
            todo.complete_date = AppHelper.getDateNoHoursISO(new Date());
        }

        todo.done = !todo.done;
        this.props.editTodo(todo._id, todo);
    }

    onUpdateProgress(id, newProgress) {
        //console.log('Will update progress for id: ' + id);
        //console.log('New progress: ' + newProgress)
        let todo = this.props.data[id];
        todo.progress += newProgress;

        if (todo.progress < 0) todo.progress = 0;
        this.props.editTodo(id, todo);
    }

    onShowCompleted() {
        this.setState({ showCompleted: true });
        console.log('Need to render completed');
    }

    onHideCompleted() {
        this.setState({ showCompleted: false });
        console.log('Need to hide completed');
    }

    tick() {
        this.setState((state) => ({
            seconds: state.seconds + 1
          }));

        if(this.state.autoStop && this.state.seconds === this.state.targetSeconds) {
            this.audio.play();
            this.isPlaying = true;
        }

        if(this.state.autoStop && this.state.seconds === this.state.targetSeconds + this.repeatSound) {
            this.onTimerPause();
        }

    }

    onTimerStart() {
        clearInterval(this.state.timer);
        const timer = setInterval(this.tick, 1000);
        this.setState({timer});
    }

    onTimerPause() {
        if (this.isPlaying) {
            this.audio.pause();
            this.isPlaying = false;    
        }

        clearInterval(this.state.timer);
        this.setState({ timer: null });
    }

    onTimerReset() {
        clearInterval(this.state.timer);
        this.setState({ timer: null, seconds: 0 });
    }
    
    render() {
        //console.log('Daily Todos Page rendering');
        const completedBtnLabel = this.state.showCompleted ? 'Hide completed' : 'Show completed';
        const completedHandler = this.state.showCompleted ? this.onHideCompleted : this.onShowCompleted;

        return (
            <div>
                <h1>Daily Todos</h1>
                <Link to='/todo/add' className='btn btn-dark'>Add Todo</Link>
                <hr />
                <DailyTodosList
                    data={this.props.data}
                    onUpdate={this.onUpdateHandler}
                    onUpdateStatus={this.onUpdateStatus}
                    onUpdateProgress={this.onUpdateProgress}
                    onTimerStart={this.onTimerStart}
                    onTimerPause={this.onTimerPause} 
                    onTimerReset={this.onTimerReset} 
                    seconds={this.state.seconds}
                    targetSeconds={this.state.targetSeconds} />
                <hr />
                <button onClick={completedHandler} className='btn btn-info'>{completedBtnLabel}</button>
                {this.state.showCompleted && this.props.completed &&
                    <CompletedTodosList
                        data={this.props.completed}
                        onEditClick={this.onShowUpdateHandler}
                        onUpdate={this.onUpdateHandler}
                        onDeleteClick={this.onDeleteHandler}
                        onUpdateStatus={this.onUpdateStatus}
                        onUpdateProgress={this.onUpdateProgress} />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.todo.data,
        completed: state.todo.completed,
        remote: state.todo.remote,
        error: state.todo.error,
        changes: state.todo.changes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchDaily: (date) => dispatch(fetchDaily(date)),
        fetchCompleted: (date) => dispatch(fetchCompleted(date)),
        editTodo: (id, data) => dispatch(editTodo(id, data)),
        deleteTodo: (id) => dispatch(deleteTodo(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyTodosPage);