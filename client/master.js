let frequencyToPlay;
let playing
let masterSketch = function (p) {
    p.role = "master";
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
    let seqLength = 16;

    let noteNames = ["F#3", "E3", "C#3", "A3"];
    let noteCount = noteNames.length
    $("body").append("<div class='tone-step-sequencer'></div>")
    for (let j = 0; j < noteCount; j++) {
        $(".tone-step-sequencer").last().append("<div class='seqRow'></div>")
        for (let i = 0; i < seqLength; i++) {
            $(".seqRow").last().append(`<input type='checkbox' class="column-${i}"/>`) //every column has same selector
        }
    }

    //setup a polyphonic synth
  //  let polySynth = new Tone.PolySynth(Tone.Synth).toMaster();


    Tone.Transport.scheduleRepeat(loop, "32n")
    Tone.Transport.start()
    let index = 0

    function loop(time) {
        let step = index % seqLength
        // console.log("looping")
        let column = $(`.column-${step}`)
        let notesToPlay = []
        for (let i = 0; i < column.length; i++) {
            if (column[i].checked) {
                notesToPlay.push(noteNames[i])
            }
        }
        if (notesToPlay.length != 0) {
            conn.send({ "notes": notesToPlay, "time": time+2})
        }
        //polySynth.triggerAttackRelease(notesToPlay, "32n", time)
        index++;

    };

}

        //set the column on the correct draw frame
/*Tone.Draw.schedule(function () {
    document.querySelector("tone-step-sequencer").setAttribute("highlight", col);
}, time);*/

