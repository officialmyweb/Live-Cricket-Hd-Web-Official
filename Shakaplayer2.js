const channelData = {
  "Tsn1": {
    "file": "https://livecdn-iptv001.rumsport.com/stream/770/manifest.mpd"
  },
  "Tsn2": {
    "file": "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_253/output/yyy.mpd"
  },
  "Tsn3": {
    "file": "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_254/output/zzz.mpd"
  },
  "Tsn4": {
    "file": "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_255/output/aaa.mpd"
  },
  "Tsn5": {
    "file": "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_256/output/bbb.mpd"
  },
  "Tsn6": {
    "file": "https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_257/output/ccc.mpd"
  }
};

function getManifestUri(id) {
  if (channelData[id]) {
    return channelData[id].file;
  } else {
    console.error('Invalid channel id:', id);
    return null;
  }
}
