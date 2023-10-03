const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
// const app = express()
const port = 3030;
const cors = require('cors');
const dotenv = require('dotenv');
var bodyparser = require('body-parser');

// grid and multer for image saving

// const multer = require('multer');
// const grid = require('gridfs-stream');
// const gridstorage = require('multer-gridfs-storage');
// const sharp = require('sharp');


dotenv.config();
const app = express();
app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(router);



mongoose.connect(process.env.dbURL).then(()=> {
    console.log('applicaiton connected to database')
}).catch((err)=> {
    console.log(err);
})

// grid and multer process

// grid.mongo = mongoose.mongo;
// Grid.mongo = mongoose.mongo;
// const gfs = Grid(mongoose.connection.db);

// Configure Multer to use GridFS storage
// const storage = new GridFsStorage({
//   gfs,
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// const upload = multer({storage});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
