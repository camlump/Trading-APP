const express = require('express')

const User = require('../models/userModel.js')

const  userRouter = express.Router()

userRouter.get('/', (req, res)=>{
    User.find().then((users)=>{
        res.json(users)
    });
});
userRouter.get('/:userId', (req, res)=>{
    User.findById(req.params.userId).then((user)=>{
        res.json(user)
    });
});

userRouter.post('/',(req, res)=>{
    User.create(req.body).then(()=>{
        res.status(200).end();
    });
});

userRouter.put('/:userId', (req, res)=>{
    User.findByIdAndUpdate(req.params.userId, req.body).then(()=>{
        res.status(200).end();
    });
});

userRouter.delete('/:userId', (req, res)=>{
    User. findByIdAndDelete(req.params.userId).then(()=>{
        res.status(200).end();
    });
});
module.exports = {
    userRouter
}