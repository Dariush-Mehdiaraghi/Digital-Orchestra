//var peer = new Peer({ key: 'lwjd5qra8257b9' }); //maybe you should get yer own key eh?
let peer = new Peer(null, {
    debug: 2
});
const socket = io();
let connections = [];
let timeOnSend;
let myRole;
let mySketch;
let hasMaster = false
let polySynth
let ts
let delta
let deltaSliderVal = 0
socket.on('peerIDmsg-Other', function (msg) {
    if (!alreadyHaveConnection(msg)) {
        let conn = peer.connect(msg, { serialization: "json" });
        setupConn(conn);
    }
})
socket.on('frequencyToPlay', function (freq) {
    console.log("〰️ I have to play at " + freq + "Hz now")
    frequencyToPlay = freq;
})
socket.on('foundFreq', function (room) {
    if (room != false) {
        hasMaster = true
        console.log("👨‍👩‍👧‍👦 I have joined the room of " + room)
        if (!alreadyHaveConnection(room)) {

            let conn = peer.connect(room, { serialization: "json" });
            console.log("💌 I recived a Connection Object from: " + conn.peer);
            setupConn(conn);
        }
    }
})
peer.on('connection', function (recivedConn) {
    console.log("I recived this connection: " + recivedConn.peer + " I already have it: " + alreadyHaveConnection(recivedConn))
    if (!alreadyHaveConnection(recivedConn)) {
        setupConn(recivedConn);
    }
});

peer.on('open', function (id) {
    console.log('🆔 My peer ID is: ' + id);
    socket.emit('peerIDmsg', id)
    appendMasterSlave()
    // $("body").append(`<div>my peer id is: ${id}</div>`)
});
peer.on('disconnected', function () {
    console.log("⚰️ Peer-Server disconnected trying to reconnect")
    $("#master").remove()
    $("#slave").remove()
    if (!connections.length) {
        $("body").append(`<div>Sorry no Peer-server available. Try to Reload the page please :)</div>`)
    }
});

function alreadyHaveConnection(newConnection) { //checking if we already have this Connection
    let peerIDs = connections.map((connection) => { return connection.peer })
    return peerIDs.includes(newConnection.peer)
}

function setupConn(recivedConn) {
    connections.push(recivedConn);
    let conn = recivedConn;
    conn.on('open', function () {
        $("body").append("<div class='ping'>ping</div>");

        $("div.ping").click(function () {
            console.log("pressed ping")
            if (connections.length != 0) {
                connections.forEach(conn => {
                    // Send messages
                    console.log("🏓 i send a ping")
                    timeOnSend = performance.now();
                    conn.send('ping');
                });
            }
            else {
                $(".ping").text("Sorry I got no connection to an other Peer :( Try again by klicking on me!");
            }
        });
        conn.send("Hi my Peer ID is: " + peer.id);
        conn.on('data', function (data) {
            // console.log('📬 Received: ', data);

            if (data.time != undefined) {
                if (delta == undefined) {
                    delta = data.time - Tone.now() //Diffrence between our time and the incoming notes time. Set once to have a constant offset in time
                }
                let timeIplay = data.time - delta + 0.8 + deltaSliderVal
                polySynth.triggerAttackRelease(data.notes, "64n", timeIplay)//, data.time)
                console.log("🎵 recived note with time: " + data.time + " time I will play: " + timeIplay)
                //player.start()
            }
            else if (data == "startPlaying") {
                if (polySynth == undefined) {
                    Tone.Transport.start()
                    polySynth = new Tone.PolySynth(Tone.Synth).toMaster();
                    mySketch.remove();

                    $("body").append("<div class='deltaSlider-container'></div>")
                    $(".deltaSlider-container").append("<div class='deltaSlider-display'>0</div>")
                    $(".deltaSlider-container").append('<input type="range" name="deltaSlider" id="deltaSlider" value="0" min="-0.2" max="0.2" step="0.002" />')
                    $("#deltaSlider").on("input", (e) => {
                        $(".deltaSlider-display").text(e.target.value * 1000 + " ms")
                        deltaSliderVal = e.target.value
                        //console.log("slider value changed " + e.target.value)
                    })
                }
            }

            else if (data == "pong") {
                let timeTook = performance.now() - timeOnSend
                console.log("🏓 Ping pong took " + timeTook + "ms")
                // $("body").append(`<div class="ping">Ping took this long : ${timeTook}</div>`)
            }

            else if (data == "ping") {
                conn.send("pong")
                console.log("🏓 pong!")
            }



            else {
                //ts.receive(conn.peer, data);
            }
        });
        // $("body").append(`<div class="msg" id="${conn.peer}">I'm connected to: ${conn.peer}</div>`)
        console.log("💞 I now have an open connection to: " + conn.peer);
    })
    conn.on('close', function () {
        if (myRole == "slave") { myRole = undefined } //to be able to load the slave/master sketch
        console.log("💔 Connection lost to " + conn.peer)
        $(`#${conn.peer}`).remove();
        connections = connections.splice(connections.indexOf(conn), 1)
    })
    conn.on('error', function (err) {
        console.log("⛔ Connection error: " + err)
    })

}
function broadcastToAllConn(msg) {
    if (connections.length != 0) {
        connections.forEach(conn => {
            conn.send(msg);
        })
    }
}

function appendMasterSlave() {

    $("body").append("<div id='master'>Master</div>");
    $("body").append("<div id='slave'>Slave</div>");

    $("#master").click(function () {

        if (myRole == "slave") {
            mySketch.remove()
            setupMaster()
        }
        else if (myRole != "master") {
            setupMaster()
        }
    });

    $("#slave").click(function () {
        /* 
         if (typeof DeviceMotionEvent.requestPermission === 'function') {
             DeviceMotionEvent.requestPermission()
               .then(permissionState => {
                 if (permissionState === 'granted') {
                   window.addEventListener('devicemotion', () => {});
                 }
               })
               .catch(console.error);
           } else {
             // handle regular non iOS 13+ devices
           } */

        if (myRole == "master") {
            $("#start").remove()
            mySketch.remove()
            socket.emit('imNotMaster', peer.id)
            setupSlave()
        }
        else if (myRole != "slave") {
            setupSlave()
        }
    });
}
function setupSlave() {
    startMicrophoneInput()
    Tone.start("+0.1");
    myRole = "slave"
    console.log("🙇🏾‍♂️ I'm a SLAVE now")
    mySketch = new p5(slaveSketch)



}
function setupMaster() {
    myRole = "master"
    console.log("👨🏼‍🌾 I'm the MASTER now")
    mySketch = new p5(masterSketch)
    socket.emit('imMaster', peer.id)
    $("body").append("<div id='start'>Create Sequencers</div>");
    $("#start").click(() => {
        $("body").append("<div class='toggle' id='playButton'><input type='checkbox'><span class='button'></span><span class='label'>&#9654;</span></div>")
        $("#playButton").click((e) => {
            console.log("start Playing")
            Tone.Transport.start()
        })
        $('tone-step-sequencer').remove()
        mySketch.remove();
        Tone.start()
        broadcastToAllConn("startPlaying")
        connections.forEach(conn => {
            if (!$(`#sequencer-${conn.peer}`).length) {
                createSequencer(conn)
            }
        });
    })

}

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


//Refactored Time sync Example form https://github.com/enmasseio/timesync/blob/master/examples/advanced/peerjs/client.js
/**
 * Create a peer with id, and connect to the given peers
 * @param {string} id
 * @param {string[]} peers
 * @return {{peer: Window.Peer, ts: Object}} Returns an object with the
 *                                           created peer and the timesync
 *//*
function connect(id, peers) {
var domSystemTime = document.getElementById('systemTime');
var domSyncTime = document.getElementById('syncTime');
var domOffset = document.getElementById('offset');
var domSyncing = document.getElementById('syncing');
let peersFromconn = connections.map((conn) => {
return conn.peer
})
ts = timesync.create({
peers: peersFromconn,
interval: 5000,

timeout: 1000
});

ts.on('sync', function (state) {
//console.log('sync ' + state);
if (state == 'start') {
ts.options.peers = peersFromconn;
// console.log('syncing with peers [' + ts.options.peers + ']');
if (ts.options.peers.length) {
    domSyncing.innerHTML = 'syncing with ' + ts.options.peers + '...';
}
}
if (state == 'end') {
domSyncing.innerHTML = '';
}
});

ts.on('change', function (offset) {
// console.log('changed offset: ' + offset);
domOffset.innerHTML = offset.toFixed(1) + ' ms';
});

ts.send = function (id, data, timeout) {
//console.log('send', id, data);
var all = peer.connections[id];
var conn = all && all.filter(function (conn) {
return conn.open;
})[0];

if (conn) {
conn.send(data);
}
else {
console.log(new Error('Cannot send message: not connected to ' + id).toString());
}

// Ignoring timeouts
return Promise.resolve();
};

// show the system time and synced time once a second on screen
setInterval(function () {
domSystemTime.innerHTML = new Date().toISOString().replace(/[A-Z]/g, ' ');
domSyncTime.innerHTML = new Date(ts.now()).toISOString().replace(/[A-Z]/g, ' ');
}, 1000);



return {
peer: peer,
ts: ts
};
}
*/
//end of timesync
