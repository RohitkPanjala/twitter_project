const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
   upost:{
    type: 'string',
    required: true
   },
   pimage:{
    type: 'string',
    required: true
   }
})

module.exports = mongoose.model("Userpost", postSchema);