const io = require('./server');

module.exports = (socket) => {
    console.log("Socket ID " + socket.id);
}