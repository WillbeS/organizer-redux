import ListService from '../services/ListService';
import actionTypes from '../constants/actionTypes';
import remoteKinvey from '../api/remoteKinvey';

function createSuccess(data) {
    return {
        type: actionTypes.LIST_CREATED,
        data
    };
}

function editSuccess(data) {
    return {
        type: actionTypes.LIST_UPDATED,
        data
    }
}

function deleteSuccess(id) {
    return {
        type: actionTypes.LIST_DELETED,
        id
    }
}

function fetchSuccess(data) {
    return {
        type: actionTypes.FETCH_LISTS_SUCCESS,
        data
    }
}

function fetchedOneSuccess(list) {
    return {
        type: actionTypes.LIST_BY_ID_FETCHED,
        list
    }
}

function remoteError(msg) {
    return {
        type: actionTypes.REMOTE_ERROR,
        message: msg
    }
}

function createList(data) {
    return (dispatch) => {
        return ListService.create(data)
            .then(data => {
                dispatch(createSuccess(data));
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}


function editList(id, data) {
    return (dispatch) => {
        return ListService.edit(id, data)
            .then(data => {
                dispatch(editSuccess(data));
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}

function deleteList(id) {
    return (dispatch) => {
        return ListService.delete(id)
            .then(() => {
                dispatch(deleteSuccess(id));
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}

function fetchAll() {
    console.log('Fetching lists!!!')
    return (dispatch) => {
        return ListService.getAll()
            .then(data => {
                dispatch(fetchSuccess(data));
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}

function fetchOne(id) {
    return (dispatch) => {
        return ListService.getById(id)
            .then(data => {
                dispatch(fetchedOneSuccess(data));
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}

export { createList, fetchAll, fetchOne, editList, deleteList };