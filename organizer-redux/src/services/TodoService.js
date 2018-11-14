import remoteKinvey from '../api/remoteKinvey';

const COLLECTION_NAME = 'todos';

class TodoService {
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

    static getDaily(date) {
        ///appdata/your-app-id/your-collection?query={"your-date-property":{"$gt":"2010-04-29"}}
        const query = `?query={"deadline":{"$lte":"${date}"}}`;
        return remoteKinvey.get('appdata', COLLECTION_NAME + query, 'kinvey');
    }

    static getAllByList(listId) {
        const query = `?query={"list_id":"${listId}"}`;
        return remoteKinvey.get('appdata', COLLECTION_NAME + query, 'kinvey');
    }

    static getCompleted(date) {
        const query = `?query={"complete_date":"${date}"}`;
        return remoteKinvey.get('appdata', COLLECTION_NAME + query, 'kinvey');
    }

    static getById(id) {
        return remoteKinvey.get('appdata', COLLECTION_NAME + `/${id}`, 'kinvey');
    }
}

export default TodoService;