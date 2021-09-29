# A WebRTC cross-device project
Sending notes via WebRTC to devices in the same room.<br/>

### Paring
To pair the devices the sender makes a beebing sound while the receiving devices detect the pitch. 
The beeping sound plays at a specific frequency which corresponds to a "room" on the server side. Each "room" is separated by 100hz starting from 2000hz to infinity. The frequency-range starts at 2000hz because it's where most speakers in mobile devices are the most efficient.<br/>


### Sending notes
I used [Peer Js](https://github.com/peers/peerjs) for sending the data via WebRTC with the goal of low latency.
The great problem of webRTC in a musical sense, is that it doesn't have a consistent latency. A consistent latency is crucial for making music. The solution is sending notes with corresponding timestamps. MIDI 1.0 does not provide this by default. OSC is a good alternative also usable for other applications. In this project I'm using [Tone.js](https://github.com/Tonejs/Tone.js) which has its own implementation. The timestamp of the note to play must be set in to a time in the future (of the receiving time-context). <br/>
The sequencer in this project only looks realtime because the animation is delayed (about 1.6s).<br/>
A problem which still exists in this project is that the Tone.js time-contexts in the receiving devices do not start perfectly in parallel. So the time on a certain device is slightly off to another device. Using the time of the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object is also not a reliable option due to slight timing differences of different devices.<br/>


To install the dependencies: `npm install` or `yarn` once. <br/>
And then to start it: `npm start` or `yarn start`
