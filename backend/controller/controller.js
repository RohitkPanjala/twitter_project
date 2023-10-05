const Userpost = require('../model/model');
const Userreg = require('../model/userreg');

const insertUser = (req, res) => {

  const ureg = new Userreg({
      ufname: req.body.ufname,
      ulname: req.body.ulname,
      uemail: req.body.uemail,
      upassword: req.body.upassword,
      age:req.body.age
  })

  ureg.save().then(function(err) {
      if (!err) {
        res.send("Successfully Registered to the DataBase.");
      } else {
        res.send(err);
      }
    });
}

const showUsers = (req,res) => {
  Userreg.find().then(function(err, posts){
     if(err){
         res.send(err);
     }
  })
 
 
 }


const insertPost = (req, res) => {

    const postt = new Userpost({
        upost: req.body.upost,
        pimage: req.body.pimage
    })

    postt.save().then(function(err) {
        if (!err) {
          res.send("Successfully Added to the DataBase.");
        } else {
          res.send(err);
        }
      });
}

const showPost = (req,res) => {
 Userpost.find().then(function(err, posts){
    if(err){
        res.send(err);
    }
 })


}

module.exports = {insertPost, showPost, insertUser, showUsers};
