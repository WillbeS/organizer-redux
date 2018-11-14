import React from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { fetchOne, editTodo } from '../../actions/todoActions';
import actionTypes from '../../constants/actionTypes';

import TodoForm from './TodoForm';
//import AppHelper from '../common/AppHelper';
import FormHelper from '../common/forms/FormHelper';
import TodoHelper from './TodoHelper';

//// IMPORTANT //////////////////////
//// After successful edit need to redirect to the place it came from?? or not??
///// Need to decide ///////////////////////////////
class EditTodoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: null,
            error: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id

        const todo = this.props.data[id];

        if(todo) {
            this.setState({todo});
        } else {
            this.props.getById(id);
        }
    }

    componentWillReceiveProps(newProps) {
        //TODO - check best practice - is showing remote errors good?
        if (newProps.error) {
            toastr.error(newProps.error);
            this.props.history.push('/');
        }

        if (newProps.remote === actionTypes.TODO_BY_ID_FETCHED) {
            this.setState({ todo: newProps.todo });
        }

        if (newProps.remote === actionTypes.TODO_UPDATED) {
            const listId = newProps.todo.list_id;
            if (listId) {
                this.props.history.push('/list/view/' + listId);
            } else {
                this.props.history.push('/');
            }
            
        }
    }

    handleInputChange(event) {
        FormHelper.handleInputChange.bind(this)(event, 'todo');
        console.log(event.target);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!TodoHelper.isValidForm.bind(this)()) {
            return;
        }

        this.props.editTodo(this.state.todo._id, this.state.todo);
    }

    render() {
        return (
            <div>
                {!this.state.todo && <div>Loading...</div>}
                {this.state.todo &&
                    <div>
                        <h1>Create Todo</h1>
                        <TodoForm
                            allProps={true}
                            todo={this.state.todo}
                            onChange={this.handleInputChange}
                            submitValue='Edit'
                            onSubmit={this.handleSubmit}
                            error={this.state.error} />
                    </div>
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todo.selected,
        data: state.todo.data,
        remote: state.todo.remote,
        error: state.todo.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        editTodo: (id, data) => dispatch(editTodo(id, data)),
        getById: (id) => dispatch(fetchOne(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoPage);