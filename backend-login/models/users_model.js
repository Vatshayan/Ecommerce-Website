const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    email: { type: String, default: ''},
    phone: { type: String, default: ''},
    fullname: { type: String, default: ''},
    roles: {type: Array, default: []},
    status: { type: String, default: 'noactive'},
    type_regis: { type: String, default: 'WE'},

    deleteAt: { type: Date, default: Date.now},
    createAt: { type: Date, default: Date.now},
    updateAt: { type: Date, default: Date.now},
    action: { type: String, default: 'System'},
    
}, { collection: 'users' })

users.index({ email: 1}) //Nơi đánh index
module.exports = mongoose.model('users', users)