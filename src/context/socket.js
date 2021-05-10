import React from 'react';
import socketio from 'socket.io-client';

export const socket = socketio.connect(
  'https://pds.dev.dokabilisim.com/prematch-events'
);
export const SocketContext = React.createContext();
