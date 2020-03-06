
let frequencyFound
let slaveSketch = function (p) {
    p.mic;
    p.fft;
    p.peakBuffer = []
    p.peakCount = 0
    p.setup = function () {
        navigator.permissions.query({ name: 'microphone' })
            .then(function (permissionStatus) {
                console.log('🎤 Microphone permission state is', permissionStatus.state);

                permissionStatus.onchange = function () {
                    console.log('microphone permission state has changed to ', this.state);
                };
            });
        p.createCanvas(p.windowWidth, p.windowHeight * 0.5);
        p.noFill();
        p.pixelDensity(2);
        p.mic = new p5.AudioIn();
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
    function CircularBuffer(n) {
        this._array = new Array(n);
        this.length = 0;
    }
    CircularBuffer.prototype.toString = function () {
        return '[object CircularBuffer(' + this._array.length + ') length ' + this.length + ']';
    };
    CircularBuffer.prototype.get = function (i) {
        if (i < 0 || i < this.length - this._array.length)
            return undefined;
        return this._array[i % this._array.length];
    };
    CircularBuffer.prototype.set = function (i, v) {
        if (i < 0 || i < this.length - this._array.length)
            throw CircularBuffer.IndexError;
        while (i > this.length) {
            this._array[this.length % this._array.length] = undefined;
            this.length++;
        }
        this._array[i % this._array.length] = v;
        if (i == this.length)
            this.length++;
    };
    CircularBuffer.prototype.push = function (v) {
        this._array[this.length % this._array.length] = v;
        this.length++;
    };
    CircularBuffer.IndexError = {};
}
