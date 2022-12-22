const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./src/router')

const application = express()

application.use(express.json());

application.use(cors())

const db = () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect('mongodb://localhost:27017', (error, response) => {
            console.log(" db connected with : " + response.host + ':' + response.port)
            console.log(` Node Server started...\n Server Running on PORT : 1234 `)
        })
    } catch (error) { console.log(error.message) }
}
db();

application.use('/api/v1', (req,res,next) => {
    next()
},router)

application.listen(1234, ()=>{
    console.log('express server is running')
})
