# Digital Orchestra

A modern WebRTC-based cross-device music collaboration application. Send synchronized musical notes from one device (sender) to multiple devices (receivers) in the same room using audio frequency pairing.

## ✨ Features

- **Frequency-Based Pairing**: Devices pair automatically by detecting audio frequencies (2000Hz+)
- **WebRTC Communication**: Low-latency peer-to-peer data transmission
- **Synchronized Playback**: Accurate time synchronization for multi-device music playback
- **Step Sequencer**: 16-step, 4-note sequencer for each connected receiver
- **Real-time Visualization**: Frequency spectrum visualization for pairing feedback
- **Modern Stack**: Built with Bun, Vite, Svelte 5, TypeScript, and Tone.js

## 🏗️ Architecture

```
┌─────────────────┐         ┌──────────────────┐
│   Sender Device │         │  Receiver Device │
│                 │         │                  │
│  ┌───────────┐  │         │  ┌────────────┐  │
│  │ Sequencer │  │         │  │ Frequency  │  │
│  │           │  │         │  │  Detector  │  │
│  └─────┬─────┘  │         │  └──────┬─────┘  │
│        │        │         │         │        │
│        ▼        │         │         ▼        │
│  ┌───────────┐  │         │  ┌────────────┐  │
│  │  Beeping  │──┼────┐    │  │   Pairing  │  │
│  │   @ freq  │  │    │    │  │            │  │
│  └───────────┘  │    └────┼─▶└────────────┘  │
│        │        │         │         │        │
│        ▼        │         │         ▼        │
│  ┌───────────┐  │         │  ┌────────────┐  │
│  │  WebRTC   │◀─┼─────────┼─▶│  WebRTC    │  │
│  │  PeerJS   │  │         │  │  PeerJS    │  │
│  └─────┬─────┘  │         │  └──────┬─────┘  │
│        │        │         │         │        │
│        ▼        │         │         ▼        │
│  ┌───────────┐  │         │  ┌────────────┐  │
│  │ WebSocket │◀─┼─────────┼─▶│ WebSocket  │  │
│  └───────────┘  │         │  └────────────┘  │
└─────────────────┘         └──────────────────┘
           │                         │
           └────────┬────────────────┘
                    ▼
         ┌────────────────────┐
         │    Bun Server      │
         │                    │
         │  ┌──────────────┐  │
         │  │ Room Manager │  │
         │  └──────────────┘  │
         │  ┌──────────────┐  │
         │  │  WebSocket   │  │
         │  │   Handler    │  │
         │  └──────────────┘  │
         │  ┌──────────────┐  │
         │  │  Time Sync   │  │
         │  └──────────────┘  │
         └────────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh) v1.0 or higher
- Modern web browser with WebRTC support
- Microphone access (for receivers)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/digital-orchestra.git
cd digital-orchestra

# Install dependencies
bun install
```

### Development

```bash
# Start both the Vite dev server and Bun backend
bun run dev
```

This will start:
- Frontend dev server at `http://localhost:5173`
- Backend WebSocket server at `ws://localhost:3000/ws`

### Production Build

```bash
# Build the frontend
bun run build

# Start the production server
bun run start
```

The server will serve both the static files and WebSocket connections on port 3000.

## 📖 How to Use

### As a Sender

1. Open the app and select "Sender" mode
2. Your device will emit a beeping sound at a specific frequency
3. Wait for receivers to connect (they'll appear as sequencers)
4. Click the steps in the sequencer to create patterns
5. Press "Play" to start sending notes to all connected receivers

### As a Receiver

1. Open the app and select "Receiver" mode
2. Allow microphone access when prompted
3. Place your device near the sender to detect the pairing frequency
4. Once paired, you'll automatically connect and be assigned a color
5. Notes will play automatically when the sender plays

## 🛠️ Tech Stack

### Backend
- **Bun**: Runtime and package manager
- **Native WebSockets**: Built-in Bun WebSocket API
- **TypeScript**: Type-safe server code

### Frontend
- **Svelte 5**: Reactive UI framework
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type-safe client code
- **Tone.js**: Web Audio synthesis and scheduling
- **PeerJS**: WebRTC abstraction for peer connections

### Key Features
- **Time Synchronization**: Custom implementation using performance.now() and server timestamps
- **Frequency Detection**: Web Audio API with FFT analysis
- **State Management**: Svelte stores for reactive data
- **Responsive Design**: Mobile-first CSS with modern layout

## 📁 Project Structure

```
digital-orchestra/
├── src/
│   ├── client/              # Frontend code
│   │   ├── lib/
│   │   │   ├── components/  # Svelte components
│   │   │   ├── stores/      # State management
│   │   │   └── utils/       # Audio, WebRTC, time sync
│   │   ├── styles/          # Global CSS
│   │   ├── App.svelte       # Main app component
│   │   └── main.ts          # Entry point
│   ├── server/              # Backend code
│   │   ├── index.ts         # Bun server
│   │   ├── room-manager.ts  # Room/frequency management
│   │   └── websocket-handler.ts
│   └── shared/              # Shared types
│       └── types.ts
├── public/
│   └── audio/               # Audio samples
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
└── package.json
```

## 🐳 Docker Deployment

```bash
# Build the image
docker build -t digital-orchestra .

# Run the container
docker run -p 3000:3000 digital-orchestra
```

## ☁️ Cloud Deployment

### Railway

1. Install Railway CLI: `npm i -g @railway/cli`
2. Login: `railway login`
3. Initialize: `railway init`
4. Deploy: `railway up`

### Fly.io

1. Install flyctl: `curl -L https://fly.io/install.sh | sh`
2. Login: `fly auth login`
3. Launch: `fly launch`
4. Deploy: `fly deploy`

### Environment Variables

For production deployments, set:

```env
PORT=3000
NODE_ENV=production
```

## 🔧 Configuration

### Frequency Range

The app uses frequencies from 2000Hz to 12000Hz (100Hz increments) for pairing. This range is optimal for mobile device speakers and microphones.

Edit in `src/shared/types.ts`:
```typescript
export const FREQUENCY_BASE = 2000;
export const FREQUENCY_INCREMENT = 100;
```

### Audio Samples

Place audio samples in `public/audio/s0/`, `s1/`, `s2/`, etc. Each folder represents a color and should contain:
- `1.mp3` - F#3
- `2.mp3` - E3
- `3.mp3` - C#3
- `4.mp3` - A3

### Time Synchronization

Adjust sync parameters in `src/client/lib/utils/time-sync.ts`:
```typescript
private readonly sampleCount = 10;        // Number of samples
private readonly resyncInterval = 30000;  // Re-sync every 30s
```

## 🐛 Troubleshooting

### Microphone Access Denied

Receivers need microphone access to detect the pairing frequency. Ensure your browser has permission and you're using HTTPS in production (or localhost for development).

### WebRTC Connection Fails

- Check that both devices are on the same network
- Ensure PeerJS cloud server is accessible
- For production, consider hosting your own PeerServer

### Audio Not Playing

- Ensure audio context is started (requires user interaction)
- Check that audio samples are loaded correctly
- Verify Web Audio API support in your browser

### Frequency Detection Not Working

- Increase device volume
- Reduce background noise
- Check microphone permissions
- Adjust detection threshold in `frequency-detector.ts`

## 🔬 Development

### Type Checking

```bash
bun run type-check
```

### Building for Production

```bash
bun run build
```

Output will be in `dist/` directory.

## 📝 API Endpoints

### WebSocket (ws://localhost:3000/ws)

Messages:
- `register-peer`: Register client with peer ID
- `create-room`: Sender creates a room, receives frequency
- `find-room`: Receiver searches for room by frequency
- `leave-room`: Client leaves current room

### HTTP

- `GET /api/time`: Get server timestamp for synchronization
- `GET /api/stats`: Get server statistics (connections, rooms)
- `GET /api/health`: Health check endpoint

## 🎵 Audio Architecture

The app uses Tone.js for audio synthesis and scheduling:

1. **Sender**: Schedules notes with Tone.Transport and sends timestamps
2. **Receiver**: Receives timestamps, calculates offset, plays notes at correct time
3. **Time Sync**: Continuously syncs client time with server for accuracy

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC

## 🙏 Acknowledgments

- Built with [Bun](https://bun.sh)
- Audio powered by [Tone.js](https://tonejs.github.io/)
- WebRTC via [PeerJS](https://peerjs.com/)
- UI with [Svelte](https://svelte.dev/)

## 📚 Migration from v1

This is a complete rewrite from the ground up. The old code is preserved in the `legacy/` folder for reference.

### Major Changes

- ✅ Bun replaces Node.js + Express
- ✅ Native WebSockets replace Socket.io
- ✅ Svelte replaces jQuery
- ✅ Canvas API replaces P5.js
- ✅ Custom time sync replaces timesync library
- ✅ TypeScript throughout
- ✅ Modern build tools (Vite)
- ✅ Improved architecture and code organization

### Breaking Changes

The new version is not compatible with v1 clients. All devices must use the new version.

---

**Made with ❤️ for collaborative music experiences**
