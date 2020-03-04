const express = require('express')
const app = express()
const http = require('http').createServer(app);
const port = 3000
const path = require("path");
const io = require('socket.io')(http);
const publicPath = path.join(__dirname + '/../client')
let rooms = [];
app.use(express.static(publicPath));

io.on('connection', function (socket) {

    socket.on('peerIDmsg', function (msg) {
        console.log('a user connected with following ID: ' + msg);
        socket.broadcast.emit('peerIDmsg-Other', msg)
    })
    
});

http.listen(port, () => console.log(`Example app listening on port ${port}!`));

