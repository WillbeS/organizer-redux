import UserService from '../services/UserService';
import remoteKinvey from '../api/remoteKinvey';
import Auth from '../components/users/Auth';
import actionTypes from '../constants/actionTypes';

function loginSuccess() {
    return {
        type: actionTypes.LOGGIN_SUCCESS,
    };
}

function logoutSuccess() {
    return {
        type: actionTypes.LOGOUT_SUCCESS,
    };
}

function authError(msg) {
    return {
        type: actionTypes.AUTH_ERROR,
        message: msg
    }
}

function requestAuthentication() {
    return {
        type: actionTypes.AUTH_REQUEST
    }
}

function login(username, password) {
    return (dispatch) => {
        return UserService.login(username, password)
            .then(data => {
                Auth.authenticateUser(data._kmd.authtoken);
                dispatch(loginSuccess());
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(authError(msg))
            });
    };
}

function register(username, password) {
    return (dispatch) => {
        return UserService.register(username, password)
            .then(data => {
                Auth.authenticateUser(data._kmd.authtoken);
                dispatch(loginSuccess());
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(authError(msg))
            });
    };
}



function logout() {
    return (dispatch) => {
        return UserService.logout()
            .then(data => {
                Auth.deauthenticateUser();
                dispatch(logoutSuccess());
            }).catch(err => {
                const msg = remoteKinvey.handleError(err);
                dispatch(authError(msg))
            });
    };
}
export { login, register, logout, requestAuthentication }