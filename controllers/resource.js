const express = require('express')

const Resource = require('../models/resourceModel')

const resourceRouter = express.Router()

resourceRouter.get('/', (req, res)=>{
    Resource.find().then((resources)=>{
        res.json(resources)
    })
})



module.exports = {
    resourceRouter
}