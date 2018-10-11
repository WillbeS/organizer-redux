import remoteKinvey from '../api/remoteKinvey';

class UserService {
    static register(username, password) {
        return remoteKinvey.post('user', '', 'basic', { username, password });
    }

    static login(username, password) {
        return remoteKinvey.post('user', 'login', 'basic', { username, password });
    }

    static logout() {
        return remoteKinvey.post('user', '_logout', 'kinvey');
    }
}

export default UserService;