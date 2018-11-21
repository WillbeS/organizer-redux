import TodoService from '../services/TodoService';
import actionTypes from '../constants/actionTypes';
import remoteKinvey from '../api/remoteKinvey';

function createSuccess(data) {
    return {
        type: actionTypes.TODO_CREATED,
        data
    };
}

function editSuccess(data) {
    return {
        type: actionTypes.TODO_UPDATED,
        data
    }
}

function deleteSuccess(id) {
    return {
        type: actionTypes.TODO_DELETED,
        id
    }
}

function fetchSuccess(data) {
    return {
        type: actionTypes.TODOS_FETCHED,
        data
    }
}

function fetchedNyListSuccess(data) {
    return {
        type: actionTypes.TODOS_BY_LIST_FETCHED,
        data
    }
}

function completedFetched(data) {
    return {
        type: actionTypes.COMPLETED_TODOS_FETCHED,
        data
    }
}

function fetchedOneSuccess(todo) {
    return {
        type: actionTypes.TODO_BY_ID_FETCHED,
        todo
    }
}

function remoteError(msg) {
    return {
        type: actionTypes.REMOTE_ERROR,
        message: msg
    }
}

function createTodo(data) {
    return (dispatch) => {
        return TodoService.create(data)
            .then(data => {
                dispatch(createSuccess(data));
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}


function editTodo(id, data) {
    return (dispatch) => {
        return TodoService.edit(id, data)
            .then(data => {
                dispatch(editSuccess(data));
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}

function deleteTodo(id) {
    return (dispatch) => {
        return TodoService.delete(id)
            .then(() => {
                dispatch(deleteSuccess(id));
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}

function fetchAll() {
    //console.log('Fetching todos');
    return (dispatch) => {
        return TodoService.getAll()
            .then(data => {
                dispatch(fetchSuccess(data));
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}

function fetchAllByList(listId) {
    return (dispatch) => {
        return TodoService.getAllByList(listId)
            .then(data => {
                dispatch(fetchedNyListSuccess(data));
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}

function fetchDaily(date) {
    //console.log('Fetching daily todos');
    return (dispatch) => {
        return TodoService.getDaily(date)
            .then(data => {
                dispatch(fetchSuccess(data));
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}

function fetchCompleted(date) {
    //console.log('Fetching completed todos');
    return (dispatch) => {
        return TodoService.getCompleted(date)
            .then(data => {
                dispatch(completedFetched(data));
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}

function fetchOne(id) {
    return (dispatch) => {
        return TodoService.getById(id)
            .then(data => {
                dispatch(fetchedOneSuccess(data));
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}

export { fetchAll, fetchDaily, fetchCompleted, fetchAllByList, fetchOne, createTodo, editTodo, deleteTodo };