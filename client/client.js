var peer = new Peer({ key: 'lwjd5qra8257b9' }); //maybe you should get yer own key eh?
const socket = io();
let connections = [];
let timeOnSend;
let myRole;
let mySketch;


socket.on('peerIDmsg-Other', function (msg) {
    let peerIDs = connections.map((connection) => { return connection.peer }) //checking if we already have this Connection
    if (!peerIDs.includes(msg)) {
        let conn = peer.connect(msg);
        setupConn(conn);
    }
})
socket.on('frequencyToPlay', function (freq) {
    console.log("〰️ I have to play at " + freq + "Hz now")
    frequencyToPlay = freq;
})
peer.on('connection', function (recivedConn) {
    if (!alreadyHaveConnection(recivedConn)) {
        setupConn(recivedConn);
    }
});

peer.on('open', function (id) {
    console.log('🆔 My peer ID is: ' + id);
    socket.emit('peerIDmsg', id)
    // $("body").append(`<div>my peer id is: ${id}</div>`)
});
peer.on('disconnected', function () {
    console.log("⚰️ Peer-Server disconnected")
});

function alreadyHaveConnection(newConnection) { //checking if we already have this Connection
    let peerIDs = connections.map((connection) => { return connection.peer })
    return peerIDs.includes(newConnection.peer)
}

function setupConn(recivedConn) {
    console.log("💌 I recived a Connection Object from: " + recivedConn.peer);
    connections.push(recivedConn);
    let conn = recivedConn;
    conn.on('open', function () {
        conn.send("Hi my Peer ID is: " + peer.id);
        conn.on('data', function (data) {
            console.log('📬 Received: ', data);
            if (data == "ping") {
                conn.send("pong")
                console.log("🏓 pong!")
            }
            if (data == "pong") {
                let timeTook = performance.now() - timeOnSend
                console.log("🏓 Ping pong took " + timeTook + "ms")
                // $("body").append(`<div class="ping">Ping took this long : ${timeTook}</div>`)
            }
        });
        // $("body").append(`<div class="msg" id="${conn.peer}">I'm connected to: ${conn.peer}</div>`)
        console.log("💞 I now have a open connection to " + conn.peer);
    })
    conn.on('close', function () {
        console.log("💔 Connection lost to " + conn.peer)
        $(`#${conn.peer}`).remove();
    })
    conn.on('error', function (err) {
        console.log("⛔ Connection error: " + err)
    })

}


$("body").append("<div class='ping'>ping</div>");

$("body").append("<div id='master'>Master</div>");
$("body").append("<div id='slave'>Slave</div>");

$(".ping").click(function () {
    if (connections.length != 0) {
        connections.forEach(conn => {
            // Send messages
            console.log("🏓 i send a ping")
            timeOnSend = performance.now();
            conn.send('ping');
        });
    }
    else {
        $(".ping").text("Sorry I got no connection to a other Peer :( Try again by klicking on me!");
    }
});

$("#slave").click(function () {
    console.log("🙇🏾‍♂️ I'm a SLAVE now")
    mySketch = new p5(slaveSketch)
    audioContext  = new AudioContext();
    // Older browsers might not implement mediaDevices at all, so we set an empty object first
    if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
    }

    // Some browsers partially implement mediaDevices. We can't just assign an object
    // with getUserMedia as it would overwrite existing properties.
    // Here, we will just add the getUserMedia property if it's missing.
    if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {

            // First get ahold of the legacy getUserMedia, if present
            var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            // Some browsers just don't implement it - return a rejected promise with an error
            // to keep a consistent interface
            if (!getUserMedia) {
                return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
            }

            // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
            return new Promise(function (resolve, reject) {
                getUserMedia.call(navigator, constraints, resolve, reject);
            });
        }
    }

    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        .then(function (stream) {
            console.log(stream)
            streamObj = audioContext.createMediaStreamSource(stream);
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });
    /*
        audioContext  = new AudioContext();
    const handleSuccess = function(stream) {
        console.log(stream)
        streamObj = audioContext.createMediaStreamSource(stream);
      };
      navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(handleSuccess)
    .catch(function(err) {
       console.log("Catch of getUserMedia" + err)
      });*/
});

$("#master").click(function () {
    console.log("👨🏼‍🌾 I'm the MASTER now")
    socket.emit('imMaster', peer.id)
});

// Stack overflow anwser for mobile logging from Marcus Hughes - Jan 22 2018
// Reference to an output container, use 'pre' styling for JSON output
var output = document.createElement('console');
document.body.appendChild(output);

// Reference to native method(s)
var oldLog = console.log;

console.log = function (...items) {

    // Call native method first
    oldLog.apply(this, items);

    // Use JSON to transform objects, all others display normally
    items.forEach((item, i) => {
        items[i] = (typeof item === 'object' ? JSON.stringify(item, null, 4) : item);
    });
    output.innerHTML += items.join(' ') + '<br />';
    output.scrollTop = output.scrollHeight;
};
//end of mobile console

