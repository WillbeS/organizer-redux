import actionTypes from '../constants/actionTypes';

export function todoReducer(state = { data: {}, remote: null, error: null, changes: 0 }, action) {
    let newState = null;
    state.changes++;
    switch (action.type) {
        case actionTypes.LOGOUT_SUCCESS:
            return { data: {}, remote: null, error: null, changes: 0 };

        case actionTypes.TODO_CREATED:
            newState = Object.assign({}, state, { remote: actionTypes.TODO_CREATED, error: null });
            newState.data[action.data._id] = action.data;
            return newState;

        case actionTypes.TODO_UPDATED:
            newState = Object.assign({}, state, { remote: actionTypes.TODO_UPDATED, error: null });
            newState.data[action.data._id] = action.data;
            return newState;

        case actionTypes.TODO_DELETED:
            newState = Object.assign({}, state, { remote: actionTypes.TODO_DELETED, error: null });
            deleteData(newState.data, action.id);
            return newState;

        case actionTypes.TODOS_FETCHED:
            return Object.assign({}, state, { data: storeData(action.data), remote: actionTypes.TODOS_FETCHED, error: null });

        case actionTypes.REMOTE_ERROR:
            return Object.assign({}, state, { error: action.message });

        default:
            return state;
    }
}

// Needs to be moved in helper file
function storeData(data) {
    let store = {};
    data.forEach(element => {
        store[element._id] = element;
    });

    return store;
}

// Can be used on both objects and arrays
// Needs to be moved in helper file
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