import { io } from "socket.io-client";
import { connections } from "./connections";
export const socket =  io();

export function broadcastToAllConn(msg) {
    if (connections.length != 0) {
      connections.forEach((conn) => {
        conn.send(msg);
      });
    }
  }