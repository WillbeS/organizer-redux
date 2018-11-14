/////////////////////////////// App Helper Functions /////////////////////////////////////
// Temporary here but when grow too many will separate them by functionality/components //
//////////////////////////////////////////////////////////////////////////////////////////
class AppHelper {
    //(to go in TodoHelper)
    static changeDeadline(oldDeadline, repeat) {
        if(repeat === 0) {
            return null;
        }

        let d = new Date(oldDeadline);
        let newDeadline = new Date(d.setDate(d.getDate() + repeat));

        return newDeadline.toISOString();
    }

    static deadlineIsInPast(oldDeadline) {
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        let d = new Date(oldDeadline);
        d.setHours(0, 0, 0, 0);

        return d < today;
    }

    static getDateNoHoursISO(date) {
        date.setHours(2, 0, 0, 0);
        return date.toISOString();
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