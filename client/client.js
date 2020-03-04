
var peer = new Peer({ key: 'lwjd5qra8257b9' });
const socket = io();
let connections = [];
let timeOnSend;


socket.on('peerIDmsg-Other', function (msg) {
    let peerIDs = connections.map((connection) => { return connection.peer }) //checking if we already have this Connection
    if (!peerIDs.includes(msg)) {
        let conn = peer.connect(msg);
        setupConn(conn);
    }
})
peer.on('connection', function (recivedConn) {
    let peerIDs = connections.map((connection) => { return connection.peer }) //checking if we already have this Connection
    if (!peerIDs.includes(recivedConn.peer)) {
        setupConn(recivedConn);
    }
});

peer.on('open', function (id) {
    console.log('My peer ID is: ' + id);
    socket.emit('peerIDmsg', id)
    $("body").append(`<div>my peer id is: ${id}</div>`)
});
peer.on('disconnected', function () {
    console.log("Peer-Server disconnected")
});


function setupConn(recivedConn) {
    console.log("I recived a Connection Object from: " + recivedConn.peer);
    connections.push(recivedConn);
    let conn = recivedConn;
    conn.on('open', function () {
        conn.send("Hi my Peer ID is: " + peer.id);
        conn.on('data', function (data) {
            console.log('Received: ', data);
            if (data == "ping") {
                conn.send("pong")
            }
            if (data == "pong") {
                let timeTook = performance.now() - timeOnSend
                $("body").append(`<div class="ping">Ping took this long : ${timeTook}</div>`)
            }
        });
        $("body").append(`<div class="msg" id="${conn.peer}">I'm connected to: ${conn.peer}</div>`)
        console.log("I now have a open connection to " + conn.peer);
    })
    conn.on('close', function () {
        console.log("Connection closed with " + conn.peer)
        $(`#${conn.peer}`).remove();
    })
    conn.on('error', function (err) {
        console.log("Connection error: " + err)
    })

}


$("body").append("<div class='ping'>ping</div>")
$(".ping").click(function () {
    if (connections.length != 0) {
        connections.forEach(conn => {
            // Send messages
            console.log("i send a ping")
            timeOnSend = performance.now();
            conn.send('ping');
        });
    }
    else {
        $(".ping").text("Sorry I got no connection to a other Peer :( Try again by klicking on me!");
    }
});



if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    // iOS 13+
    DeviceOrientationEvent.requestPermission()
        .then(response => {
            if (response == 'granted') {
                window.addEventListener('deviceorientation', (e) => {
                    // do something with e
                })
            }
        })
        .catch(console.error)
} else {
    // non iOS 13+
}

let mic, fft;
let energies = [];
function setup() {
    navigator.permissions.query({name:'microphone'})
  .then(function(permissionStatus) {
    console.log('microphone permission state is ', permissionStatus.state);

    permissionStatus.onchange = function() {
      console.log('microphone permission state has changed to ', this.state);
    };
  });
    createCanvas(windowWidth, windowHeight * 0.5);
    noFill();
    pixelDensity(2);
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT(0.8,16384);
    fft.smooth(0.95)
    fft.setInput(mic);

}

function draw() {
    background(255);

    let spectrum = fft.analyze();
  
    //console.log(spectrum)
    //at what index of energies is the max?
    let indexOfMaxValue = indexOfMax(spectrum);
    beginShape();
    for (i = 0; i < spectrum.length; i++) {
        vertex(i, map(spectrum[i], 0, 255, height, 0));
    }
    endShape();
    if(spectrum[indexOfMaxValue]>50){
     ellipse(indexOfMaxValue, map(spectrum[indexOfMaxValue], 0, 255, height, 0), spectrum[indexOfMaxValue]*0.3);
   
    fill(50)
    text("Amp: " + spectrum[indexOfMaxValue], indexOfMaxValue, height / 2)
    text("Freq: "+ indexOfMaxValue * (sampleRate()/2)/spectrum.length, indexOfMaxValue, height / 2.4) //Frequency = indexOfMaxValue *(sampleRate()/2)/spectrum.length
    noFill() }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight * 0.5);
}
function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}