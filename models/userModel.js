const mongoose = require('./connection.js')

const User = new mongoose.Schema({
    name: String,

    city: String,

    Email: String,
    
    accountBalance: Number,
})


module.exports = mongoose.model('User', User)