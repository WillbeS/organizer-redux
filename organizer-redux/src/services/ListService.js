import remoteKinvey from '../api/remoteKinvey';

const COLLECTION_NAME = 'lists';

class ListService {
    static create(data) {
        return remoteKinvey.post('appdata', COLLECTION_NAME, 'kinvey', data);
    }

    static edit(id, data) {
        return remoteKinvey.update('appdata', COLLECTION_NAME + `/${id}`, 'kinvey', data);
    }

    static delete(id) {
        return remoteKinvey.remove('appdata', COLLECTION_NAME + `/${id}`, 'kinvey');
    }

    static getAll() {
        return remoteKinvey.get('appdata', COLLECTION_NAME, 'kinvey');
    }

    static getById(id) {
        return remoteKinvey.get('appdata', COLLECTION_NAME, 'kinvey');
    }
}

export default ListService;