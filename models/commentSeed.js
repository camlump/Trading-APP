const Comment = require('./commentModel')

const newComments = [

            {
                name: "Cameron Lumpkin",
                description: "Welcome to my Website"
            },

            {
                name: "Bugs Bunny",
                description: "Hey"
            },


];


Comment.deleteMany().then(()=>{
    return Comment.create(newComments);
}).then(()=>{
    console.log('Database has seeded')
})