
let frequencyFound
let slaveSketch = function (p) {
    p.mic;
    p.fft;
    p.peakBuffer = []
    p.peakCount = 0
    let streamObj
    p.setup = function () {
        if (!navigator.getUserMedia)
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia || navigator.msGetUserMedia;

if (navigator.getUserMedia){

navigator.getUserMedia({audio:true}, 
function(stream) {
    streamObj = stream
},
function(e) {
alert('Error capturing audio.');
}
);

} else { alert('getUserMedia not supported in this browser.'); }
       /* navigator.permissions.query({ name: 'microphone' })
            .then(function (permissionStatus) {
                console.log('🎤 Microphone permission state is', permissionStatus.state);

                permissionStatus.onchange = function () {
                    console.log('microphone permission state has changed to ', this.state);
                };
            }); */
        p.createCanvas(p.windowWidth, p.windowHeight * 0.5);
        p.noFill();
        p.pixelDensity(2);
        p.mic = new p5.AudioIn();
        p.mic.stream = streamObj
        p.mic.start();
        p.fft = new p5.FFT(0.8, 16384);
        p.fft.smooth(0.9)
        p.fft.setInput(p.mic);

        //p.noLoop()
    }

    p.draw = function () {
        p.stroke(0)
        p.background(255);
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