const channelData = {
  "arena3": {
    "file": "https://webtvstream.bhtelecom.ba/hls6/arena3.mpd",
    "drm": {
      "clearkey": {
        "keyId": "c18b6aa739be4c0b774605fcfb5d6b68",
        "key": "e41c3a6f7532b2e3a828d9580124c89d"
      }
    }
  },
    "arena1": {
    "file": "https://webtvstream.bhtelecom.ba/hls6/arena1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "c18b6aa739be4c0b774605fcfb5d6b68",
        "key": "e41c3a6f7532b2e3a828d9580124c89d"
      }
    }
   },
};
var allowedDomain = "livecrichdofficial.pages.dev";

var currentDomain = window.location.hostname;

if (currentDomain !== allowedDomain) {
  window.location.href = "https://telegram.me/livecrichdofficial"; 
}
