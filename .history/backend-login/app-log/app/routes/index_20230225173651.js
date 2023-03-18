'use strict';
const index_Controller = require('../controllers/');
const middleware = require('../utils/middleware');

module.exports = function(app) {
    app.route('/api/test').get(index_Controller.test);
    app.route('/').get(index_Controller.home);
    app
        .route('/login')
        .get(index_Controller.login)
        .post(index_Controller.login);
    app
        .route('/profile')
        .get([middleware.checkLogin, index_Controller.profile])
        .post([middleware.checkLogin, index_Controller.profile]);
    // app.route('/register').get(index_Controller.register).post(index_Controller.register)
};
