import actionTypes from '../constants/actionTypes';

export function listReducer(state = { data: {}, remote: null, error: null, changes: 0 }, action) {
    let newState = null;
    state.changes++;
    switch (action.type) {
        case actionTypes.LOGOUT_SUCCESS:
            return { data: {}, remote: null, error: null };
        case actionTypes.LIST_CREATED:
            newState = Object.assign({}, state, { remote: actionTypes.LIST_CREATED, error: null });
            newState.data[action.data._id] = action.data;
            return newState;
        case actionTypes.LIST_UPDATED:
            newState = Object.assign({}, state, { remote: actionTypes.LIST_UPDATED, error: null });
            newState.data[action.data._id] = action.data;
            return newState;
        case actionTypes.LIST_DELETED:
            newState = Object.assign({}, state, { remote: actionTypes.LIST_DELETED, error: null });
            deleteData(newState.data, action.id);
            return newState;
        case actionTypes.FETCH_LISTS_SUCCESS:
            return Object.assign({}, state, { data: storeData(action.data), remote: actionTypes.FETCH_LISTS_SUCCESS, error: null });
        case actionTypes.REMOTE_ERROR:
            //TODO - decide the best place to handle remote errors
            return Object.assign({}, state, { error: action.message });
        default:
            return state;
    }
}

function storeData(data) {
    let store = {};
    data.forEach(element => {
        store[element._id] = element;
    });

    return store;
}

//Can be used on both objects and arrays
function deleteData(data, key) {
    if (!data.hasOwnProperty(key)) {
        return;
    }

    if (isNaN(parseInt(key)) || !(data instanceof Array)) {
        delete data[key];
    } else {
        data.splice(key, 1);
    }
}