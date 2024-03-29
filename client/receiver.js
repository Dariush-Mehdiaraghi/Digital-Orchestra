let streamObj
let audioContext = new AudioContext(); //|| window.webkitAudioContext;
let spectrum = new Uint8Array(8192);

let gain_node
let microphone_stream
let script_processor_node
let script_processor_fft_node
let analyserNode

let audioNodes = [gain_node, microphone_stream, script_processor_node, analyserNode]

let frequencyFound

let receiverSketch = function (p) {
    p.role = "receiver";
    p.mic;
    p.fft;
    p.peakBuffer = []
    p.peakCount = 0
    p.peakDuration = 80
    p.peakMinAmp = 50
    p.specScale = 8
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noFill();
        p.pixelDensity(2);
        p.osc = new p5.Oscillator('sine');
        p.osc.freq(frequencyFound);
        frequencyFound = 0;
    }

    p.draw = function () {
        p.stroke(mySecondaryColor)
        p.background(myBackgroundColor);

        let indexOfMaxValue = indexOfMax(spectrum);
        let peakFreq = round_to_precision(indexOfMaxValue * (p.sampleRate() / 2) / spectrum.length, 100)
        if (peakFreq != undefined && peakFreq > 0) {
            p.peakBuffer[p.peakCount % p.peakDuration] = peakFreq
            p.peakCount++
        }
        let bufferSum = 0;

        for (let i = 0; i < p.peakDuration; i++) {
            bufferSum += p.peakBuffer[i];
            if (
                (bufferSum / (p.peakBuffer.length - 1)) == peakFreq &&
                peakFreq > 0 &&
                spectrum[indexOfMaxValue] > p.peakMinAmp &&
                frequencyFound != peakFreq &&
                peakFreq > 1900 &&
                !hasSender
            ) {
                frequencyFound = peakFreq
                socket.emit('foundFreq', frequencyFound)
                console.log("〰️ found frequency: " + frequencyFound + "Hz")
            }
        }


        p.beginShape();

        let x = 0;
        for (i = 0; i < spectrum.length; i++) {
            if (x < spectrum.length - p.specScale) {
                x += p.specScale;
            }
            p.vertex(p.map(spectrum[x], 0, 255, p.width, 0), i);


        }

        p.endShape();

        if (spectrum[indexOfMaxValue] > p.peakMinAmp) {
            p.fill(mySecondaryColor)
            p.text("Amp: " + spectrum[indexOfMaxValue], p.width / 2, indexOfMaxValue / p.specScale)
            if (frequencyFound == peakFreq) { p.fill(10, 255, 10); p.stroke(10, 255, 10) }
            p.text("Freq: " + peakFreq, p.width / 2 + 100, indexOfMaxValue / p.specScale) //Frequency = indexOfMaxValue *(sampleRate()/2)/spectrum.length
            p.noFill()
            p.ellipse(p.map(spectrum[indexOfMaxValue], 0, 255, p.width, 0), indexOfMaxValue / p.specScale, spectrum[indexOfMaxValue] * 0.3);

        }
    }

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
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
    function round_to_precision(x, precision) {
        var y = +x + (precision === undefined ? 0.5 : precision / 2);
        return y - (y % (precision === undefined ? 1 : + precision));
    }
}



function startMicrophoneInput() {

    var webaudio_tooling_obj = function () {

        var audioContext = new AudioContext();

        console.log("🎙️ Mic is starting up ...");

        var BUFF_SIZE = 16384;

        navigator.getMic = (navigator.getUserMedia || navigator.webKitGetUserMedia || navigator.moxGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true, video: false })
                .then(function (stream) {
                    start_microphone(stream);
                })
                .catch(function (e) { logError(e.name + ": " + e.message); });
        }
        else {
            navigator.getMic({ audio: true, video: false },
                function (stream) {
                    start_microphone(stream);
                },
                function (e) { console.log("⛔ Microphone  is not accessible." + e); });
        }

        // ---


        function process_microphone_buffer(event) {

            var i, N, inp, microphone_output_buffer;
            microphone_output_buffer = event.inputBuffer.getChannelData(0);

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
            analyserNode.smoothingTimeConstant = 0.7;
            // analyserNode.minDecibels = -80;
            analyserNode.fftSize = BUFF_SIZE;

            microphone_stream.connect(analyserNode);

            analyserNode.connect(script_processor_fft_node);

            script_processor_fft_node.onaudioprocess = function () {
                analyserNode.smoothingTimeConstant = 0.8
                analyserNode.getByteFrequencyData(spectrum);

            };
            audioNodes = [gain_node, microphone_stream, script_processor_node, analyserNode]
        }

    }();


}