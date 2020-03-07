let frequencyToPlay;
let playing
let masterSketch = function (p) {
    
    p.setup = function(){
        p.osc = new p5.Oscillator('sine');
        p.playOscillator()
    }
    p.playOscillator = function () {
        p.osc.start();
        playing = true;
    }
    p.draw = function () {
        p.circle(10,10,10)
        if (playing) {
            // smooth the transitions by 0.1 seconds
            p.osc.freq(frequencyToPlay);
            p.osc.amp(0.5);
          }
    }
    
}