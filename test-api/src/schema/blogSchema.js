const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;

const blogSchema = mongoose.Schema({
   image:{
    type:String
   },
   title:{
    type:String
   },
   description:{
    type:String
   }
   

},
{
    timestamps:true
}

);
  
const blog = mongoose.model('blog', blogSchema);
module.exports = blog;