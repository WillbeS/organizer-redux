/////////////////////////////// App Helper Functions /////////////////////////////////////
// Temporary here but when grow too many will separate them by functionality/components //
//////////////////////////////////////////////////////////////////////////////////////////
class AppHelper {
    //Generate date (to go in TodoHelper)
    static getDeadline(today =  true) {
        let d = new Date();
        if(!today) {
            // TODO - calculate date
        }

        return d.toISOString();
    }

    // Delete element from object|array regardless (to go in StoreHelper)
    static deleteFromData(data, key) {
        if (!data.hasOwnProperty(key)) {
            return;
        }
    
        if (isNaN(parseInt(key)) || !(data instanceof Array)) {
            delete data[key];
        } else {
            data.splice(key, 1);
        }
    }

    // Store data in associative array by given key (to go in StoreHelper)
    static storeDataByKey(data, key) {
        let store = {};
        data.forEach(element => {
            store[element[key]] = element;
        });
    
        return store;
    }
}

export default AppHelper;