const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const keys = require('./config/keys')
const ErrorHandler = require('./tools/errorHandler')

const artistsRoutes = require('./routes/artists')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api/artists', artistsRoutes)

module.exports = app





mongoose.connect(keys.mongoURI)
     .then(() => console.log('MongoDB connected.'))
     .catch(error => console.log(error))

module.exports = app