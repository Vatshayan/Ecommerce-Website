'use strict';

var self = (module.exports = {
    checkMissingKey: (obj, objCheck) => {
        console.log('checkMissingKey>>>>', obj);
        for (let i = 0; i < objCheck.length; i++) {
            if (!obj.hasOwnProperty(objCheck[i])) {
                return objCheck[i];
            }
        }

        return 'okay';
    },
});
