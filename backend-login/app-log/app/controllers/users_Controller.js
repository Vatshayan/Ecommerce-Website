'use strict';
const _CONST = require('../config/constant');
const user_model = require('../models/users_model');

var self = (module.exports = {
    function_register_users: async obj => {
        //insert vao collection Users
        return user_model.create(obj);
    },
});
