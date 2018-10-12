import actionTypes from '../constants/actionTypes';

export function loginReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOGGIN_SUCCES:
            return Object.assign({}, state, { success: true, error: false });
        case actionTypes.AUTH_ERROR:
            return Object.assign({}, state, { success: false, error: action.message });
        default:
            return state;
    }
}