const Resource = require('./resourceModel')



const newResource = [
    {
        name: 'New York Times',
        description: 'This Brooklyn Landlord Just Canceled Rent for Hundreds of Tenants',
        image: 'https://static01.nyt.com/images/2020/04/03/nyregion/00nyvirus-landlord/merlin_171230745_a362c45c-bde9-4151-a63c-2eb170ebc4f8-superJumbo.jpg?quality=90&auto=webp',
        URL:'https://www.nytimes.com/2020/04/03/nyregion/coronavirus-nyc-landlord-mario-salerno.html',
    },

    {
        name : 'Is Apple Really Serious About Sustainability?',
        description: 'Apple just put out a big PR campaign about its sustainability initiatives. Has the company made real progress in this regard or is this just more corporate “greenwashing?” And how are the other big tech companies addressing their carbon footprints? ',
        image: 'https://i2.wp.com/business-ethics.com/wp-content/uploads/2014/04/apple_5thAveHero_5x5_78_300dpi_111105.jpg?ssl=1',
        URL: 'https://www.nytimes.com/topic/company/apple-incorporated'
    }
]

Resource.deleteMany().then(()=>{
    return Resource.create(newResource);
}).then(()=>{
    console.log('Database seeded')
})
