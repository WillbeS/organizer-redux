import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import {Link} from 'react-router-dom';

import { fetchAllByList, deleteTodo } from '../../actions/todoActions';
import { fetchOne } from '../../actions/listActions';
import actionTypes from '../../constants/actionTypes';
import StatsTodosList from '../todos/StatsTodosList';

class ViewListDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listId: null
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }


    componentDidMount() {
        if (this.props.remote === actionTypes.TODOS_FETCHED) {
            //return;
        }

        const listId = this.props.match.params.id;
        this.props.fetchOne(listId);
        this.props.fetchTodosByList(listId); // replace with fetch by listId 
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error) {
            toastr.error(newProps.error);
            //TODO redirect
            return;
        }

        if(newProps.listRemote === actionTypes.LIST_BY_ID_FETCHED &&
            newProps.remote === actionTypes.TODOS_BY_LIST_FETCHED) {
            const listId = newProps.list._id;
            this.setState({listId});
        }

        //TODO - preloader
    }

    onDeleteHandler(event, id) {
        this.props.deleteTodo(id);
    }

    render() {
        const list = this.props.list !== undefined ? this.props.list : null;
        console.log(list);
        return (
            <div>
            {this.state.listId && 
                <div>
                <h1>{list.name}</h1>
                <Link to={'/todo/add/' + this.state.listId} className='btn btn-dark'>Add Todo</Link>
                        <hr />
                        <StatsTodosList 
                            data={this.props.data}
                            onUpdate={this.onUpdateHandler}
                            onDeleteClick={this.onDeleteHandler} />
            </div>
            }
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.todo.dataByList,
        remote: state.todo.remote,
        error: state.todo.error,
        listRemote: state.list.remote,
        list: state.list.selected,
        //changes: state.todo.changes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTodosByList: (id) => dispatch(fetchAllByList(id)),
        fetchOne: (id) => dispatch(fetchOne(id)),
        deleteTodo: (id) => dispatch(deleteTodo(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewListDetailsPage);