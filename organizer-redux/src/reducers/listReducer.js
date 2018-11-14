import actionTypes from '../constants/actionTypes';
import AppHelper from '../components/common/AppHelper';

export function listReducer(state = { data: {}, remote: null, error: null, changes: 0 }, action) {
    let newState = null;
    state.changes++;
    switch (action.type) {
        case actionTypes.LOGOUT_SUCCESS:
            return { data: {}, remote: null, error: null, changes: 0 };

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
            AppHelper.deleteFromData(newState.data, action.id);
            return newState;

        case actionTypes.FETCH_LISTS_SUCCESS:
            return Object.assign({}, state, { data: AppHelper.storeDataByKey(action.data, '_id'), remote: actionTypes.FETCH_LISTS_SUCCESS, error: null });

        case actionTypes.LIST_BY_ID_FETCHED:
            return Object.assign({}, state, { selected: action.list, remote: actionTypes.LIST_BY_ID_FETCHED, error: null });

        case actionTypes.REMOTE_ERROR:
            //TODO - decide the best place to handle remote errors
            return Object.assign({}, state, { error: action.message });
        default:
            return state;
    }
}