const Userpost = require('../model/model');
const Userreg = require('../model/userreg');
const jwt = require('jsonwebtoken');

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

// login code
const uLogin = async (req,res) => {
try{
  const logUser = new Userreg ({
    uemail:req.body.uemail,
    upassword:req.body.upasswords
  })
  const user = await logUser.findOne({uemail, upassword});
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const isPasswordValid = await user.comparePassword(upassword);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user._id }, 'secret_key', {
    expiresIn: '1h',
  });

  res.json({ token });
} catch (err) {
  res.status(500).json({ error: 'Login failed' });
}
  

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

// User Login and SignUp Backend

const usrLogin = async (req, res) => {
const {uemail, upassword} = req.body

try{
   const check = await Userreg.collection.findOne({uemail:uemail})
   if (check){
    res.json("user exist");
   }
   else{
    res.json("not exist");
   }
}
catch(err){
res.json("not exist");
}

}

const usrSignup = async (req, res) => {
  const {ufname, ulname,uemail, upassword, age } = req.body
  const dataa = {
    ufname:ufname,
    ulname:ulname,
    uemail: uemail,
    upassword:upassword,
    age:age
  }
  
  try{
     const check = await Userreg.collection.findOne({uemail:uemail})
     if (check){
      res.json("user exist");
     }
     else{
      res.json("not exist:New user added");
      await Userreg.collection.insertMany([dataa])
     }
  }
  catch(err){
  res.json("not exist");
  }
  
  }


module.exports = {insertPost, showPost, insertUser, showUsers, uLogin, usrSignup, usrLogin};
