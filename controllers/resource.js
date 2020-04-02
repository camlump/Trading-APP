const express = require('express')

const Resource = require('../models/resourceModel')

const resourceRouter = express.Router()

resourceRouter.get('/', (req, res)=>{
    Resource.find().then((resources)=>{
        res.json(resources)
    });
});

resourceRouter.get('/:resourceId', (req, res)=>{
    Resource.findById(req.params.resourceId).then((resource)=>{
        res.json(resource)
    });
});

resourceRouter.post('/', (req, res)=>{
    Resource.create(req.body).then(()=>{
       res.status(200).end() 
    });
});

resourceRouter.put('/:resourceId', (req, res)=>{
    Resource.findByIdAndUpdate(req.params.resourceId, req.body).then(()=>{
        res.status(200).end()
    });
});

resourceRouter.delete('/:resourceId', (req, res)=>{
    Resource.findByIdAndDelete(req.params.resourceId).then(()=>{
        res.status(200).end()
    })
})



module.exports = {
    resourceRouter
}