import actionTypes from '../constants/actionTypes';

export function listReducer(state = {data: [], remote: null, error: null}, action) {
    switch (action.type) {
        case actionTypes.LIST_CREATED:
            return Object.assign({}, state, { remote: actionTypes.LIST_CREATED, error: null });
        case actionTypes.FETCH_LISTS_SUCCESS:
            return Object.assign({}, state, { data: action.data, remote: actionTypes.FETCH_LISTS_SUCCESS, error: null });
        case actionTypes.REMOTE_ERROR:
        //TODO - decide the best place to handle remote errors
            return Object.assign({}, state, { error: action.message });
        default:
            return state;
    }
}