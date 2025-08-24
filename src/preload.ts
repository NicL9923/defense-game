import { contextBridge } from 'electron';

// Minimal safe bridge — extend later as needed
contextBridge.exposeInMainWorld('electron', {
  ping: () => 'pong',
});
