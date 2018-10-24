import ListService from '../services/ListService';
import actionTypes from '../constants/actionTypes';
import remoteKinvey from '../api/remoteKinvey';

function createSuccess(data) {
    return {
        type: actionTypes.LIST_CREATED,
    };
}

function fetchSuccess(data) {
    return {
        type: actionTypes.FETCH_LISTS_SUCCESS,
        data
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
                dispatch(createSuccess());
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(remoteError(msg))
            });
    };
}

function fetchAll() {
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

export { createList, fetchAll };