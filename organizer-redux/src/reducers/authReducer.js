import actionTypes from '../constants/actionTypes';
import Auth from '../components/users/Auth';

export function authReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.AUTH_REQUEST:
            return Object.assign({}, state, { loggedIn: Auth.isUserAuthenticated(), error: false });
        case actionTypes.LOGGIN_SUCCESS:
            return Object.assign({}, state, { loggedIn: true, error: false });
        case actionTypes.LOGOUT_SUCCESS:
            return Object.assign({}, state, { loggedIn: false, error: false });
        case actionTypes.AUTH_ERROR:
            return Object.assign({}, state, { loggedIn: false, error: action.message });
        default:
            return state;
    }
}