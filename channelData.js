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
    "file": "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_251/output/manifest.mpd?begin=20240618T074352&end=20240626T074352",
    "drm": {
      "clearkey": {
        "keyId": "3ad72a5e844c5285a589dbf3b6d7a2ca",
        "key": "4839362b05b9d30b94df1043f1040356"
      }
    }
  },
};
var allowedDomain = "livecrichdofficial.pages.dev";

var currentDomain = window.location.hostname;

if (currentDomain !== allowedDomain) {
  window.location.href = "https://telegram.me/livecrichdofficial"; 
}
