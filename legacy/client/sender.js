import * as Tone from "tone";
import $ from "jquery";
import { colors } from "./constants.js";
import { gsap } from "gsap";

import { socket, broadcastToAllConn } from "./socket.js";
import { ts } from "./synchonizedTime.js";
let playing;
let frequencyToPlay;
let sequences = {};
const noteNames = ["F#3", "E3", "C#3", "A3"];
const noteCount = noteNames.length;
const osc = new Tone.Oscillator(frequencyToPlay, "sine").toDestination();
osc.set({ frequency: frequencyToPlay });
socket.on("frequencyToPlay", function (freq) {
  console.log("〰️ I have to play at " + freq + "Hz now");
  frequencyToPlay = freq;
  startBeeping();
});
export const startBeeping = function () {
  osc.set({ frequency: frequencyToPlay });
  osc.start();

  playing = true;
  console.log("🐝 I am beeping now");
};
export function createSenderControls() {
  $("body").append("<div id='sender-div'></div>");
  $("#sender-div").append(
    "<div id='sender-controls'><div class='toggle' id='playButton'><input type='checkbox'><span class='button'></span><span class='label'>Play</span></div></div>"
  );
  $("#playButton").on("click", (e) => {
    osc.stop();

    if ($("#playButton .label").html() == "Play") {
      $("#playButton .label").html("Stop");
      Tone.start();
      Tone.Transport.start();
      broadcastToAllConn("startPlaying");
    } else if ($("#playButton .label").html() == "Stop") {
      Tone.Transport.pause();
      $("#playButton .label").html("Play");
    }
    $("#main-menu").remove();
    // mySketch.remove();
  });
  appendBPMControl();
}

function appendBPMControl() {
  $("#sender-controls").append(
    "<div id='BPM-Stepper'><div id='BPM-controls'><div id='inc-BPM' class='BPM-control'>+</div><div id='dec-BPM' class='BPM-control'>-</div></div><div id='BPM-label'>120</div></div>"
  );
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

export function createSequencer(conn) {
  let seqLength = 16;

  sequences[conn?.peer] = Array.from({ length: noteCount }, () =>
    Array.from({ length: seqLength }, () => false)
  );
  $("#sender-div").append(
    `<div class='tone-step-sequencer' id='sequencer-${conn?.peer}'></div>`
  );
  for (let j = 0; j < noteCount; j++) {
    $(".tone-step-sequencer").last().append("<div class='seqRow'></div>");
    for (let i = 0; i < seqLength; i++) {
      $(".seqRow")
        .last()
        .append(
          `<div class='cb-container cont-col-${i} '><label class="cb-label"><input type='checkbox' column="${i}" row="${j}" class="column-${i} step"/><span class="cb-span"><span></label></div>`
        );
      //every cb in a column has the same selector
    }
  }
  $(".step").on("change", (e) => {
    sequences[conn?.peer][e.target.getAttribute("row")][
      e.target.getAttribute("column")
    ] = e.target.checked;
  });
  //   gsap.fromTo(
  //     `#sequencer-${conn.peer}`,
  //     { y: 100, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
  //   );
  conn?.send({
    color: colors[($(".tone-step-sequencer").length - 1) % (colors.length - 1)],
  }); // sending corresponding color
  //setup a polyphonic synth
  //  let polySynth = new Tone.PolySynth(Tone.Synth).tosender();

  Tone.Transport.scheduleRepeat(loop, `${seqLength}n`);

  Tone.Transport.scheduleRepeat(loopPosition, `${seqLength}n`); //last variable is should be calculatet 0.9 is just estimation
  let index = 0;
  const synth = new Tone.Synth().toDestination();
  function loop(time) {
    // synth.triggerAttackRelease("C4", 0.001, time);

    let step = index % seqLength;
    // let column = $(`#sequencer-${conn.peer} .column-${step}`);
    let notesToPlay = [];
    console.log(sequences);
    for (let i = 0; i < noteCount; i++) {
      if (sequences[conn?.peer][i][step]) {
        notesToPlay.push(noteNames[i]);
      }
    }
    if (notesToPlay.length > 0) {
    //   synth.triggerAttackRelease("C4", 0.01, Tone.now());

      //   conn.send({ notes: notesToPlay, time: time });
      console.log("tsNow:", ts.now());
      conn?.send({ notes: notesToPlay, time: time });
    }
    index++;
  }
  let posIndex = 0;

  function loopPosition(time) {
    let step = posIndex % seqLength;

    let lastStep = (posIndex - 1) % seqLength;
    $(`.cont-col-${lastStep}`).css({ "background-color": "var(--bodyBg)" });
    $(`.cont-col-${step}`).css({ "background-color": "var(--secondaryColor)" });
    posIndex++;
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
