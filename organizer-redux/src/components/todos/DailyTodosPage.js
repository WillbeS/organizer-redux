import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDaily, fetchCompleted, editTodo, deleteTodo } from '../../actions/todoActions';
import actionTypes from '../../constants/actionTypes';
import toastr from 'toastr';
import AppHelper from '../common/AppHelper';
//import TodoHelper from './TodoHelper';
import { Link } from 'react-router-dom';
import DailyTodosList from './DailyTodosList';
import CompletedTodosList from './CompletedTodosList';

class DailyTodosPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCompleted: false
        }

        this.onUpdateStatus = this.onUpdateStatus.bind(this);
        this.onUpdateProgress = this.onUpdateProgress.bind(this);
        this.onShowCompleted = this.onShowCompleted.bind(this);
        this.onHideCompleted = this.onHideCompleted.bind(this);
    }

    componentDidMount() {
        //May need this if decide to have separate action types for all fetches, right now it's useless
        if (this.props.remote === actionTypes.TODOS_FETCHED) {
            //return;
        }

        this.loadDailyTodos();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error) {
            toastr.error(newProps.error);
            return;
        }

        if (newProps.remote === actionTypes.TODOS_FETCHED) {
            //Do deadline check
            for (const key in newProps.data) {
                const todo = newProps.data[key];
                if (AppHelper.deadlineIsInPast(todo.deadline)) {
                    todo.deadline = AppHelper.getDateNoHoursISO(new Date());
                    todo.noncompleted_count++;
                    this.props.editTodo(key, todo);
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
        if (todo.complete_date) {
            // change it to false (uncomplete)
            todo.deadline = AppHelper.getDateNoHoursISO(new Date());
            todo.completed_count--;
            todo.complete_date = null;
        } else {
            console.log('Want to set it to complete');
            //change it to true (complete)
            todo.deadline = AppHelper.changeDeadline(todo.deadline, todo.Repeat);
            todo.completed_count++;
            todo.complete_date = AppHelper.getDateNoHoursISO(new Date());
        }

        this.props.editTodo(todo._id, todo);
    }

    onUpdateProgress(id, newProgress) {
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


    render() {
        const completedBtnLabel = this.state.showCompleted ? 'Hide completed' : 'Show completed';
        const completedHandler = this.state.showCompleted ? this.onHideCompleted : this.onShowCompleted;

        return (
            <div>
                <h1>Daily Todos</h1>
                <Link to='/todo/add' className='btn btn-dark'>Add Todo</Link>
                <hr />
                <DailyTodosList
                    data={this.props.data}
                    onEditClick={this.onShowUpdateHandler}
                    onUpdate={this.onUpdateHandler}
                    onDeleteClick={this.onDeleteHandler}
                    onUpdateStatus={this.onUpdateStatus}
                    onUpdateProgress={this.onUpdateProgress} />
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