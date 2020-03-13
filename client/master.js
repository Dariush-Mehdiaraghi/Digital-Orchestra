let frequencyToPlay;
let playing
let masterSketch = function (p) {

    p.setup = function () {
        p.osc = new p5.Oscillator('sine');
        p.playOscillator()
    }
    p.playOscillator = function () {
        p.osc.start();
        playing = true;
    }
    p.draw = function () {
        if (playing) {
            // smooth the transitions by 0.1 seconds
            p.osc.freq(frequencyToPlay);
            p.osc.amp(0.5);
        }
    }

}
function createSequencer(conn) {
    $("body").append()
    //setup a polyphonic sampler
    var keys = new Tone.Players({
        "A": "./audio/casio/A1.[mp3|ogg]",
        "C#": "./audio/casio/Cs2.[mp3|ogg]",
        "E": "./audio/casio/E2.[mp3|ogg]",
        "F#": "./audio/casio/Fs2.[mp3|ogg]",
    }, {
        "volume": -10,
        "fadeOut": "64n",
    }).toMaster();

    //the notes
    var noteNames = ["F#", "E", "C#", "A"];

    var loop = new Tone.Sequence(function (time, col) {
        var column = document.querySelector("tone-step-sequencer").currentColumn;
        column.forEach(function (val, i) {
            if (val) {
                //slightly randomized velocities
                var vel = Math.random() * 0.5 + 0.5;
                keys.get(noteNames[i]).start(time, 0, "32n", 0, vel);
            }
        });
        //set the column on the correct draw frame
        Tone.Draw.schedule(function () {
            document.querySelector("tone-step-sequencer").setAttribute("highlight", col);
        }, time);
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n").start(0);

    //bind the interface
    document.querySelector("tone-transport").bind(Tone.Transport);

    Tone.Transport.on("stop", () => {
        setTimeout(() => {
            document.querySelector("tone-step-sequencer").setAttribute("highlight", "-1");
        }, 100);
    });
}