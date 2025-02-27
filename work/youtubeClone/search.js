
const [a,key] = window.location.search.split('=');
const getSearchResult = (key)=>
{
  console.log("getSearchResult",key);

    const result=fetch(`https://youtube138.p.rapidapi.com/search/?q=${key}&hl=en&gl=US`,{
        "method":"GET",
        "headers": {
                "x-rapidapi-key": "9bd7790a85msh29e8f1b16c0db20p1dfb16jsn833ae8fd8acd",
                "x-rapidapi-host": "youtube138.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => {
         return data;
    })
}
// getSearchResult(key);

const searchContent = [
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/JZQN3X0PfE1S4O-xHg8RCrj7s1SZikX8kA6SgpsnpvbHFFb9Wmq2jLETJ38_6cDbAYpyIUuA=s88-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": null,
        "channelId": "UCxoq-PAQeAdk_zyg8YS0JqA",
        "title": "Luis Fonsi"
      },
      "badges": [
        "CC"
      ],
      "descriptionSnippet": "#LuisFonsi #Despacito #Imposible #Calypso #EchamelaCulpa #NadaEsImposible #NothingisImpossible #LF Music video by Luis ...",
      "isLiveNow": false,
      "lengthSeconds": 282,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/kJQP7kiw5Fk/mqdefault_6s.webp?du=3000&sqp=CKrq-70G&rs=AOn4CLCE1BjJc09VXwYLEEXNtCbt_Iifyw",
          "width": 320
        }
      ],
      "publishedTimeText": "8 years ago",
      "stats": {
        "views": 8665617505
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/kJQP7kiw5Fk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCg9eudi8DoM9M-qjPgJBGGkuIgA",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/kJQP7kiw5Fk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMnrGS7UUfb2FyiKXj-RL4eGknVg",
          "width": 720
        }
      ],
      "title": "Luis Fonsi - Despacito ft. Daddy Yankee",
      "videoId": "kJQP7kiw5Fk"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/lmzqETr528LTej78oxrw8r6vJkCUzYfki_S8e2UTBtfSLWNYNsP9N5IKPSV08pyxpnPPjVNm6wU=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [
          {
            "text": "Verified",
            "type": "VERIFIED_CHANNEL"
          }
        ],
        "canonicalBaseUrl": "/@taznetwork",
        "channelId": "UCJ6ERWrxZzb9Ua3oeRcIe0g",
        "title": "Taz Network"
      },
      "badges": [
        "CC"
      ],
      "descriptionSnippet": "Luis Fonsi ‒ Despacito Lyrics ✍️   Ay, ¡Fonsi! ¡D.Y.! Ohhh, oh, no, oh, no, oh Hey, yeah! Dididiri Daddy, go! Sí, sabes que ya ...",
      "isLiveNow": false,
      "lengthSeconds": 241,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/gm3-m2CFVWM/mqdefault_6s.webp?du=3000&sqp=CPHo-70G&rs=AOn4CLBv6xpdFhgsPcxqVwsAbWkJQreQzA",
          "width": 320
        }
      ],
      "publishedTimeText": "7 years ago",
      "stats": {
        "views": 61170558
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/gm3-m2CFVWM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdnMRJ4yJ6vHumS_nU46yxFLqRjQ",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/gm3-m2CFVWM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDVqxUl1l2I_vZGdTz650GR7VsyQ",
          "width": 720
        }
      ],
      "title": "Luis Fonsi ‒ Despacito (Lyrics / Lyric Video) ft. Daddy Yankee",
      "videoId": "gm3-m2CFVWM"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/ytc/AIdro_lLySWq7qWyf8d-XYvPwmJ1p5G2H_3SCl6ZTBiMTXu0c5I=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [
          {
            "text": "Verified",
            "type": "VERIFIED_CHANNEL"
          }
        ],
        "canonicalBaseUrl": "/@MasterDumb",
        "channelId": "UC_s5dj6ILpVm3KdSHwpx7zw",
        "title": "MasterDumb"
      },
      "badges": [],
      "descriptionSnippet": "No copyright infringement intended. For entertainment purposes only. All rights belong to the artist. Promo only Masterdumb ...",
      "isLiveNow": false,
      "lengthSeconds": 251,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/dr_GAJZviR0/mqdefault_6s.webp?du=3000&sqp=CIqB_L0G&rs=AOn4CLBfOz0CWmypEU3_HbMyba1lNe-Pfg",
          "width": 320
        }
      ],
      "publishedTimeText": "7 years ago",
      "stats": {
        "views": 38520106
      },
      "thumbnails": [
        {
          "height": 270,
          "url": "https://i.ytimg.com/vi/dr_GAJZviR0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5YIkR5KbMQOxTcaRoIxBF9Vm_6w",
          "width": 480
        }
      ],
      "title": "Luis Fonsi, Daddy Yankee - Despacito ft. Justin Bieber",
      "videoId": "dr_GAJZviR0"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/H8O0B3UTLsIgqLbVCZp0o3NkMjxY6GrURFWvOq-uC4ERZ7ZroBV0bb8NzJFGPXmDxlUXjw12=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [
          {
            "text": "Verified",
            "type": "VERIFIED_CHANNEL"
          }
        ],
        "canonicalBaseUrl": "/@officiallatincity",
        "channelId": "UCMhlipBOCB760EFv2MzGDJg",
        "title": "Latin City"
      },
      "badges": [],
      "descriptionSnippet": "Luis Fonsi, Daddy Yankee, Justin Bieber - Despacito Remix Letra [Intro: Justin Bieber] Comin' over in my direction So thankful for ...",
      "isLiveNow": false,
      "lengthSeconds": 231,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/eU6aFNEz-PU/mqdefault_6s.webp?du=3000&sqp=COKI_L0G&rs=AOn4CLAEK8KqHoXbhtXEwokB6yYvLWvU3w",
          "width": 320
        }
      ],
      "publishedTimeText": "6 months ago",
      "stats": {
        "views": 285877
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/eU6aFNEz-PU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNNnDSkvLqnc5fe8ItZZbcCegZAQ",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/eU6aFNEz-PU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTkQbUV-5qBXA7wLM8lpE2KadPjw",
          "width": 720
        }
      ],
      "title": "Luis Fonsi, Justin Bieber – Despacito (Lyrics)",
      "videoId": "eU6aFNEz-PU"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/5FluFXxuUer8XfJtWOhQhZMg9lftUdnypv-rqDa1207xe_3s0S7n_DL_aS5PLNDndrlMXT3-iw4=s88-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": null,
        "channelId": "UChbYf0uSwGDJ0oCyVUUnEew",
        "title": "Erika Ender"
      },
      "badges": [],
      "descriptionSnippet": "Video de \"Despacito\" de Erika Ender y Roberto Carlos Suscríbete al canal http://bit.ly/ErikaEnderYT Sigue a Erika Ender: ...",
      "isLiveNow": false,
      "lengthSeconds": 288,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/-bCoFRsKpww/mqdefault_6s.webp?du=3000&sqp=CJT2-70G&rs=AOn4CLBbYA2We7Q7GF7lC9AxtAwANZJkwg",
          "width": 320
        }
      ],
      "publishedTimeText": "7 years ago",
      "stats": {
        "views": 97271233
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/-bCoFRsKpww/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdO8KGL4A81MNdS0p-TWlHPqlcyg",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/-bCoFRsKpww/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYDlS9naSxJ9ky911R42HZYCB9ig",
          "width": 720
        }
      ],
      "title": "Erika Ender & Roberto Carlos - Despacito (En Vivo)",
      "videoId": "-bCoFRsKpww"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/hXibU1z7ILVAW_jLu4xdY-kDSh9fNv5r1DX9i4pU3ancJJjDaKCs-Fhp00eZRRsXvWFUUjACiw=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [
          {
            "text": "Verified",
            "type": "VERIFIED_CHANNEL"
          }
        ],
        "canonicalBaseUrl": "/@RaffyTulfoInAction",
        "channelId": "UCxhygwqQ1ZMoBGQM2yEcNug",
        "title": "Raffy Tulfo in Action"
      },
      "badges": [
        "New"
      ],
      "descriptionSnippet": "PARA SA INYONG MGA SUMBONG AT REKLAMO ⚠️ Maaari po kayong magtungo sa ACTION CENTER ng RAFFY TULFO IN ...",
      "isLiveNow": false,
      "lengthSeconds": 745,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/_0HRDrCGmWk/mqdefault_6s.webp?du=3000&sqp=CKCL_L0G&rs=AOn4CLDiicQx7CccBKlgUFA2Vp43saFMtw",
          "width": 320
        }
      ],
      "publishedTimeText": "1 hour ago",
      "stats": {
        "views": 18518
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/_0HRDrCGmWk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxUuPKZLm2cDSOyqJSqHgx44dvvg",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/_0HRDrCGmWk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCLrxlssstXQhiF1799MxSsqCCdQ",
          "width": 720
        }
      ],
      "title": "MR, ₱2K RAW ANG RATE KAY MRS PER BOOM-BOOM!",
      "videoId": "_0HRDrCGmWk"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/hRPtLrNHCo6_hH9XMZ7vK2fGWgECidxeOkhItCZJoNg3pgiX_Y7V9kzbvNH6gcsg33kUyAipDQ=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": "/@romanticamusicaoficial",
        "channelId": "UC8HEkuYR6IJGMhZ8YqNFB3g",
        "title": "Romantica Musica"
      },
      "badges": [
        "LIVE"
      ],
      "descriptionSnippet": "Fiesta Latina Mix 2024 - Maluma, Shakira, Daddy Yankee, Wisin, Nicky Jam - Pop Latino ...",
      "isLiveNow": true,
      "lengthSeconds": null,
      "movingThumbnails": null,
      "publishedTimeText": null,
      "stats": {
        "viewers": 1288
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/dE4xDQbS-9c/hq720.jpg?v=658e97ab&sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzidIM0GXR3w4pP_jWBn2uhSF31A",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/dE4xDQbS-9c/hq720.jpg?v=658e97ab&sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTw0OHxS9q3_XfFkblXPBC3nF9ag",
          "width": 720
        }
      ],
      "title": "Fiesta Latina Mix 2024 - Maluma, Shakira, Daddy Yankee, Wisin, Nicky Jam - Pop Latino Reggaeton",
      "videoId": "dE4xDQbS-9c"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/LnHg_4Baxxz1VIJSQiRICuTu-Dyj8xDTILeQz8NTXmFAfQLRCqFSS2V1gmg0bHTEifahJQsv4RU=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": "/@Celeb_Stats",
        "channelId": "UCC92b5tSTx5MQoYlgcza6Tg",
        "title": "Celeb Stats"
      },
      "badges": [
        "New"
      ],
      "descriptionSnippet": "Don't forget to subscribe to my channel for interesting comparison videos. *Important:* © We created this video on our own, The ...",
      "isLiveNow": false,
      "lengthSeconds": 155,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/4DmmXavtEtI/mqdefault_6s.webp?du=3000&sqp=CLCQ_L0G&rs=AOn4CLChoY4KIy9vE1-zrEqEIZhEO8pEEQ",
          "width": 320
        }
      ],
      "publishedTimeText": "1 day ago",
      "stats": {
        "views": 27680
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/4DmmXavtEtI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBw0PlfSMdWPwhDSVtTR5f8p8D7ow",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/4DmmXavtEtI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMKQqzTw7x-tDDKL3ZXpme_57lxQ",
          "width": 720
        }
      ],
      "title": "Squid Game Player Death Reason - How They Died",
      "videoId": "4DmmXavtEtI"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/5ZC66G4qZZeHV779ThM3XNXnVFjs8hnqRJddF314JcWa6qxHgi3U6OlreZJ2LgqzMGvaTicdWw=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [
          {
            "text": "Verified",
            "type": "VERIFIED_CHANNEL"
          }
        ],
        "canonicalBaseUrl": "/@OnePHonCignal",
        "channelId": "UCi-D5IxBR2HahDyfJfqy7jA",
        "title": "One PH"
      },
      "badges": [
        "New"
      ],
      "descriptionSnippet": "NewsandViews | Former Senator Antonio Trillanes IV called former President Rodrigo Duterte a fake news factory and a ...",
      "isLiveNow": false,
      "lengthSeconds": 1763,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/tGSy0-Ubg20/mqdefault_6s.webp?du=3000&sqp=CNzq-70G&rs=AOn4CLDDxDE1xuKa0AfmH7lgYePfawg0qg",
          "width": 320
        }
      ],
      "publishedTimeText": "7 hours ago",
      "stats": {
        "views": 50571
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/tGSy0-Ubg20/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYFMm1NcBw1uxfzl8Ko9HZxjmbvw",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/tGSy0-Ubg20/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHc2wLJzeNTBdLzhPMC1v0RRRcGw",
          "width": 720
        }
      ],
      "title": "Trillanes calls ex-Pres. fake news factory, pathological liar | News and Views",
      "videoId": "tGSy0-Ubg20"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/g_B4h2TYJ5CfLmLK6fz1aWV9OodPs-TFrPXUiIyJjv4pgWESxuIXOZb64Iapobe_fMo2jUPpqw=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": "/@FBmovie-k2h",
        "channelId": "UC7a_a7QgXBIvIsLHhNfagyQ",
        "title": "FB movie"
      },
      "badges": [
        "New"
      ],
      "descriptionSnippet": null,
      "isLiveNow": false,
      "lengthSeconds": 5090,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/ErKIbFSF2lY/mqdefault_6s.webp?du=3000&sqp=CLzs-70G&rs=AOn4CLCWUGSXxt08dGwsf4V2DELfFDGayA",
          "width": 320
        }
      ],
      "publishedTimeText": "21 hours ago",
      "stats": {
        "views": 66229
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/ErKIbFSF2lY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9Ml_13hurSqqFGVu2rZj69CgeBA",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/ErKIbFSF2lY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_qzVbhN8aoUxkazuxwomQa2zvjA",
          "width": 720
        }
      ],
      "title": "CHUCK NORRIS VS. THE CORRUPT SYNDICATE – HUNTED WOLF – SPECIAL OPS ACTION IN VIETNAM 2025!",
      "videoId": "ErKIbFSF2lY"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/AwdSpKztmzFRG3b-xxEiGSbQkY8nuwRgEFC7OTAeccd7jTula5t3xbMbP0WHRT8FafSq7uaJ=s88-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": null,
        "channelId": "UCEdqRdgcnZWLYn5mT38aXeg",
        "title": "Nacho"
      },
      "badges": [
        "CC"
      ],
      "descriptionSnippet": "Music video by Nacho performing Bailame. (C) 2017 Universal Music Latino http://vevo.ly/r3gDNS.",
      "isLiveNow": false,
      "lengthSeconds": 241,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/a1J44C-PZ3E/mqdefault_6s.webp?du=3000&sqp=CNT2-70G&rs=AOn4CLBE776XsfPNx1-ecByLQ_X69rX0Ag",
          "width": 320
        }
      ],
      "publishedTimeText": "7 years ago",
      "stats": {
        "views": 417551054
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/a1J44C-PZ3E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCAQ7q3urQ726dtRkoH3gWRgb0nA",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/a1J44C-PZ3E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7ELADUbWUy9YJoJeGyZ8Gmz2a9g",
          "width": 720
        }
      ],
      "title": "Nacho - Bailame",
      "videoId": "a1J44C-PZ3E"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/3xHBs8ylM8K3_W7aOfbVyC949n10FplaTGHd4JbZRmXHCvXulzW6Ek0s7q8jJXX3LffE_LPKrYk=s88-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": null,
        "channelId": "UClZuKq2m0Qu-HkopkSBLpEw",
        "title": "Maluma"
      },
      "badges": [],
      "descriptionSnippet": "Maluma - \"Felices los 4\" (Official Music Video) › Maluma Top Hits: https://smarturl.it/malumatophits › Hawái: ...",
      "isLiveNow": false,
      "lengthSeconds": 291,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/t_jHrUE5IOk/mqdefault_6s.webp?du=3000&sqp=CLaM_L0G&rs=AOn4CLAFv29low3ZJlk9Ayk3mckoM7MhrA",
          "width": 320
        }
      ],
      "publishedTimeText": "7 years ago",
      "stats": {
        "views": 1929489726
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/t_jHrUE5IOk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-Euv1sDVdZfbBdicHgUx51uCORg",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/t_jHrUE5IOk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZcAqYlS5jmsNKI_H4QNGG5pvs7w",
          "width": 720
        }
      ],
      "title": "Maluma - Felices los 4 (Official Video)",
      "videoId": "t_jHrUE5IOk"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/CxDsqtjxJbZGiQiTa-FIF1QJCNWZJN-xdO7Phubd1nvHRCG0x7I64ETp_PYVQQCA5nSn1j8gLQ=s88-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": null,
        "channelId": "UCGkkG-VYVXenlhVIqjH-9oA",
        "title": "Ricky Martin"
      },
      "badges": [],
      "descriptionSnippet": "Ricky Martin feat. Maluma - \"Vente Pa' Ca\" (Official Music Video) Listen to Ricky Martin: https://RickyMartin.lnk.to/listenYD ...",
      "isLiveNow": false,
      "lengthSeconds": 289,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/iOe6dI2JhgU/mqdefault_6s.webp?du=3000&sqp=CLGP_L0G&rs=AOn4CLDAuNQ0dZYiyzgQMXU0PPvf9eTNDg",
          "width": 320
        }
      ],
      "publishedTimeText": "8 years ago",
      "stats": {
        "views": 1936006607
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/iOe6dI2JhgU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8XcyT9tAJgJ3-bnOZVnT64J241g",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/iOe6dI2JhgU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAS0j2kgaf1CfUU2kp9s_jGwpcVtQ",
          "width": 720
        }
      ],
      "title": "Ricky Martin - Vente Pa' Ca (Official Video) ft. Maluma",
      "videoId": "iOe6dI2JhgU"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/xd0RioBWBZmxxON685Ba7j8iSKaILKNp7_Lva9K1qQ4PlUjHwQXqrtur8vnO0Tz1SEBueHeOjg=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": "/@Thewatchershow_",
        "channelId": "UCUEpsI2btQ1wcD2Py2VPA2A",
        "title": "The watcher show"
      },
      "badges": [
        "New"
      ],
      "descriptionSnippet": "New Multiverse Travel For Avengers Doomsday, Secret Wars MCU multiverse explained. America Chavez portals, TVA tempads, ...",
      "isLiveNow": false,
      "lengthSeconds": 786,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/hR_LASJP5nU/mqdefault_6s.webp?du=3000&sqp=CLHw-70G&rs=AOn4CLCdfc15iWrbyxy89AEQ1z-w4p5oJQ",
          "width": 320
        }
      ],
      "publishedTimeText": "22 hours ago",
      "stats": {
        "views": 7206
      },
      "thumbnails": [
        {
          "height": 270,
          "url": "https://i.ytimg.com/vi/hR_LASJP5nU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbJ8xtqwwE4y5-CCR9DvI-f43MbQ",
          "width": 480
        }
      ],
      "title": "New MULTIVERSE Explained For Avengers Doomsday,Secret Wars,fantastic four first steps",
      "videoId": "hR_LASJP5nU"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/ytc/AIdro_nyXrAAt-FJ5azOAUoNd5Iw0aGQb-_b-SLSOkW0B_N2md4=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [
          {
            "text": "Verified",
            "type": "VERIFIED_CHANNEL"
          }
        ],
        "canonicalBaseUrl": "/@luisitocomunica",
        "channelId": "UCECJDeK0MNapZbpaOzxrUPA",
        "title": "Luisito Comunica"
      },
      "badges": [
        "CC"
      ],
      "descriptionSnippet": "Dubai es la segunda ciudad con más récords mundiales. En este video visitamos algunos de los más impresionantes, y algunos ...",
      "isLiveNow": false,
      "lengthSeconds": 852,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/niw4-nsoK2I/mqdefault_6s.webp?du=3000&sqp=CP7x-70G&rs=AOn4CLD-giIFa19lXTNhU3BwGNL7eOUMjg",
          "width": 320
        }
      ],
      "publishedTimeText": "2 months ago",
      "stats": {
        "views": 6720447
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/niw4-nsoK2I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIH-UfZ5aRwgK39sABHfEEzPmWbA",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/niw4-nsoK2I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCByVi9Jv_UyZXlR2lEXhl9MHQTdA",
          "width": 720
        }
      ],
      "title": "Visitando todos los “récords mundiales” de Dubai | ¡Pérdidas millonarias! 🇦🇪🤑",
      "videoId": "niw4-nsoK2I"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/JZQN3X0PfE1S4O-xHg8RCrj7s1SZikX8kA6SgpsnpvbHFFb9Wmq2jLETJ38_6cDbAYpyIUuA=s88-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": null,
        "channelId": "UCxoq-PAQeAdk_zyg8YS0JqA",
        "title": "Luis Fonsi"
      },
      "badges": [],
      "descriptionSnippet": "Luis Fonsi Despacito ft. Daddy Yankee (audio) LETRA: ¡Ay! Fonsi DY Oh-oh Oh no, oh no Oh, eh-yeh (Daddy) Go! Sí, sabes que ...",
      "isLiveNow": false,
      "lengthSeconds": 229,
      "movingThumbnails": null,
      "publishedTimeText": "6 years ago",
      "stats": {
        "views": 2189148
      },
      "thumbnails": [
        {
          "height": 270,
          "url": "https://i.ytimg.com/vi/2bHBUs-k3ac/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAuADigIMCAAQARhSIEQoZTAP&rs=AOn4CLCsGEl4ypqTLEmWeafMTWO_zOGR9Q",
          "width": 480
        }
      ],
      "title": "Luis Fonsi Despacito ft. Daddy Yankee (audio)",
      "videoId": "2bHBUs-k3ac"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/fMDMjRRRMVuZxVeMo9R7gyOy4bIOHBv2faL-065NmHBDDkRMMRtJJtADQ5CneAClPWq130bC=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [
          {
            "text": "Verified",
            "type": "VERIFIED_CHANNEL"
          }
        ],
        "canonicalBaseUrl": "/@7clouds",
        "channelId": "UCNqFDjYTexJDET3rPDrmJKg",
        "title": "7clouds"
      },
      "badges": [
        "CC"
      ],
      "descriptionSnippet": "......... Lyrics: Luis Fonsi, Daddy Yankee - Despacito ft. Justin Bieber [Intro: Justin Bieber] Comin' over in my direction So thankful ...",
      "isLiveNow": false,
      "lengthSeconds": 231,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/TfkP5ubz1z4/mqdefault_6s.webp?du=3000&sqp=CPDz-70G&rs=AOn4CLCmHv1sYMLh45IDSA_fjXyMPSaYpg",
          "width": 320
        }
      ],
      "publishedTimeText": "5 years ago",
      "stats": {
        "views": 72715328
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/TfkP5ubz1z4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXxsS53YwcBoOez5OE4zgPu99KHQ",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/TfkP5ubz1z4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMNe1QWDM6yXmR-lJinYVwvc8I9Q",
          "width": 720
        }
      ],
      "title": "Justin Bieber - Despacito (Lyrics / Letra) ft. Luis Fonsi & Daddy Yankee",
      "videoId": "TfkP5ubz1z4"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/JZQN3X0PfE1S4O-xHg8RCrj7s1SZikX8kA6SgpsnpvbHFFb9Wmq2jLETJ38_6cDbAYpyIUuA=s88-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": null,
        "channelId": "UCxoq-PAQeAdk_zyg8YS0JqA",
        "title": "Luis Fonsi"
      },
      "badges": [],
      "descriptionSnippet": "© 2017 Universal Music Latin Entertainment under exclusive license to Republic Records (RBMG/Def Jam Recordings) Music ...",
      "isLiveNow": false,
      "lengthSeconds": 229,
      "movingThumbnails": null,
      "publishedTimeText": "7 years ago",
      "stats": {
        "views": 684695309
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/72UO0v5ESUo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9eRVhsetOGUVsmlaEWQlqiC-jyQ",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/72UO0v5ESUo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXTg7KrSv3MFfoZNZyIhOYFglAMA",
          "width": 720
        }
      ],
      "title": "Luis Fonsi, Daddy Yankee - Despacito (Audio) ft. Justin Bieber",
      "videoId": "72UO0v5ESUo"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/kUX2kVhHjDStZs-Cgf7vY_N04_cvPBlJk9XuE64I1RbgbFMbKt7d73KU02dfsgncxyF8sS4p2w=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": "/@musicamilagrosa222",
        "channelId": "UC7ddFo6Ac8VCzroqvfheIxQ",
        "title": "Musica Milagrosa"
      },
      "badges": [],
      "descriptionSnippet": "......... Letra/Lyrics: Luis Fonsi - Despacito ft. Daddy Yankee Ay, ¡Fonsi! ¡D.Y.! Ohhh, oh, no, oh, no, oh Hey, yeah! Dididiri Daddy ...",
      "isLiveNow": false,
      "lengthSeconds": 241,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/tQDV9WzHcds/mqdefault_6s.webp?du=3000&sqp=CNXa-70G&rs=AOn4CLBktocqjqSd-vVUYQyfGYyvbTLaSA",
          "width": 320
        }
      ],
      "publishedTimeText": "2 years ago",
      "stats": {
        "views": 3174925
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/tQDV9WzHcds/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTrRFs06xwglRmBTwdEGCdMSbzUA",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/tQDV9WzHcds/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyt3cMZ6TXqCv8hoFQNKSQLG3PjA",
          "width": 720
        }
      ],
      "title": "Luis Fonsi - Despacito (Letra / Lyrics) ft. Daddy Yankee",
      "videoId": "tQDV9WzHcds"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/iwNiSZOpduWBEdvxNvPrXQewPQBcEowKV_ynryk02BzU748jwwgWSYfX4DX_t7R5siiTQDA-RQ=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": "/@Ronny7ampEditz",
        "channelId": "UCAos0VXR9DZf_GrZLcMU6KQ",
        "title": "Ronny7amp"
      },
      "badges": [
        "New"
      ],
      "descriptionSnippet": null,
      "isLiveNow": false,
      "lengthSeconds": 19,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/IYhwbLVAeMQ/mqdefault_6s.webp?du=3000&sqp=CIj3-70G&rs=AOn4CLCkH5Qfs-Tvnv_9voPV0q3S3UaxpA",
          "width": 320
        }
      ],
      "publishedTimeText": "2 days ago",
      "stats": {
        "views": 583
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/IYhwbLVAeMQ/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAqgLigIMCAAQARhTIFsoZTAP&rs=AOn4CLBztbdX7C5v4GhBFV5LtKOnBoq8sw",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/IYhwbLVAeMQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAqgLigIMCAAQARhTIFsoZTAP&rs=AOn4CLB3SM2LpiRetPQrXVthpw0xMhMI-g",
          "width": 720
        }
      ],
      "title": "Bellingham x despacito 🤩😍",
      "videoId": "IYhwbLVAeMQ"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/ytc/AIdro_mlWttmVPr0O_mJoBRITbVaxyngYVDmqmxx0M2xppUH7eU=s88-c-k-c0x00ffffff-no-rj",
            "width": 68
            
          }
        ],
        "badges": [],
        "canonicalBaseUrl": null,
        "channelId": "UC2mWC8LFetf8aMWH_aftopw",
        "title": "Imad Fares"
      },
      "badges": [
        "New",
        "4K"
      ],
      "descriptionSnippet": "#imadfares #despacito #luisfonsi.",
      "isLiveNow": false,
      "lengthSeconds": 268,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/mX8lQkHvPMw/mqdefault_6s.webp?du=3000&sqp=CMzg-70G&rs=AOn4CLDtg5JgUv5V7kQwerG9oRV8unHzWw",
          "width": 320
        }
      ],
      "publishedTimeText": "2 days ago",
      "stats": {
        "views": 10430
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/mX8lQkHvPMw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvDOCZiSwBPkImLlWfadeZKhtrkw",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/mX8lQkHvPMw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2t_EZqjih2JwQrRht3JISzbfB6w",
          "width": 720
        }
      ],
      "title": "Despacito Dance In Old school Mode ☑️ | Imad Fares Cover",
      "videoId": "mX8lQkHvPMw"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/hbHEbznVpV9_yJnlQ8hwPPLPTBuV5d3i6hfbSv6fz8K26ZHboexA726ZDp-tmaG3k6fyWPoW=s88-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": null,
        "channelId": "UCXf1_q9azp9CCmM93-8qohA",
        "title": "Legacy Nation"
      },
      "badges": [],
      "descriptionSnippet": "Luis Fonsi feat. Daddy Yankee - Despacito (Official Music Video) luis fonsi,fonsi,despacito luis fonsi,luis,luis fonsi despacito,luis ...",
      "isLiveNow": false,
      "lengthSeconds": 350,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/gGsqTwENFMI/mqdefault_6s.webp?du=3000&sqp=CPrP-70G&rs=AOn4CLDV95_IjkEptqOmlRL86dRWjOkFug",
          "width": 320
        }
      ],
      "publishedTimeText": "1 year ago",
      "stats": {
        "views": 13807904
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/gGsqTwENFMI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7joFxly4HXLlimmGJIqNa5OEGIA",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/gGsqTwENFMI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFtHz0W_8hPU1rgcW6srPzbljsmQ",
          "width": 720
        }
      ],
      "title": "Luis Fonsi feat. Daddy Yankee - Despacito (Official Music Video)",
      "videoId": "gGsqTwENFMI"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/ccj8xf2nqAGbmkBuamlfoskFKNIl1bCQfXy94kpAlhVFN9aI4gkpiMszHNTi0BUNoLa19H0w=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [
          {
            "text": "Verified",
            "type": "VERIFIED_CHANNEL"
          }
        ],
        "canonicalBaseUrl": "/@ONErpmBR",
        "channelId": "UCEjZPeHi44BbX_g9hfJUlHQ",
        "title": "ONErpm"
      },
      "badges": [],
      "descriptionSnippet": "Erika Ender, compositora do hit mundial \"Despacito\" apresentando a canção em uma performance ao vivo e intimista. Curta ...",
      "isLiveNow": false,
      "lengthSeconds": 267,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/HnYf6mSx7xo/mqdefault_6s.webp?du=3000&sqp=CIDq-70G&rs=AOn4CLBlWomhNX2cK0DzjckY15bZOWlwng",
          "width": 320
        }
      ],
      "publishedTimeText": "6 years ago",
      "stats": {
        "views": 6014602
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/HnYf6mSx7xo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQk11sgfNEc3N6c-_zVNrbJKRnWQ",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/HnYf6mSx7xo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3TwkDgOZMMSr9jgQ7dl41KmSuXQ",
          "width": 720
        }
      ],
      "title": "Erika Ender - Despacito (Ao Vivo)",
      "videoId": "HnYf6mSx7xo"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/ccnTaKLaXrsPCIanw_AUautvnGrXV94DWBrPONTBu4uUCpIgTl1_LSvwvO7SDR7r8AjAt6IrPw=s88-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": null,
        "channelId": "UCjUQQLRSfODi-bCbfP1EMsg",
        "title": "DJ DY"
      },
      "badges": [],
      "descriptionSnippet": "Luis Fonsi, Despacito ft,Daddy Yankee (Official Video)",
      "isLiveNow": false,
      "lengthSeconds": 282,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/DWir_XczIE8/mqdefault_6s.webp?du=3000&sqp=CNXz-70G&rs=AOn4CLD2E3ZIQ4Ag6W84FCV6E2C1AqCznQ",
          "width": 320
        }
      ],
      "publishedTimeText": "1 year ago",
      "stats": {
        "views": 58244431
      },
      "thumbnails": [
        {
          "height": 270,
          "url": "https://i.ytimg.com/vi/DWir_XczIE8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDinmeGuBbHSlAHjTNJNo_2Sgz70w",
          "width": 480
        }
      ],
      "title": "Luis Fonsi, Despacito ft,Daddy Yankee (Official Video)",
      "videoId": "DWir_XczIE8"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/rNNmF5XK6SpfwhSL2Uf-GFiezejcbhfRYax6qTG0wQNHbBldm3YyQ6HLY6Ps4YweUNvXQGvUCg=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [
          {
            "text": "Verified",
            "type": "VERIFIED_CHANNEL"
          }
        ],
        "canonicalBaseUrl": "/@fallontonight",
        "channelId": "UC8-Th83bH_thdKZDJCrn88g",
        "title": "The Tonight Show Starring Jimmy Fallon"
      },
      "badges": [
        "CC"
      ],
      "descriptionSnippet": "Music guest Luis Fonsi performs \"Despacito\" for the Tonight Show audience. Subscribe NOW to The Tonight Show Starring Jimmy ...",
      "isLiveNow": false,
      "lengthSeconds": 247,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/zrJtFy51fRo/mqdefault_6s.webp?du=3000&sqp=CIrs-70G&rs=AOn4CLCznH2X-lNTYhhKgm2d2RzJS29TkA",
          "width": 320
        }
      ],
      "publishedTimeText": "7 years ago",
      "stats": {
        "views": 18811007
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/zrJtFy51fRo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUqrotW32dSX_hoaS0vlLqvcE4vQ",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/zrJtFy51fRo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBk9q0iZfgPvsBUlwKWA4f88u7TDw",
          "width": 720
        }
      ],
      "title": "Luis Fonsi: Despacito",
      "videoId": "zrJtFy51fRo"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/Gg-ADHubFKx8JmJdCrcSfp8uyJ0pQjn6yCxTv2UyzDR_HNwzmtUoAG1uFKmxIRBI0P-QBhECCTg=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": "/@Djbizz1",
        "channelId": "UCrysYJN2EYzRxON8LY-Aodw",
        "title": "Noel Mapanao"
      },
      "badges": [],
      "descriptionSnippet": "DESPACITO REMIX 2024 Credit to all the TIKTOK/YOUTUBE dancers in video MUSIC REMIXED BY: DJ ROMAR Please ...",
      "isLiveNow": false,
      "lengthSeconds": 241,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/22NaCnZ0iHM/mqdefault_6s.webp?du=3000&sqp=CP7x-70G&rs=AOn4CLDthoKnLKf7ujA5Rn4tHCg7Ql2mZw",
          "width": 320
        }
      ],
      "publishedTimeText": "6 months ago",
      "stats": {
        "views": 3009439
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/22NaCnZ0iHM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcaebu3XBpi7SundHoNlRPH9wSSg",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/22NaCnZ0iHM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOZLxNDi7iDWW-slprTrNbeLqBCw",
          "width": 720
        }
      ],
      "title": "Luis Fonsi - Despacito ft. Daddy Yankee REMIX 2024",
      "videoId": "22NaCnZ0iHM"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/s661OVzaTxTxPwFHq0LvwW2vo6iRq8CCh90onhN1BaH09wG9TFfXbQ-EdHhrOUsaMwcIG1wv=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [
          {
            "text": "Verified",
            "type": "VERIFIED_CHANNEL"
          }
        ],
        "canonicalBaseUrl": "/@MarlonAlvesMAs",
        "channelId": "UCkOfNQYegVUzsADNNZNOH2g",
        "title": "Marlon Alves"
      },
      "badges": [],
      "descriptionSnippet": "Contrataciones: assessoriamas@outlook.com Instagram https://www.instagram.com/marlonalvs Fan Page ...",
      "isLiveNow": false,
      "lengthSeconds": 238,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/Q4a9uwV4nmo/mqdefault_6s.webp?du=3000&sqp=CPzr-70G&rs=AOn4CLAdTTWr9y221cskyNrBmeefQaeo6Q",
          "width": 320
        }
      ],
      "publishedTimeText": "8 years ago",
      "stats": {
        "views": 118640132
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/Q4a9uwV4nmo/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhcIGUoRDAP&rs=AOn4CLDRH5QUQt1tJ93x2dOEwwILuAGEUQ",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/Q4a9uwV4nmo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhcIGUoRDAP&rs=AOn4CLCwH-Lpz8ZEiQFbcObK6-2pn7n6ng",
          "width": 720
        }
      ],
      "title": "Despacito - Luis Fonsi (ft. Daddy Yankee) - Marlon Alves Dance MAs",
      "videoId": "Q4a9uwV4nmo"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/ytc/AIdro_n4T6V8jzgyifDeyOMIiLkrFuMV3WnOffG3wPublviXHB8=s68-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": "/@metanagode3635",
        "channelId": "UCwuwIKz0uZlQBXIePHrJpfQ",
        "title": "Meta Nagode"
      },
      "badges": [],
      "descriptionSnippet": "Unfortunatelly Video is only available if you watch from a computer. Choreography: Meta Nagode Instagram: zumbawithmeta ...",
      "isLiveNow": false,
      "lengthSeconds": 277,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/9lEaPkjv7Zs/mqdefault_6s.webp?du=3000&sqp=CLnt-70G&rs=AOn4CLAWqHCex8E3Hj9riN5Ai5q4yXt-fQ",
          "width": 320
        }
      ],
      "publishedTimeText": "7 years ago",
      "stats": {
        "views": 30477056
      },
      "thumbnails": [
        {
          "height": 270,
          "url": "https://i.ytimg.com/vi/9lEaPkjv7Zs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZncSZCINR1QqOZi_2Attoo8ZzRg",
          "width": 480
        }
      ],
      "title": "DESPACITO - Zumba with Meta",
      "videoId": "9lEaPkjv7Zs"
    }
  },
  {
    "type": "video",
    "video": {
      "author": {
        "avatar": [
          {
            "height": 68,
            "url": "https://yt3.ggpht.com/JZQN3X0PfE1S4O-xHg8RCrj7s1SZikX8kA6SgpsnpvbHFFb9Wmq2jLETJ38_6cDbAYpyIUuA=s88-c-k-c0x00ffffff-no-rj",
            "width": 68
          }
        ],
        "badges": [],
        "canonicalBaseUrl": null,
        "channelId": "UCxoq-PAQeAdk_zyg8YS0JqA",
        "title": "Luis Fonsi"
      },
      "badges": [],
      "descriptionSnippet": "#LuisFonsi #Despacito #Vevo #LatinPop #Live.",
      "isLiveNow": false,
      "lengthSeconds": 225,
      "movingThumbnails": [
        {
          "height": 180,
          "url": "https://i.ytimg.com/an_webp/ZpsLsmGo6II/mqdefault_6s.webp?du=3000&sqp=CPTP-70G&rs=AOn4CLC5A279-xMhFzcz6Fgr1qd3_9qugQ",
          "width": 320
        }
      ],
      "publishedTimeText": "7 years ago",
      "stats": {
        "views": 31879323
      },
      "thumbnails": [
        {
          "height": 202,
          "url": "https://i.ytimg.com/vi/ZpsLsmGo6II/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMiEw8m2VBB5bY6ukkwPLtSV_1Nw",
          "width": 360
        },
        {
          "height": 404,
          "url": "https://i.ytimg.com/vi/ZpsLsmGo6II/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmb-iBMZAE26ADkauZd-izRBvBQg",
          "width": 720
        }
      ],
      "title": "Luis Fonsi - Despacito (Live From Conan 2017)",
      "videoId": "ZpsLsmGo6II"
    }
  }
];


const showSearchResults = (searchContent) => {

    const container = document.querySelector('main');
    searchContent.forEach((videoData) => {
        
        const newcard = document.createElement('div');
        newcard.classList.add('card');
        newcard.innerHTML = `
        <img src="${videoData.video.thumbnails[0].url}" alt="" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${videoData.video.title}</h5>
        `;
        container.appendChild(newcard);
      }
    );
};

showSearchResults(searchContent);


