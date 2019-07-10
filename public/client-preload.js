const { ipcRenderer } = require('electron');
const ipc = require('node-ipc');
const isDev = require('electron-is-dev');
const uuid = require('uuid');

let resolveSocketPromise;
let socketPromise = new Promise(resolve => {
  resolveSocketPromise = resolve;
});

ipcRenderer.on('set-socket', (event, { name }) => {
  resolveSocketPromise(name);
});

window.IS_DEV = isDev;
window.uuid = uuid;

window.getServerSocket = () => socketPromise;

window.ipcConnect = (id, func) => {
  ipc.config.silent = true;
  ipc.connectTo(id, () => {
    func(ipc.of[id]);
  });
};
