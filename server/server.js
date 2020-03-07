const express = require('express')
const app = express()
const http = require('http').createServer(app);
const port = process.env.PORT || 3000;
const path = require("path");
const io = require('socket.io')(http);
const publicPath = path.join(__dirname + '/../client');
let clients = new Map(); // key: socket, value: peerID
let rooms = new Map(); // key: freq, value: peerID (PeerID of the master is a room)
const frequencies = [];
for (let i = 0; i < 100; i++) {
    frequencies.push(2000 + 100 * i)

}
app.use(express.static(publicPath));

io.on('connection', function (socket) {

    socket.on('peerIDmsg', function (peerID) {
        clients.set(socket, peerID)
        console.log('💞 a user connected with following ID: ' + peerID);
        // socket.broadcast.emit('peerIDmsg-Other', msg)
    });
    socket.on('imMaster', function (peerID) {
        let freq = frequencies[rooms.size];
        if (rooms.has(freq)) {  //cheking inf there is already
            for (let i = 0; i < frequencies.length; i++) {
                if (!rooms.has(frequencies[i])) {
                    rooms.set(frequencies[i], peerID);
                    socket.emit('frequencyToPlay', freq);
                    console.log("👨‍👩‍👧‍👦 Room created with " + peerID + " as Master with " + freq + "Hz")
                    break;
                }
            }
        }
        else {
            let hasAlreadyRoom = false
            for (let peerIDInRoom of rooms.values()) {
                hasAlreadyRoom = peerIDInRoom == peerID
            }
            if (hasAlreadyRoom) {
                console.log("didn't create a room bc there is already one")
            }
            else {
                rooms.set(freq, peerID);
                socket.emit('frequencyToPlay', freq);
                console.log("👨‍👩‍👧‍👦 Room created with " + peerID + " as Master with " + freq + "Hz")

            }
        }

    });
    socket.on('foundFreq', function (freq) {
        if (rooms.has(freq)) {
            let room = rooms.get(freq)
            socket.emit('foundFreq', room)
            socket.join(room)
            console.log("🙇🏾‍♂️ a Slave has joined the Room of: " + room)
        } else {
            socket.emit('foundFreq', false)
        }
    });
  
    socket.on('disconnect', function () {
        console.log("💔 user disconnected " + clients.get(socket))
        rooms.forEach((peerID, freq) => {
            if (peerID == clients.get(socket)) {
                rooms.delete(freq);
                console.log("😵😵 deleted Room from Master: " + peerID);
            }
        }

        );


    });
});

http.listen(port, () => console.log(`👂 Example app listening on port ${port}!`));

