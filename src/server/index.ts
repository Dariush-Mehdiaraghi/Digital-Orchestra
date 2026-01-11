import { RoomManager } from './room-manager';
import { WebSocketHandler } from './websocket-handler';

const PORT = process.env.PORT || 3000;
const roomManager = new RoomManager();
const wsHandler = new WebSocketHandler(roomManager);

// Serve both HTTP and WebSocket on the same port
const server = Bun.serve({
  port: PORT,
  
  async fetch(req, server) {
    const url = new URL(req.url);
    
    // Upgrade WebSocket connections
    if (url.pathname === '/ws') {
      const success = server.upgrade(req, {
        data: {
          connectedAt: Date.now()
        }
      });
      
      if (success) {
        return undefined;
      }
      
      return new Response('WebSocket upgrade failed', { status: 500 });
    }

    // Time sync endpoint
    if (url.pathname === '/api/time') {
      return new Response(JSON.stringify({ 
        serverTime: Date.now(),
        performance: performance.now()
      }), {
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Stats endpoint
    if (url.pathname === '/api/stats') {
      const stats = wsHandler.getStats();
      return new Response(JSON.stringify(stats), {
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Health check
    if (url.pathname === '/api/health') {
      return new Response(JSON.stringify({ status: 'ok' }), {
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Serve static files in production
    if (process.env.NODE_ENV === 'production') {
      const filePath = url.pathname === '/' ? '/index.html' : url.pathname;
      const file = Bun.file(`./dist${filePath}`);
      
      if (await file.exists()) {
        return new Response(file);
      }
    }

    return new Response('Not Found', { status: 404 });
  },

  websocket: {
    open(ws) {
      wsHandler.handleOpen(ws);
    },
    
    message(ws, message) {
      if (typeof message === 'string') {
        wsHandler.handleMessage(ws, message);
      }
    },
    
    close(ws) {
      wsHandler.handleClose(ws);
    }
  }
});

console.log(`👂 Server listening on port ${server.port}`);
console.log(`🌐 WebSocket endpoint: ws://localhost:${server.port}/ws`);
console.log(`⏱️  Time sync endpoint: http://localhost:${server.port}/api/time`);
