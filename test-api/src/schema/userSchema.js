const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;

const userSchema = mongoose.Schema({
   Name:{
    type:String
   },
   password:{
    type:String
   },
   Number:{
    type:Number
   },
   Age:{
    type:Number
   },
   Username:{
    type:String
   },
   Sex:{
    type:String
   },
   Location:{
    type:String
   }

},
{
    timestamps:true
}

);
  
const user = mongoose.model('user', userSchema);
module.exports = user;