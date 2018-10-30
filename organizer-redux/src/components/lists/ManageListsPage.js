import React, { Component } from 'react';
import { fetchAll } from '../../actions/listActions';
import { connect } from 'react-redux';
import actionTypes from '../../constants/actionTypes';
import ShowAllLists from './ShowAllLists';
import CreateListPage from './CreateListPage';
import { createList, editList, deleteList } from '../../actions/listActions';
import toastr from 'toastr';
import EditListPage from './EditListPage';

const MODE_CREATE = 'MODE_CREATE';
const MODE_READ = 'MODE_READ';
const MODE_UPDATE = 'MODE_UPDATE';
const MODE_DELETE = 'MODE_DELETE';

class ManageListsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: MODE_READ,
            list: {
                name: ''
            },
            error: ''
        }

        this.onShowCreateHandler = this.onShowCreateHandler.bind(this);
        this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
        this.onShowUpdateHandler = this.onShowUpdateHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    componentDidMount() {
        if (this.props.remote === actionTypes.FETCH_LISTS_SUCCESS) {
            return;
        }

        this.props.fetchAll();

    }

    componentWillReceiveProps(newProps) {
        if (newProps.error) {
            toastr.error(newProps.error);
            return;
        }

        if (newProps.remote === actionTypes.LIST_CREATED) {
            toastr.success('New list added successfully!');
            this.setState({ mode: MODE_READ });
        }

        if (newProps.remote === actionTypes.LIST_UPDATED) {
            toastr.success('The list was successfully updated!');
            this.setState({ mode: MODE_READ });
        }

        if (newProps.remote === actionTypes.LIST_DELETED) {
            toastr.success('The list was successfully deleted!');
            this.setState({ mode: MODE_READ });
        }
    }

    onChangeInputHandler(e) {
        this.setState({ list: { [e.target.name]: e.target.value } });
    }

    onShowCreateHandler(event) {
        this.setState({ mode: MODE_CREATE });
    }

    onShowUpdateHandler(e, list) {
        this.setState({ mode: MODE_UPDATE, list: {name: list.name}, id: list._id });
    }

    onDeleteHandler(e, id) {
        this.setState({ mode: MODE_DELETE });
        this.props.deleteList(id);
    }

    render() {
        return (
            <div>
                <h1>Manage Lists</h1>

                {this.state.mode === MODE_READ &&
                    <div>
                        <button
                            onClick={this.onShowCreateHandler}>
                            Add List
                        </button>
                        <hr />
                        <ShowAllLists 
                            data={this.props.data} 
                            editHandler={this.onShowUpdateHandler}
                            deleteHandler={this.onDeleteHandler} />
                    </div>
                }

                {this.state.mode !== MODE_READ &&
                    <button
                        onClick={() => (this.setState({mode: MODE_READ}))}>
                        Back to All Lists
                    </button>
                }

                {this.state.mode === MODE_CREATE &&
                    <CreateListPage
                        createList={this.props.createList}
                        list={this.state.list}
                        onChange={this.onChangeInputHandler} />
                }
                {this.state.mode === MODE_UPDATE &&
                    <EditListPage
                        editList={this.props.editList}
                        list={this.state.list}
                        id={this.state.id}
                        onChange={this.onChangeInputHandler}
                    />}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.list.data,
        remote: state.list.remote,
        error: state.list.error,
        changes: state.list.changes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAll: () => dispatch(fetchAll()),
        createList: (data) => dispatch(createList(data)),
        editList: (id, data) => dispatch(editList(id, data)),
        deleteList: (id) => dispatch(deleteList(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageListsPage);