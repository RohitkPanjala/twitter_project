const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    ufname:{
     type: 'string',
     required: true
    },
    ulname:{
        type: 'string',
        required: true
       }, 
      uemail:{
        type: 'string',
        required: true
       },
       upassword:{
        type: 'string',
        required: true
       },
       age:{
        type: 'number',
        required: true
       }
 })

 module.exports = mongoose.model("Userreg",userSchema);