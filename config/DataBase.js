const mongoose = require('mongoose')

//connect to database

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('connected to MONGODB'))
.catch(err=>console.error('Fail to connect database',err))

module.exports = mongoose 

