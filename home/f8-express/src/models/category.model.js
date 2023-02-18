const mongoose = require('mongoose')

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const CategorySchema = new Schema({
    id: Number,
    name: String,
});

const CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = CategoryModel
