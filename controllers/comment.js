const express = require('express')


const Comment = require('../models/commentModel.js')


const commentRouter = express.Router()


commentRouter.get('/', (req, res)=>{
    Comment.find().then((comments)=>{
        res.json(comments)
    });
});


commentRouter.get('/:commentId', (req, res)=>{
    Comment.findById(req.params.commentId).then((comment)=>{
        res.json(comment)
    });
});

commentRouter.post('/', (req, res)=>{
    Comment.create(req.body).then(()=>{
        res.status(200).end()
    })
})

commentRouter.put('/:commentId', (req, res)=>{
    Comment.findByIdAndUpdate(req.params.commentId, req.body).then(()=>{
        res.status(200).end()
    });
});

commentRouter.delete('/:commmentId', (req, res)=>{
    Comment.findByIdAndDelete(req.params.commentId).then(()=>{
        res.status(200).end()
    });
});


module.exports = {
    commentRouter
}