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
      }

    console.log("🙇🏾‍♂️ I'm a SLAVE now")
    mySketch = new p5(slaveSketch)
    /*
    audioContext = new AudioContext();
    const handleSuccess = function(stream) {
   
        streamObj = audioContext.createMediaStreamSource(stream);
        console.log("Stream active: "+ streamObj.mediaStream.active)
        
        
      };
      navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(handleSuccess)
    .catch(function(err) {
       console.log("Catch of getUserMedia " + err)
      });
   */
    var webaudio_tooling_obj = function () {

        var audioContext = new AudioContext();

        console.log("audio is starting up ...");

        var BUFF_SIZE = 16384;

        var audioInput = null,
            microphone_stream = null,
            gain_node = null,
            script_processor_node = null,
            script_processor_fft_node = null,
            analyserNode = null;

       

           /* navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then(function (stream) {
                start_microphone(stream);
            }).catch(function (e) {
                alert('Error capturing audio.');
            });
*/
            navigator.getMic = (navigator.getUserMedia || navigator.webKitGetUserMedia || navigator.moxGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({  audio: true, video: false })
                .then(function (stream) {
                    start_microphone(stream);    //Display the video stream in the video object
                 })
                 .catch(function (e) { logError(e.name + ": " + e.message); });
            }
            else {
            navigator.getMic({ audio: true, video: false }, 
                 function (stream) {
                    start_microphone(stream);     //Display the video stream in the video object
                 }, 
                 function (e) { console.error("Microphone  is not accessible."+ e); });
            }

        // ---

        function show_some_data(given_typed_array, num_row_to_display, label) {

            var size_buffer = given_typed_array.length;
            var index = 0;
            var max_index = num_row_to_display;

            // console.log("__________ " + label);

            for (; index < max_index && index < size_buffer; index += 1) {
                console.log(given_typed_array[index]);
            }
        }

        function process_microphone_buffer(event) { // invoked by event loop

            var i, N, inp, microphone_output_buffer;

            microphone_output_buffer = event.inputBuffer.getChannelData(0); // just mono - 1 channel for now

            // microphone_output_buffer  <-- this buffer contains current gulp of data size BUFF_SIZE

            show_some_data(microphone_output_buffer, 5, "from getChannelData");
        }

        function start_microphone(stream) {

            gain_node = audioContext.createGain();
            gain_node.connect(audioContext.destination);

            microphone_stream = audioContext.createMediaStreamSource(stream);

            script_processor_node = audioContext.createScriptProcessor(BUFF_SIZE, 1, 1);
            script_processor_node.onaudioprocess = process_microphone_buffer;

            microphone_stream.connect(script_processor_node);


            // --- setup FFT

            script_processor_fft_node = audioContext.createScriptProcessor(1024, 1, 1);
            script_processor_fft_node.connect(gain_node);

            analyserNode = audioContext.createAnalyser();
            analyserNode.smoothingTimeConstant = 0.9;
            analyserNode.minDecibels = -80;
            analyserNode.fftSize = BUFF_SIZE;

            microphone_stream.connect(analyserNode);

            analyserNode.connect(script_processor_fft_node);

            script_processor_fft_node.onaudioprocess = function () {
                analyserNode.smoothingTimeConstant = 0.8
                // get the average for the first channel
                // let spectrum = new Uint8Array(analyserNode.frequencyBinCount);
                analyserNode.getByteFrequencyData(spectrum);
                // console.log( analyserNode.frequencyBinCount)
                // draw the spectrogram
                /* if (microphone_stream.playbackState == microphone_stream.PLAYING_STATE) {
         
                     show_some_data(spectrum, 5, "from fft");
                 }*/
            };
        }

    }();//  webaudio_tooling_obj = function()

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

