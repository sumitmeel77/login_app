const mongoose = require('mongoose')

// creating mongoose schema 
const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    { collection: 'UserData' }
)
const ProductSchema = new mongoose.Schema(
    {
        imgUrl: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: String, required: true },
    },
    { collection: 'ProductData' }
)
const User = mongoose.model('user', UserSchema)
const Product = mongoose.model('product', ProductSchema)

module.exports = { User, Product }