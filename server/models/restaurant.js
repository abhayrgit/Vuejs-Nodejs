const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    name:{type:String},
    address:{type:String},
    contact:{type:String}
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)