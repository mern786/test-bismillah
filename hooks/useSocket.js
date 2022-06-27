
import { createContext, useContext } from 'react';
import socketio from 'socket.io-client';

export const io = socketio('http://localhost:3000')

export const SocketContext = createContext(io);

export const useSocket = () => {
    return useContext(SocketContext)
}