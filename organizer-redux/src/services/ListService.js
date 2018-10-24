import remoteKinvey from '../api/remoteKinvey';

const COLLECTION_NAME = 'lists';

class ListService {
    static create(data) {
        return remoteKinvey.post('appdata', COLLECTION_NAME, 'kinvey', data);
    }

    static getAll() {
        return remoteKinvey.get('appdata', COLLECTION_NAME, 'kinvey');
    }
}

export default ListService;