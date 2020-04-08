# A WebRTC cross-device project
Sending musical notes via WebRTC to devices in the same room.<br/>
Check it out: https://digital-orchestra.herokuapp.com/

### Paring
To pair the devices the sender makes a beebing sound while the receiving devices detect the pitch. 
The beeping sound plays at a specific frequency which corresponds to a "room" on the serve-rside. Every "room" is separated by 100hz starting from 2000hz to infinity. The frequency-range starts at 2000hz because it's where probably most of the speakers in mobile devices are most efficient.<br/>
🤯 A very cool discovery is that it also works in the not perceivable range of 17'000hz upwards (for most adults) on certain devices (my Macbook Pro mid 2015 at least). The problem is that the microphone of certain mobile devices (I tested iPhone 6s, 8, 8plus) don't reach 17'000hz. <br/>
The speakers of the testet mobile devices however reach beyond 20'000hz. I don't know the exact reason for this limitation maybe they have bad A/Ds or a intentionally set lowpass-filter to the input-signal.<br/>

### Sending notes
I used [Peer Js](https://github.com/peers/peerjs) for sending the data via WebRTC with the goal of low latency.
The great problem of webRTC in a musical sense, is that it doesn't have a consistent latency. A consistent latency is crucial for making music. The solution is sending notes with corresponding timestamps. MIDI 1.0 does not provide this by default. OSC is a good alternative also usable for other applications. In this project I'm using [Tone.js](https://github.com/Tonejs/Tone.js) which has its own implementation. The timestamp of the note to play must be set in to a time in the future (of the receiving time-context). <br/>
The sequencer in this project only looks realtime because the animation is delayed (about 1.6s).<br/>
A problem which still exists in this project is that the Tone.js time-contexts in the receiving devices do not start perfectly in parallel. So the time on a certain device is slightly off to another device. Using the time of the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object is also not a reliable option due to slight timing differences of different devices.<br/>

### Architecture and sequence diagramm
![Image of Architecure](/images/ArchitekturDiagramm_Dariush_Mehdiaraghi.png)
![Image of Sequence](/images/Sequence_Diahgramm_Dariush_Mehdiaraghi.png)

To install the dependencies: `npm install` or `yarn` once. <br/>
And then to start it: `npm start` or `yarn start`
