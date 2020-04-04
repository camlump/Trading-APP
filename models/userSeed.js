const User = require('./userModel')


const newUser = [
    {
        name: "Cameron Lumpkin",
        city: "Atlanta",
        State: "GA",
        accountBalance: 0,

    },
    {
        name: "Bugs Bunny",
        city: "Atlanta",
        state: "GA",
        accountBalance: 200,
    },
];


User.deleteMany().then(()=>{
    return User.create(newUser);
}).then(()=>{
    console.log('Database seeded')
})