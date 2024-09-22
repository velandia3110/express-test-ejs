const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petSchema = new Schema({
    name: String,
    description: String
})

//crear modelo
const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet