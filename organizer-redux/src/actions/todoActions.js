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

export { fetchAll, createTodo, editTodo, deleteTodo };