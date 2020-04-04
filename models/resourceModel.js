const mongoose = require('./connection.js')


const Resource = new mongoose.Schema({
    name:String,
    
    description: String,
    
    image: String,
    
    URL: String,
})


module.exports = mongoose.model('Resource', Resource)