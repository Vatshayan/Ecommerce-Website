'use strict';
var self = module.exports = {
    checkLogin: (req, res, next) => {

        console.log('middleware req.session.user>>', req.session.user);
        if(req.session.user){
            return next();
        }
        return res.redirect('/login')
        
    }
}