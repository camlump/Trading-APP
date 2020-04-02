const mongoose = require('./connection.js')


const Resource = new mongoose.Schema({
    name:String,
    desctiption: String,
    image: String,
    URL:String
})


module.exports = mongoose.model('Resource', Resource)