const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name :{
        type : String
    },
    description : {
        type : String
    },
    price : {
        type : String
    },
    // collage: { type: String },
    collage : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'collage'
    }
},{timestamps : true})

const course = mongoose.model('course', courseSchema)

module.exports = course ;