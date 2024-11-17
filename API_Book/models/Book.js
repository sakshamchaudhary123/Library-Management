const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    bookName: { type:String },
    auther: { type:String }, 
    description: { type:String },
    publisher: { type:String },
    price: { type:Number },
    language: { type:String },
    ISBN: { type: String},
    quantity: { type: String},
    bookImage: { type: String},
    createdAt: Date,
    updatedAt: Date
})

BookSchema.plugin(timestamps,{ index: true });
module.exports = mongoose.model('Book',BookSchema)