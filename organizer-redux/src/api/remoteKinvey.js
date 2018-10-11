import $ from 'jquery';
import Auth from '../components/users/Auth';

const remoteKinvey = (() => {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_H1L5OCFUW'; // APP KEY HERE
    const APP_SECRET = '338746648e3b4bfa8e83a8ac221a1acc'; // APP SECRET HERE

    function makeAuth(auth) {
        if (auth === 'basic') {
            return `Basic ${btoa(APP_KEY + ":" + APP_SECRET)}`;
        } else {
            let token = Auth.getToken();
            return `Kinvey ${token}`
        }
    }

    // request method (GET, POST, PUT)
    // kinvey module (user/appdata)
    // url endpoint
    // auth
    function makeRequest(method, module, endpoint, auth) {
        return {
            url: BASE_URL + module + '/' + APP_KEY + '/' + endpoint,
            method: method,
            headers: {
                'Authorization': makeAuth(auth),
                'Content-Type': 'application/json'
            }
        }
    }

    function get(module, endpoint, auth) {
        //console.log(makeRequest('GET', module, endpoint, auth));
        return $.ajax(makeRequest('GET', module, endpoint, auth)).catch(handleError);
    }

    function post(module, endpoint, auth, data) {
        let obj = makeRequest('POST', module, endpoint, auth);
        if (data) {
            obj.data = JSON.stringify(data);
        }

        return $.ajax(obj);
    }

    function update(module, endpoint, auth, data) {
        let obj = makeRequest('PUT', module, endpoint, auth);
        obj.data = JSON.stringify(data);
        return $.ajax(obj).catch(handleError);
    }

    function remove(module, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', module, endpoint, auth)).catch(handleError);
    }

    function handleError(reason) {
        let errorData = { error: reason.responseJSON.description }
        return  new Promise((resolve, rejcet) => resolve(errorData));
    }

    return {
        get,
        post,
        update,
        remove
    };
})();

export default remoteKinvey;