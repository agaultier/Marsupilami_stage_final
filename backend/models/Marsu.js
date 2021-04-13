const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let marsuSchema = new Schema({
   name: String,
   email: String,
   password: String,
   age : Number,
   race: String,
   famille: String,
   nourriture: String,
   
}, {
   collection: 'marsu'
})

module.exports = mongoose.model('Marsu', marsuSchema)