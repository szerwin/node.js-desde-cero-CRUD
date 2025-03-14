const mongoose = require('mongoose')

const bookSchema= new mongoose.Schema(
    {
        title: String,
        author: String,
        genere: String,
        publications_date: String
    }
)

module.exports = mongoose.model('book', bookSchema)