import UserService from '../services/UserService';
import remoteKinvey from '../api/remoteKinvey';
import Auth from '../components/users/Auth';
import actionTypes from '../constants/actionTypes';

function loginSuccess(token) {
    return {
        type: actionTypes.LOGGIN_SUCCES,
    };
}

function authError(msg) {
    return {
        type: actionTypes.AUTH_ERROR,
        message: msg
    }
}

function loginAction(username, password) {
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

export { loginAction }