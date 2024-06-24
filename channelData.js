const channelData = {
  "Hindi": {
    "file": "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_252/output/manifest.mpd?begin=20240618T074257&end=20240626T074257",
    "drm": {
      "clearkey": {
        "keyId": "e207c2241f225fd7b6c625d6ac33eb47",
        "key": "54038b196ed90ef2ca121db46e9453ae"
      }
    }
  },
  "Star1": {
    "file": "https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_250/output/manifest.mpd?begin=20240618T074323&end=20240626T074323",
    "drm": {
      "clearkey": {
        "keyId": "b9f9f09481655bceae5bb2c979e1a20b",
        "key": "621de8f23a5822c9b5c491de0d9457c8"
      }
    }
  },
  "Star2": {
    "file": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2506/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "79f4028730acca9ab8b00f26158ddb10",
        "key": "91febe843c08c7cc523efd827292e40e"
      }
    }
  }
};

var allowedDomain = "livecrichdofficial.pages.dev";
var currentDomain = window.location.hostname;

if (currentDomain !== allowedDomain) {
  window.location.href = "https://telegram.me/livecrichdofficial"; 
}
