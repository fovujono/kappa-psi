
let app = require("http").createServer();
let io = module.exports.io = require('socket.io')(app);
let PORT = process.env.PORT || 4001;

const manager = require('./manager.js');

io.on('connection', manager)


app.listen(PORT ,(err) =>{
    if(err) throw err
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}`)
});
