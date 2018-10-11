export function loginReducer(state = { success: false }, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            //todo - update session!!!
            //console.log(action.data._kmd.authtoken);
            let newState = Object.assign({}, state, { success: true });
            newState.token = action.data._kmd.authtoken;
            console.log(newState);
            return newState;
        default:
            return state;
    }
}