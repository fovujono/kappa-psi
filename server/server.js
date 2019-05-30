let app = require("http").createServer();
let io = module.exports.io = require('socket.io')(app);
let PORT = process.env.PORT || 4001;
// for the file upload
var express = require('express');
var expressApp = express();
var multer = require('multer')
var cors = require('cors');


const manager = require('./manager.js');

io.on('connection', manager)

// for the file upload
expressApp.use(cors())

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
},
filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
}
})

var upload = multer({ storage: storage }).single('file')

expressApp.post('/upload',function(req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
    }
    return res.status(200).send(req.file)

    })

});

app.listen(PORT ,(err) =>{
    if(err) throw err
    console.log(`🌎  ==> Server is now listening on PORT: ${PORT}`)
});

