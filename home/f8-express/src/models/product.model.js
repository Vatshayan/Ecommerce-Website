const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    id: Number,
    retailerId: Number,
    code: String,
    barCode: String,
    name: String,
    fullName: String,
    categoryId: Number,
    categoryId2: ObjectId,
    categoryName: String,
    allowsSale: Boolean,
    type: Number,
    hasVariants: Boolean,
    basePrice: Number,
    conversionValue: Number,
    isActive: Boolean,
    isLotSerialControl: Boolean,
    modifiedDate: Date,
    createdDate: Date,
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel
