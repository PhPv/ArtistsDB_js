const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
        name:{
            type: String,
            required: true

        },
        style:{
            type: String,
            required: true

        },
        country:{
            type: String,
            required: true

        }

})

module.exports = mongoose.model('artist', artistSchema)