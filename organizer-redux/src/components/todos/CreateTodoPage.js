import React from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { createTodo } from '../../actions/todoActions';
import actionTypes from '../../constants/actionTypes';

import TodoForm from './TodoForm';
import AppHelper from '../common/AppHelper';
import FormHelper from '../common/forms/FormHelper';
import TodoHelper from './TodoHelper';

class CreateTodoPage extends React.Component {
    constructor(props) {
        super(props);
        const listId = this.props.match.params.listId ? this.props.match.params.listId : null;

        this.state ={
            todo: {
                name: '',
                type: 'minutes',
                list_id: listId,
                target: 30,
                progress: 0,
                done: false,
                Repeat: 0,
                completed_count: 0,
                noncompleted_count: 0,
                deadline: AppHelper.getDateNoHoursISO(new Date()),
                complete_date: null
            },
            error: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(newProps) {
        //TODO - check best practice - is showing remote errors good?
        if (newProps.error) {
            toastr.error(newProps.error);
            return;
        }

        if (newProps.remote === actionTypes.TODO_CREATED) {
            if(this.props.match.params.listId) {
                this.props.history.push('/list/view/' + this.props.match.params.listId);
            } else {
                this.props.history.push('/');
            }
            
        }
    }

    handleInputChange(event) {
        FormHelper.handleInputChange.bind(this)(event, 'todo');
    }

    handleSubmit(event) {
        event.preventDefault();
        if(!TodoHelper.isValidForm.bind(this)()) {
            return;
        }

        this.props.createTodo(this.state.todo);
    }

    render() {
        console.log(this.state.todo);
        return(
            <div>
                <h1>Create Todo</h1>
                <TodoForm
                    todo={this.state.todo}
                    onChange={this.handleInputChange}
                    submitValue='Add'
                    onSubmit={this.handleSubmit}
                    error={this.state.error} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        remote: state.todo.remote,
        error: state.todo.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createTodo: (data) => dispatch(createTodo(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodoPage);