let frequencyToPlay
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
function createMasterControls() {
    $("body").append("<div id='master-div'></div>")
    $("#master-div").append("<div id='master-controls'><div class='toggle' id='playButton'><input type='checkbox'><span class='button'></span><span class='label'>Play</span></div></div>")
    $("#playButton").click((e) => {
        if ($("#playButton .label").html() == "Play") {
            $("#playButton .label").html("Stop")
            Tone.start()
            Tone.Transport.start()
            broadcastToAllConn("startPlaying")
        }
        else if ($("#playButton .label").html() == "Stop") {
            Tone.Transport.pause()
            $("#playButton .label").html("Play")
        }
        removeMasterSlave()
        mySketch.remove();

    })
    appendBPMControl()

}


function appendBPMControl() {
    $("#master-controls").append("<div id='BPM-Stepper'><div id='BPM-controls'><div id='inc-BPM' class='BPM-control'>+</div><div id='dec-BPM' class='BPM-control'>-</div></div><div id='BPM-label'>120</div></div>")
    $("#inc-BPM").click(() => {

        gsap.fromTo(
            "#inc-BPM",
            { y: -10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power3.inOut" }
        );
        gsap.fromTo(
            "#BPM-label",
            { y: -10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.2, ease: "power3.inOut" }
        );
        let val = $("#BPM-label").html();
        val++;
        Tone.Transport.bpm.rampTo(val, 0.5);
        $("#BPM-label").html(val);
    });
    $("#dec-BPM").click(() => {
        gsap.fromTo(
            "#dec-BPM",
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power3.inOut" }
        );
        gsap.fromTo(
            "#BPM-label",
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.2, ease: "power3.inOut" }
        );

        let val = $("#BPM-label").html();
        val--;
        Tone.Transport.bpm.rampTo(val, 0.5);
        $("#BPM-label").html(val);
    });
}

function createSequencer(conn) {

    let seqLength = 16

    let noteNames = ["F#3", "E3", "C#3", "A3"]
    let noteCount = noteNames.length

    $("#master-div").append(`<div class='tone-step-sequencer' id='sequencer-${conn.peer}'></div>`)
    for (let j = 0; j < noteCount; j++) {
        $(".tone-step-sequencer").last().append("<div class='seqRow'></div>")
        for (let i = 0; i < seqLength; i++) {
            $(".seqRow").last().append(`<div class='cb-container cont-col-${i} '><label class="cb-label"><input type='checkbox' class="column-${i}"/><span class="cb-span"><span></label></div>`)
            //every cb in a column has the same selector
        }
    }
    gsap.fromTo(
        `#sequencer-${conn.peer}`,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    );
    conn.send({ color: colors[($(".tone-step-sequencer").length - 1) % (colors.length - 1)] }) // sending corresponding color
    //setup a polyphonic synth
    //  let polySynth = new Tone.PolySynth(Tone.Synth).toMaster();


    Tone.Transport.scheduleRepeat(loop, `${seqLength}n`)

    Tone.Transport.scheduleRepeat(loopPosition, `${seqLength}n`, 0.81) //last variable is should be calculatet 0.9 is just estimation
    let index = 0


    function loop(time) {
        let step = index % seqLength
        let column = $(`#sequencer-${conn.peer} .column-${step}`)
        let notesToPlay = []
        for (let i = 0; i < column.length; i++) {
            if (column[i].checked) {
                notesToPlay.push(noteNames[i])
            }
        }
        if (notesToPlay.length != 0) {
            conn.send({ "notes": notesToPlay, "time": time })
        }
        index++

    };
    let posIndex = 0

    function loopPosition(time) {

        let step = posIndex % seqLength

       
        let lastStep = (posIndex - 1) % seqLength
        $(`.cont-col-${lastStep}`).css({"background-color":"var(--bodyBg)"})
        $(`.cont-col-${step}`).css({"background-color": "var(--secondaryColor)"})
        posIndex++
    }

}
function getMeanOfArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}
        //set the column on the correct draw frame
/*Tone.Draw.schedule(function () {
    document.querySelector("tone-step-sequencer").setAttribute("highlight", col);
}, time);*/

