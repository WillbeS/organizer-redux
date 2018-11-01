import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodosList';
import { fetchAll, createTodo, editTodo, deleteTodo } from '../../actions/todoActions';
import actionTypes from '../../constants/actionTypes';
import { crud } from '../../constants/app';
import CreateTodo from './CreateTodo';
import FormHelper from '../common/forms/FormHelper';
import toastr from 'toastr';
import TodoForm from './TodoForm';


class ManageTodosPage extends Component {
    constructor(props) {
        super(props);

        this.state = this.getDefaultState();

        this.onShowCreateHandler = this.onShowCreateHandler.bind(this);
        this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
        this.onCreateHandler = this.onCreateHandler.bind(this);
        this.onShowUpdateHandler = this.onShowUpdateHandler.bind(this);
        this.onUpdateHandler = this.onUpdateHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    componentDidMount() {
        if (this.props.remote === actionTypes.TODOS_FETCHED) {
            return;
        }

        this.props.fetchAll();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error) {
            toastr.error(newProps.error);
            return;
        }

        if (newProps.remote !== actionTypes.TODOS_FETCHED) {
            this.setState(this.getDefaultState);
        }
    }

    onChangeInputHandler(event) {
        FormHelper.handleInputChange.bind(this)(event, 'todo');
    }

    onShowCreateHandler(event) {
        this.setState({ mode: crud.MODE_CREATE });
    }

    onCreateHandler(event) {
        event.preventDefault();
        if(!this.isValidForm()) {
            return;
        }

        this.props.createTodo(this.state.todo);
    }

    onShowUpdateHandler(event, id) {
        const {name, type, target, progress, done} = this.props.data[id];
        const todo = {name, type, target, progress, done};
        this.setState({ mode: crud.MODE_UPDATE, todo, selectedTodo: id });
    }

    onUpdateHandler(event) {
        event.preventDefault();
        if(!this.isValidForm()) {
            return;
        }

        this.props.editTodo(this.state.selectedTodo, this.state.todo);
    }

    onDeleteHandler(event, id) {
        this.props.deleteTodo(id);
    }

    //TODO - figure s general method to valifate forms (look for some library maybe?)
    isValidForm() {
        const name = this.state.todo.name;
        const type = this.state.todo.type;

        let formIsValid = true;
        let error = '';

        if (name === '' || type === '') {
            error = 'All input fields are required!';
            formIsValid = false;
        }

        if (error) {
            this.setState({ error });
        }

        return formIsValid;
    }

    getDefaultState() {
        return {
            selectedTodo: null,
            todo: {
                name: '',
                type: 'Single',
                list_id: null,
                target: 1,
                progress: 0,
                done: false
            },
            error: '',
            mode: crud.MODE_READ
        }
    }

    render() {
        return (
            <div>
                <h1>Manage Todos Page</h1>
                {this.state.mode === crud.MODE_READ &&
                    <div>
                        <button
                            onClick={this.onShowCreateHandler}>
                            Add Todo
                        </button>
                        <hr />
                        <TodoList 
                            data={this.props.data}
                            onEditClick={this.onShowUpdateHandler}
                            onUpdate={this.onUpdateHandler}
                            onDeleteClick={this.onDeleteHandler} />
                    </div>
                }

                {this.state.mode !== crud.MODE_READ &&
                    <button
                        onClick={() => (this.setState({ mode: crud.MODE_READ }))}>
                        Back to All
                    </button>
                }

                {this.state.mode === crud.MODE_CREATE &&
                    <CreateTodo
                        onSubmit={this.onCreateHandler}
                        todo={this.state.todo}
                        onChange={this.onChangeInputHandler}
                        error={this.state.error} />
                }

                {this.state.mode === crud.MODE_UPDATE &&
                    <div>
                        <h2>Edit Todo</h2>
                        <TodoForm
                            todo={this.state.todo}
                            onChange={this.onChangeInputHandler}
                            submitValue='Edit'
                            onSubmit={this.onUpdateHandler}
                            error={this.state.error} />
                    </div>
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.todo.data,
        remote: state.todo.remote,
        error: state.todo.error,
        changes: state.todo.changes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAll: () => dispatch(fetchAll()),
        createTodo: (data) => dispatch(createTodo(data)),
        editTodo: (id, data) => dispatch(editTodo(id, data)),
        deleteTodo: (id) => dispatch(deleteTodo(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTodosPage);