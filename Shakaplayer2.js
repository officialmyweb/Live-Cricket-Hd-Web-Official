const channelData = {
  "Tsn1": {
    "file": "https://cors-proxy.cooks.fyi/https://livecdn-iptv001.rumsport.com/stream/770/manifest.mpd"
  },
  "Tsn2": {
    "file": "https://cors-proxy.cooks.fyi/https://livecdn-iptv001.rumsport.com/stream/771/manifest.mpd"
  },
  "Tsn3": {
    "file": "https://cors-proxy.cooks.fyi/https://livecdn-iptv001.rumsport.com/stream/772/manifest.mpd"
  },
  "Tsn4": {
    "file": "https://cors-proxy.cooks.fyi/https://livecdn-iptv001.rumsport.com/stream/773/manifest.mpd"
  },
  "Tsn5": {
    "file": "https://cors-proxy.cooks.fyi/https://livecdn-iptv001.rumsport.com/stream/774/manifest.mpd"
  },
};

function getManifestUri(id) {
  if (channelData[id]) {
    return channelData[id].file;
  } else {
    console.error('Invalid channel id:', id);
    return null;
  }
}
