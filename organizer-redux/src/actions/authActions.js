import UserService from '../services/UserService';

function loginSuccess(data) {
    return {
        type: 'LOGIN_SUCCESS',
        data
    };
}

//TODO - maybe this is not the best way and place?
function handleError(err) {
    return {
        type: 'ERROR',
        err
    }
}

function loginAction(username, password) {
    return (dispatch) => {
        return UserService.login(username, password)
            .then(data => {
                dispatch(loginSuccess(data));
            }).catch(err => {
                dispatch(handleError(err))
            });
    };
}

export { loginAction }