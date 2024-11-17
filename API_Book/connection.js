const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/book-store')
        console.log("Database connected successfully..")
    }catch(err){
        console.log(err)
    }
}
module.exports = connect;