const mongoose = require('mongoose')

const collageSchema = mongoose.Schema({
    name :{
        type : String
    },
    email : {
        type : String
    },
    location : {
        type : String
    }
},{timestamps : true})

const collage = mongoose.model('collage', collageSchema)

module.exports = collage ;