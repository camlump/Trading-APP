const User = require('./userModel')


const newUser = [
    {
        name: "Cameron Lumpkin",
        city: "Atlanta",
        state: "GA",
        accountBalance: 100000,
        stockShares: 0

    },
    {
        name: "Bugs Bunny",
        city: "Atlanta",
        state: "GA",
        accountBalance: 200,
        stockShares: 0
    },
];


User.deleteMany().then(()=>{
    return User.create(newUser);
}).then(()=>{
    console.log('Database seeded')
})