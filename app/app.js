// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import os from 'os'; // native node.js module
import { remote, ipcRenderer } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
import env from './env';
import * as controls from './controls';

console.log('Loaded environment variables:', env);

var app = remote.app;
var appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// here files like it is node.js! Welcome to Electron world :)
console.log('The author if this app is:', appDir.read('package.json', 'json').author);

document.addEventListener('DOMContentLoaded', () => {
  // Handle media keys
  controls.loadControls();
  ipcRenderer.on('MediaPlayPause', controls.playPause);
  ipcRenderer.on('MediaNextTrack', controls.forwardTrack);
  ipcRenderer.on('MediaPreviousTrack', controls.rewindTrack);

  // Handle web controls
  document.getElementById('top-panel-controls-back').addEventListener('click', controls.browserBack);
  document.getElementById('top-panel-controls-forward').addEventListener('click', controls.browserForward);
});
