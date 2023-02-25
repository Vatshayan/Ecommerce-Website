'use strict';
const _CONST = require('../config/constant');
const login_model = require('../models/login_model');
const md5 = require('md5');

var self = (module.exports = {
    function_register: async obj => {
        //insert vao login collection
        const _obj = {
            email: obj.email,
            password: md5(obj.password),
        };
        return login_model.create(_obj);
    },
    function_login: async obj => {
        //login collection
        const _obj = {
            email: obj.email,
            password: md5(obj.password),
        };
        return await login_model.findOne(_obj);
    },
});
