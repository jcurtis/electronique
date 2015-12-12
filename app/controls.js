let webview;

export function loadControls() {
  webview = document.getElementById('webview');
}

// Media Controls

// Play / Pause
const codePlayPause = `document.querySelector('[data-id="play-pause"]').click()`;
export function playPause() {
  webview.executeJavaScript(codePlayPause);
}

// Forward
const codeForward = `document.querySelector('[data-id="forward"]').click()`;
export function forwardTrack() {
  webview.executeJavaScript(codeForward);
}

// Rewind
const codeRewind = `document.querySelector('[data-id="rewind"]').click()`;
export function rewindTrack() {
  webview.executeJavaScript(codePlayPause);
}

// Browser Controls

export function browserBack() {
  webview.goBack();
}

export function browserForward() {
  webview.goForward();
}
