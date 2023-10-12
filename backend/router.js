const { insertPost, showPost, showUsers, insertUser, uLogin, usrSignup, usrLogin } = require('./controller/controller');

const router = require('express').Router();

router.get('/hi', function (req, res){
    res.send("we are planning to build product api");
});

router.post('/addpost', insertPost);

router.get('/allposts', showPost);

router.post('/adduser',insertUser);

router.get('/allusers', showUsers);

// router.get('/userlogin', uLogin);

// Login and Signup

router.post('/usersignup', usrSignup);
 
router.post('/userloggedin', usrLogin)


module.exports = router;