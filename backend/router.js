const { insertPost, showPost, showUsers, insertUser } = require('./controller/controller');

const router = require('express').Router();

router.get('/hi', function (req, res){
    res.send("we are planning to build product api");
});

router.post('/addpost', insertPost);

router.get('/allposts', showPost);

router.post('/adduser',insertUser);

router.get('/allusers', showUsers);

module.exports = router;