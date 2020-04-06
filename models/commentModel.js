const mongoose = require('./connection')

const Comment = new mongoose.Schema({
    name: String,

    description: String
})

module.exports = mongoose.model('Comment', Comment)