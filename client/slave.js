let streamObj
let audioContext = window.AudioContext || window.webkitAudioContext;;


let frequencyFound  

let slaveSketch = function (p) {
    console.log("p5 skectch first Line started")
    p.mic;
    p.fft;
    p.peakBuffer = []
    p.peakCount = 0
    
    p.setup = function () {
        console.log("setup started")
        p.createCanvas(p.windowWidth, p.windowHeight * 0.5);
        p.noFill();
        p.pixelDensity(2);
        p.mic = new p5.AudioIn();
        p.mic.amplitude.audioContext = audioContext
       
        p.mic.start();
        p.mic.stream = streamObj
        p.fft = new p5.FFT(); //good is : 0.8, 16384
        p.fft.smooth(0.9)
        p.fft.setInput(p.mic);

        //p.noLoop()
    }

    p.draw = function () {
      
        p.stroke(0)
        p.background(255);
        p.fill(50)
        p.text("Sketch is running", 100,100)
        let spectrum = p.fft.analyze();
        //console.log(spectrum)
        //at what index of energies is the max?
        let indexOfMaxValue = indexOfMax(spectrum);
        let peakFreq = Math.round(indexOfMaxValue * (p.sampleRate() / 2) / spectrum.length)
        if (peakFreq != undefined && peakFreq > 0) {
            p.peakBuffer[p.peakCount % 50] = peakFreq
            p.peakCount++
        }
        //console.log(p.frameCount%50)
        let bufferSum = 0;

        for (let i = 0; i < 50; i++) {
            bufferSum += p.peakBuffer[i];
            if (
                (bufferSum / (p.peakBuffer.length - 1)) == peakFreq &&
                peakFreq > 0 &&
                spectrum[indexOfMaxValue] > 50 &&
                frequencyFound != peakFreq
            ) {
                frequencyFound = peakFreq
                console.log(frequencyFound)
                window.navigator.vibrate([200, 100, 200]);
            }


        }
        p.beginShape();
        for (i = 0; i < spectrum.length; i++) {
            p.vertex(i, p.map(spectrum[i], 0, 255, p.height, 0));
        }
        p.endShape();
        if (spectrum[indexOfMaxValue] > 50) {
    
            p.fill(50)
            p.text("Amp: " + spectrum[indexOfMaxValue], indexOfMaxValue, p.height / 2)
            if (frequencyFound == peakFreq) { p.fill(10, 255, 10); p.stroke(10, 255, 10)}
            p.text("Freq: " + peakFreq, indexOfMaxValue, p.height / 2.4) //Frequency = indexOfMaxValue *(sampleRate()/2)/spectrum.length
            p.noFill()
            p.ellipse(indexOfMaxValue, p.map(spectrum[indexOfMaxValue], 0, 255, p.height, 0), spectrum[indexOfMaxValue] * 0.3);
       
        }
    }
    function windowResized() {
        p.resizeCanvas(p.windowWidth, p.windowHeight * 0.5);
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
}

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

    if (!navigator.getUserMedia)
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia || navigator.msGetUserMedia;

    if (navigator.getUserMedia){

        navigator.getUserMedia({audio:true}, 
          function(stream) {
              start_microphone(stream);
          },
          function(e) {
            alert('Error capturing audio.');
          }
        );

    } else { alert('getUserMedia not supported in this browser.'); }

    // ---

    function show_some_data(given_typed_array, num_row_to_display, label) {

        var size_buffer = given_typed_array.length;
        var index = 0;
        var max_index = num_row_to_display;

        console.log("__________ " + label);

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

    function start_microphone(stream){

      gain_node = audioContext.createGain();
      gain_node.connect( audioContext.destination );

      microphone_stream = audioContext.createMediaStreamSource(stream);
      microphone_stream.connect(gain_node); 

      script_processor_node = audioContext.createScriptProcessor(BUFF_SIZE, 1, 1);
      script_processor_node.onaudioprocess = process_microphone_buffer;

      microphone_stream.connect(script_processor_node);

      // --- enable volume control for output speakers

    

      // --- setup FFT

      script_processor_fft_node = audioContext.createScriptProcessor(2048, 1, 1);
      script_processor_fft_node.connect(gain_node);

      analyserNode = audioContext.createAnalyser();
      analyserNode.smoothingTimeConstant = 0;
      analyserNode.fftSize = 2048;

      microphone_stream.connect(analyserNode);

      analyserNode.connect(script_processor_fft_node);

      script_processor_fft_node.onaudioprocess = function() {

        // get the average for the first channel
        var array = new Uint8Array(analyserNode.frequencyBinCount);
        analyserNode.getByteFrequencyData(array);

        // draw the spectrogram
        if (microphone_stream.playbackState == microphone_stream.PLAYING_STATE) {

            show_some_data(array, 5, "from fft");
        }
      };
    }

  }(); //  webaudio_tooling_obj = function()
