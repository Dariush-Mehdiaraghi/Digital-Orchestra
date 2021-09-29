//var peer = new Peer({ key: 'lwjd5qra8257b9' }); //maybe you should get yer own key eh?
let peer = new Peer(null, {
    debug: 2
});
const socket = io();
let connections = [];
let timeOnSend;
let myRole;
let mySketch;
let myColor;
let hasSender = false
const colors = ["#FBA500", "#2671BC", "#F15A24", "#096836", "#A344A7", "#00AD99"]
let sampler
let ts
let delta
let myBackgroundColor = $("body").css("background-color")
let mySecondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondaryColor');

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
        hasSender = true
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
    appendSenderReceiver()
    // $("body").append(`<div>my peer id is: ${id}</div>`)
});
peer.on('disconnected', function () {
    console.log("⚰️ Peer-Server disconnected trying to reconnect")
    removeSenderReceiver()
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

        if (myRole == "sender" && !$(`#sequencer-${conn.peer}`).length) {
            if (!$("#sender-div").length) {
                createSenderControls()
            }

            createSequencer(conn)
        }

        conn.on('data', function (data) {

            if (data.time != undefined) {
                if (delta == undefined) {
                    delta = data.time - Tone.now() //Diffrence between our time and the incoming notes time. Set once to have a constant offset in time 
                }
                let timeIplay = data.time - delta + 0.8
                sampler.triggerAttack(data.notes, timeIplay)//, data.time)
                Tone.Draw.schedule(function () {
                    gsap.fromTo(
                        "body",
                        { backgroundColor: myColor },
                        { backgroundColor: myBackgroundColor, duration: 0.9, ease: "power3.inOut" } //color interpolation to a css variable doesnt work
                    );
                }, timeIplay)
                // console.log("🎵 recived note with time: " + data.time + " time I will play: " + timeIplay)
            }

            else if (data == "startPlaying") {
                mySketch.remove()
                audioNodes.forEach((node) => { if (node != undefined) { node.disconnect() } })
                audioContext.close()
                if (sampler == undefined) {
                    Tone.context.latencyHint = "balanced"  //"interactive" (default, prioritizes low latency), "playback" (prioritizes sustained playback), "balanced" (balances latency and performance), "fastest" (lowest latency, might glitch more often).
                    sampler = new Tone.Sampler({
                        "F#3": `audio/s${(colors.indexOf(myColor) % 3)}/1.mp3`,
                        "E3": `audio/s${colors.indexOf(myColor) % 3}/2.mp3`,
                        "C#3": `audio/s${colors.indexOf(myColor) % 3}/3.mp3`,
                        "A3": `audio/s${colors.indexOf(myColor) % 3}/4.mp3`,
                    }, function () {
                        //sampler will repitch the closest sample
                        Tone.Transport.start()
                        sampler.triggerAttack("D3")
                    }).toMaster()

                }
                else {
                    Tone.Transport.start()
                }
            }

            else if (data == "pong") {
                let timeTook = performance.now() - timeOnSend
                console.log("🏓 Ping pong took " + timeTook + "ms")
                $("body").append(`<div class="ping">Ping took this long : ${timeTook}</div>`)
            }

            else if (data == "ping") {
                conn.send("pong")
                console.log("🏓 pong!")
            }
            else if (data.color != undefined) {
                myColor = data.color
                $("#my-color").css("background-color", myColor)
            }
        });
        console.log("💞 I now have an open connection to: " + conn.peer);
    })
    conn.on('close', function () {

        console.log("💔 Connection lost to " + conn.peer)
        $(`#sequencer-${conn.peer}`).remove();

        let i = connections.indexOf(conn);
        if (i != -1) {
            connections.splice(i, 1);
        }

        if (myRole == "receiver") {
            $("#my-color").css("background-color", "white")
            hasSender = false
            startMicrophoneInput();
            mySketch = new p5(receiverSketch)
            delta = undefined
            Tone.Transport.stop()
        }
        if (myRole == "sender") {
            for (let i = 0; i < connections.length; i++) {
                const connection = connections[i]
                const color = { color: colors[i % (colors.length - 1)] }
                connection.send(color)
                console.log("sending to " + connection.peer + " this color: " + color)
            }
        }
        if (myRole == "sender" && connections.length <= 0) {
            myRole = undefined
            $("#sender-div").remove()
            appendSenderReceiver()

        }
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
function removeSenderReceiver() {
    $("#main-menu").remove();
}
function appendSenderReceiver() {

    $("body").append("<div id='main-menu'><div id='sender'>sender</div><div id='animation-container'></div><div id='receiver'>receiver</div></div>");
    let animation = bodymovin.loadAnimation({
        container: document.getElementById('animation-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'sendAnim.json'
    })

    $("#sender").click(function () {

        if (myRole == "receiver") {
            mySketch.remove()
            setupSender()
        }
        else if (myRole != "sender") {
            setupSender()
        }
        removeSenderReceiver()
    });

    $("#receiver").click(function () {
        if (myRole == "sender") {
            $("#start").remove()
            mySketch.remove()
            socket.emit('imNotSender', peer.id)
            setupReceiver()
        }
        else if (myRole != "receiver") {
            setupReceiver()
        }
        removeSenderReceiver()
    });
}
function setupReceiver() {

    startMicrophoneInput()
    Tone.start("+0.1");
    myRole = "receiver"
    console.log("🙇🏾‍♂️ I'm a receiver now")
    mySketch = new p5(receiverSketch)
    $("body").append("<div id='receiver-div'><div id='my-color'></div></div>")


}
function setupSender() {
    myRole = "sender"
    console.log("📢 I'm the sender now")
    mySketch = new p5(senderSketch)
    socket.emit('imSender', peer.id)

}


// Stack overflow anwser for mobile logging from Marcus Hughes - Jan 22 2018
// Reference to an output container, use 'pre' styling for JSON output
let output = document.createElement('console');
document.body.appendChild(output);

// Reference to native method(s)
let oldLog = console.log;

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

