const Resource = require('./resourceModel')



const newResource = [
    {
        name: 'New York Times',
        description: 'Stocks are going down',
        img: '#',
        URL:'fgsgsmsfbfmb;fbm',
    },

    {
        name : 'The future',
        description: 'Are we getting closer to flying cars',
        img: '#',
        URL: 'ndjfnflsnlnvlnv'
    }
]

Resource.deleteMany().then(()=>{
    return Resource.create(newResource);
}).then(()=>{
    console.log('Database seeded')
})
