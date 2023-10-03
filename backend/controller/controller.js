const Userpost = require('../model/model');

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

module.exports = {insertPost, showPost};
