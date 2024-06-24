const channelData = {
  "spotv2": {
    "file": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5079/default_primary.mpd",
    "drm": {
      "clearkey": {
        "keyId": "5efd26da5001363b4d6fa4a9c812ad10",
        "key": "ed6d67d953d14b026b2602cf8846577e"
      }
    }
  },
  "BBC2": {
    "file": "https://wp1-obc1112-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV09003/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4af943b2626c4eb2b3a49f412204ce59",
        "key": "d62226a1df341e526e39a38501050048"
      }
    }
  },
};

var allowedDomain = "livecrichdofficial.pages.dev";
var currentDomain = window.location.hostname;

if (currentDomain !== allowedDomain) {
  window.location.href = "https://telegram.me/livecrichdofficial"; 
}
