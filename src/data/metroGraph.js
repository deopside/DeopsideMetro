export const metroGraph = {
  "bulvar_rokossovskogo_l1": {
    "id": "bulvar_rokossovskogo_l1",
    "name": "Бульвар Рокоссовского",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.814916,
    "lng": 37.732227,
    "connections": [
      "cherkizovskaya",
      "bulvar_rokossovskogo_l95"
    ],
    "transferConnections": [
      "bulvar_rokossovskogo_l95"
    ]
  },
  "cherkizovskaya": {
    "id": "cherkizovskaya",
    "name": "Черкизовская",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.802787,
    "lng": 37.744863,
    "connections": [
      "bulvar_rokossovskogo_l1",
      "preobrazhenskaya_ploschad"
    ],
    "transferConnections": []
  },
  "preobrazhenskaya_ploschad": {
    "id": "preobrazhenskaya_ploschad",
    "name": "Преображенская площадь",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.796322,
    "lng": 37.713582,
    "connections": [
      "cherkizovskaya",
      "sokolniki_l1"
    ],
    "transferConnections": []
  },
  "sokolniki_l1": {
    "id": "sokolniki_l1",
    "name": "Сокольники",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.789282,
    "lng": 37.679895,
    "connections": [
      "preobrazhenskaya_ploschad",
      "krasnoselskaya",
      "sokolniki_l97"
    ],
    "transferConnections": [
      "sokolniki_l97"
    ]
  },
  "krasnoselskaya": {
    "id": "krasnoselskaya",
    "name": "Красносельская",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.780014,
    "lng": 37.666097,
    "connections": [
      "sokolniki_l1",
      "komsomolskaya_l1"
    ],
    "transferConnections": []
  },
  "komsomolskaya_l1": {
    "id": "komsomolskaya_l1",
    "name": "Комсомольская",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.774072,
    "lng": 37.654565,
    "connections": [
      "krasnoselskaya",
      "krasnye_vorota",
      "komsomolskaya_l5"
    ],
    "transferConnections": [
      "komsomolskaya_l5"
    ]
  },
  "krasnye_vorota": {
    "id": "krasnye_vorota",
    "name": "Красные ворота",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.768307,
    "lng": 37.6478,
    "connections": [
      "komsomolskaya_l1",
      "chistye_prudy"
    ],
    "transferConnections": []
  },
  "chistye_prudy": {
    "id": "chistye_prudy",
    "name": "Чистые пруды",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.76499,
    "lng": 37.638293,
    "connections": [
      "krasnye_vorota",
      "lubyanka"
    ],
    "transferConnections": []
  },
  "lubyanka": {
    "id": "lubyanka",
    "name": "Лубянка",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.759889,
    "lng": 37.625336,
    "connections": [
      "chistye_prudy",
      "ohotnyy_ryad"
    ],
    "transferConnections": []
  },
  "ohotnyy_ryad": {
    "id": "ohotnyy_ryad",
    "name": "Охотный ряд",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.757228,
    "lng": 37.615078,
    "connections": [
      "lubyanka",
      "biblioteka_im_lenina"
    ],
    "transferConnections": []
  },
  "biblioteka_im_lenina": {
    "id": "biblioteka_im_lenina",
    "name": "Библиотека им.Ленина",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.752123,
    "lng": 37.610388,
    "connections": [
      "ohotnyy_ryad",
      "kropotkinskaya"
    ],
    "transferConnections": []
  },
  "kropotkinskaya": {
    "id": "kropotkinskaya",
    "name": "Кропоткинская",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.745297,
    "lng": 37.604217,
    "connections": [
      "biblioteka_im_lenina",
      "park_kultury_l1"
    ],
    "transferConnections": []
  },
  "park_kultury_l1": {
    "id": "park_kultury_l1",
    "name": "Парк культуры",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.736163,
    "lng": 37.595027,
    "connections": [
      "kropotkinskaya",
      "frunzenskaya",
      "park_kultury_l5"
    ],
    "transferConnections": [
      "park_kultury_l5"
    ]
  },
  "frunzenskaya": {
    "id": "frunzenskaya",
    "name": "Фрунзенская",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.727462,
    "lng": 37.58022,
    "connections": [
      "park_kultury_l1",
      "sportivnaya"
    ],
    "transferConnections": []
  },
  "sportivnaya": {
    "id": "sportivnaya",
    "name": "Спортивная",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.722388,
    "lng": 37.562041,
    "connections": [
      "frunzenskaya",
      "vorobevy_gory"
    ],
    "transferConnections": []
  },
  "vorobevy_gory": {
    "id": "vorobevy_gory",
    "name": "Воробьевы горы",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.709169,
    "lng": 37.557293,
    "connections": [
      "sportivnaya",
      "universitet"
    ],
    "transferConnections": []
  },
  "universitet": {
    "id": "universitet",
    "name": "Университет",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.69329,
    "lng": 37.534511,
    "connections": [
      "vorobevy_gory",
      "prospekt_vernadskogo_l1"
    ],
    "transferConnections": []
  },
  "prospekt_vernadskogo_l1": {
    "id": "prospekt_vernadskogo_l1",
    "name": "Проспект Вернадского",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.676549,
    "lng": 37.504584,
    "connections": [
      "universitet",
      "yugo_zapadnaya",
      "prospekt_vernadskogo_l97"
    ],
    "transferConnections": [
      "prospekt_vernadskogo_l97"
    ]
  },
  "yugo_zapadnaya": {
    "id": "yugo_zapadnaya",
    "name": "Юго-Западная",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.663146,
    "lng": 37.482852,
    "connections": [
      "prospekt_vernadskogo_l1",
      "troparevo"
    ],
    "transferConnections": []
  },
  "troparevo": {
    "id": "troparevo",
    "name": "Тропарево",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.6459,
    "lng": 37.4725,
    "connections": [
      "yugo_zapadnaya",
      "rumyantsevo"
    ],
    "transferConnections": []
  },
  "rumyantsevo": {
    "id": "rumyantsevo",
    "name": "Румянцево",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.633,
    "lng": 37.4419,
    "connections": [
      "troparevo",
      "salarevo"
    ],
    "transferConnections": []
  },
  "salarevo": {
    "id": "salarevo",
    "name": "Саларьево",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.6227,
    "lng": 37.424,
    "connections": [
      "rumyantsevo",
      "filatov_lug"
    ],
    "transferConnections": []
  },
  "filatov_lug": {
    "id": "filatov_lug",
    "name": "Филатов луг",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.5997,
    "lng": 37.4075,
    "connections": [
      "salarevo",
      "prokshino"
    ],
    "transferConnections": []
  },
  "prokshino": {
    "id": "prokshino",
    "name": "Прокшино",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.5813,
    "lng": 37.4425,
    "connections": [
      "filatov_lug",
      "olhovaya"
    ],
    "transferConnections": []
  },
  "olhovaya": {
    "id": "olhovaya",
    "name": "Ольховая",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.5692,
    "lng": 37.4589,
    "connections": [
      "prokshino",
      "novomoskovskaya_kommunarka"
    ],
    "transferConnections": []
  },
  "novomoskovskaya_kommunarka": {
    "id": "novomoskovskaya_kommunarka",
    "name": "Новомосковская (Коммунарка)",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.559765,
    "lng": 37.468716,
    "connections": [
      "olhovaya",
      "potapovo",
      "novomoskovskaya"
    ],
    "transferConnections": [
      "novomoskovskaya"
    ]
  },
  "potapovo": {
    "id": "potapovo",
    "name": "Потапово",
    "color": "#E42313",
    "lineName": "Сокольническая",
    "line": "1",
    "lat": 55.552538,
    "lng": 37.490978,
    "connections": [
      "novomoskovskaya_kommunarka"
    ],
    "transferConnections": []
  },
  "hovrino_l2": {
    "id": "hovrino_l2",
    "name": "Ховрино",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.8777,
    "lng": 37.4877,
    "connections": [
      "belomorskaya",
      "hovrino_l135"
    ],
    "transferConnections": [
      "hovrino_l135"
    ]
  },
  "belomorskaya": {
    "id": "belomorskaya",
    "name": "Беломорская",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.8651,
    "lng": 37.4764,
    "connections": [
      "hovrino_l2",
      "rechnoy_vokzal"
    ],
    "transferConnections": []
  },
  "rechnoy_vokzal": {
    "id": "rechnoy_vokzal",
    "name": "Речной вокзал",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.854152,
    "lng": 37.476728,
    "connections": [
      "belomorskaya",
      "vodnyy_stadion"
    ],
    "transferConnections": []
  },
  "vodnyy_stadion": {
    "id": "vodnyy_stadion",
    "name": "Водный стадион",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.838978,
    "lng": 37.487515,
    "connections": [
      "rechnoy_vokzal",
      "voykovskaya"
    ],
    "transferConnections": []
  },
  "voykovskaya": {
    "id": "voykovskaya",
    "name": "Войковская",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.818923,
    "lng": 37.497791,
    "connections": [
      "vodnyy_stadion",
      "sokol"
    ],
    "transferConnections": []
  },
  "sokol": {
    "id": "sokol",
    "name": "Сокол",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.805564,
    "lng": 37.515245,
    "connections": [
      "voykovskaya",
      "aeroport"
    ],
    "transferConnections": []
  },
  "aeroport": {
    "id": "aeroport",
    "name": "Аэропорт",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.800441,
    "lng": 37.530477,
    "connections": [
      "sokol",
      "dinamo"
    ],
    "transferConnections": []
  },
  "dinamo": {
    "id": "dinamo",
    "name": "Динамо",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.789704,
    "lng": 37.558212,
    "connections": [
      "aeroport",
      "belorusskaya_l2"
    ],
    "transferConnections": []
  },
  "belorusskaya_l2": {
    "id": "belorusskaya_l2",
    "name": "Белорусская",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.777439,
    "lng": 37.582107,
    "connections": [
      "dinamo",
      "mayakovskaya",
      "belorusskaya_l5",
      "belorusskaya_l131",
      "belorusskaya_l136"
    ],
    "transferConnections": [
      "belorusskaya_l5",
      "belorusskaya_l131",
      "belorusskaya_l136"
    ]
  },
  "mayakovskaya": {
    "id": "mayakovskaya",
    "name": "Маяковская",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.769808,
    "lng": 37.596192,
    "connections": [
      "belorusskaya_l2",
      "tverskaya"
    ],
    "transferConnections": []
  },
  "tverskaya": {
    "id": "tverskaya",
    "name": "Тверская",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.765343,
    "lng": 37.603918,
    "connections": [
      "mayakovskaya",
      "teatralnaya"
    ],
    "transferConnections": []
  },
  "teatralnaya": {
    "id": "teatralnaya",
    "name": "Театральная",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.758808,
    "lng": 37.61768,
    "connections": [
      "tverskaya",
      "novokuznetskaya"
    ],
    "transferConnections": []
  },
  "novokuznetskaya": {
    "id": "novokuznetskaya",
    "name": "Новокузнецкая",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.742391,
    "lng": 37.62928,
    "connections": [
      "teatralnaya",
      "paveletskaya_l2"
    ],
    "transferConnections": []
  },
  "paveletskaya_l2": {
    "id": "paveletskaya_l2",
    "name": "Павелецкая",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.729741,
    "lng": 37.638693,
    "connections": [
      "novokuznetskaya",
      "avtozavodskaya_l2",
      "paveletskaya_l5"
    ],
    "transferConnections": [
      "paveletskaya_l5"
    ]
  },
  "avtozavodskaya_l2": {
    "id": "avtozavodskaya_l2",
    "name": "Автозаводская",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.706634,
    "lng": 37.657008,
    "connections": [
      "paveletskaya_l2",
      "tehnopark",
      "avtozavodskaya_l95"
    ],
    "transferConnections": [
      "avtozavodskaya_l95"
    ]
  },
  "tehnopark": {
    "id": "tehnopark",
    "name": "Технопарк",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.695,
    "lng": 37.664167,
    "connections": [
      "avtozavodskaya_l2",
      "kolomenskaya"
    ],
    "transferConnections": []
  },
  "kolomenskaya": {
    "id": "kolomenskaya",
    "name": "Коломенская",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.677423,
    "lng": 37.663719,
    "connections": [
      "tehnopark",
      "kashirskaya_l2"
    ],
    "transferConnections": []
  },
  "kashirskaya_l2": {
    "id": "kashirskaya_l2",
    "name": "Каширская",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.655745,
    "lng": 37.649683,
    "connections": [
      "kolomenskaya",
      "kantemirovskaya",
      "kashirskaya_l11",
      "kashirskaya_l97"
    ],
    "transferConnections": [
      "kashirskaya_l11",
      "kashirskaya_l97"
    ]
  },
  "kantemirovskaya": {
    "id": "kantemirovskaya",
    "name": "Кантемировская",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.636107,
    "lng": 37.656218,
    "connections": [
      "kashirskaya_l2",
      "tsaritsyno_l2"
    ],
    "transferConnections": []
  },
  "tsaritsyno_l2": {
    "id": "tsaritsyno_l2",
    "name": "Царицыно",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.620982,
    "lng": 37.669612,
    "connections": [
      "kantemirovskaya",
      "orehovo",
      "tsaritsyno_l132"
    ],
    "transferConnections": [
      "tsaritsyno_l132"
    ]
  },
  "orehovo": {
    "id": "orehovo",
    "name": "Орехово",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.61269,
    "lng": 37.695214,
    "connections": [
      "tsaritsyno_l2",
      "domodedovskaya"
    ],
    "transferConnections": []
  },
  "domodedovskaya": {
    "id": "domodedovskaya",
    "name": "Домодедовская",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.610131,
    "lng": 37.717111,
    "connections": [
      "orehovo",
      "krasnogvardeyskaya"
    ],
    "transferConnections": []
  },
  "krasnogvardeyskaya": {
    "id": "krasnogvardeyskaya",
    "name": "Красногвардейская",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.614075,
    "lng": 37.742697,
    "connections": [
      "domodedovskaya",
      "alma_atinskaya"
    ],
    "transferConnections": []
  },
  "alma_atinskaya": {
    "id": "alma_atinskaya",
    "name": "Алма-Атинская",
    "color": "#4FB04F",
    "lineName": "Замоскворецкая",
    "line": "2",
    "lat": 55.63349,
    "lng": 37.765678,
    "connections": [
      "krasnogvardeyskaya"
    ],
    "transferConnections": []
  },
  "schelkovskaya": {
    "id": "schelkovskaya",
    "name": "Щелковская",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.809962,
    "lng": 37.798261,
    "connections": [
      "pervomayskaya"
    ],
    "transferConnections": []
  },
  "pervomayskaya": {
    "id": "pervomayskaya",
    "name": "Первомайская",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.794376,
    "lng": 37.799364,
    "connections": [
      "schelkovskaya",
      "izmaylovskaya"
    ],
    "transferConnections": []
  },
  "izmaylovskaya": {
    "id": "izmaylovskaya",
    "name": "Измайловская",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.787713,
    "lng": 37.779896,
    "connections": [
      "pervomayskaya",
      "partizanskaya"
    ],
    "transferConnections": []
  },
  "partizanskaya": {
    "id": "partizanskaya",
    "name": "Партизанская",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.788401,
    "lng": 37.74882,
    "connections": [
      "izmaylovskaya",
      "semenovskaya"
    ],
    "transferConnections": []
  },
  "semenovskaya": {
    "id": "semenovskaya",
    "name": "Семеновская",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.783096,
    "lng": 37.719289,
    "connections": [
      "partizanskaya",
      "elektrozavodskaya_l3"
    ],
    "transferConnections": []
  },
  "elektrozavodskaya_l3": {
    "id": "elektrozavodskaya_l3",
    "name": "Электрозаводская",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.782057,
    "lng": 37.7053,
    "connections": [
      "semenovskaya",
      "baumanskaya",
      "elektrozavodskaya_l97",
      "elektrozavodskaya_l98",
      "elektrozavodskaya_l135"
    ],
    "transferConnections": [
      "elektrozavodskaya_l97",
      "elektrozavodskaya_l98",
      "elektrozavodskaya_l135"
    ]
  },
  "baumanskaya": {
    "id": "baumanskaya",
    "name": "Бауманская",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.772405,
    "lng": 37.67904,
    "connections": [
      "elektrozavodskaya_l3",
      "kurskaya_l3"
    ],
    "transferConnections": []
  },
  "kurskaya_l3": {
    "id": "kurskaya_l3",
    "name": "Курская",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.758564,
    "lng": 37.659039,
    "connections": [
      "baumanskaya",
      "ploschad_revolyutsii",
      "kurskaya_l5",
      "kurskaya_l132"
    ],
    "transferConnections": [
      "kurskaya_l5",
      "kurskaya_l132"
    ]
  },
  "ploschad_revolyutsii": {
    "id": "ploschad_revolyutsii",
    "name": "Площадь Революции",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.756741,
    "lng": 37.62236,
    "connections": [
      "kurskaya_l3",
      "arbatskaya_l3"
    ],
    "transferConnections": []
  },
  "arbatskaya_l3": {
    "id": "arbatskaya_l3",
    "name": "Арбатская",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.752312,
    "lng": 37.60349,
    "connections": [
      "ploschad_revolyutsii",
      "smolenskaya_l3",
      "arbatskaya_l4"
    ],
    "transferConnections": [
      "arbatskaya_l4"
    ]
  },
  "smolenskaya_l3": {
    "id": "smolenskaya_l3",
    "name": "Смоленская",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.747713,
    "lng": 37.583802,
    "connections": [
      "arbatskaya_l3",
      "kievskaya_l3",
      "smolenskaya_l4"
    ],
    "transferConnections": [
      "smolenskaya_l4"
    ]
  },
  "kievskaya_l3": {
    "id": "kievskaya_l3",
    "name": "Киевская",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.743117,
    "lng": 37.564132,
    "connections": [
      "smolenskaya_l3",
      "park_pobedy_l3",
      "kievskaya_l4",
      "kievskaya_l5"
    ],
    "transferConnections": [
      "kievskaya_l4",
      "kievskaya_l5"
    ]
  },
  "park_pobedy_l3": {
    "id": "park_pobedy_l3",
    "name": "Парк Победы",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.735679,
    "lng": 37.516865,
    "connections": [
      "kievskaya_l3",
      "slavyanskiy_bulvar_l3",
      "park_pobedy_l133"
    ],
    "transferConnections": [
      "park_pobedy_l133"
    ]
  },
  "slavyanskiy_bulvar_l3": {
    "id": "slavyanskiy_bulvar_l3",
    "name": "Славянский бульвар",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.729542,
    "lng": 37.470973,
    "connections": [
      "park_pobedy_l3",
      "kuntsevskaya_l3",
      "slavyanskiy_bulvar_l131"
    ],
    "transferConnections": [
      "slavyanskiy_bulvar_l131"
    ]
  },
  "kuntsevskaya_l3": {
    "id": "kuntsevskaya_l3",
    "name": "Кунцевская",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.730673,
    "lng": 37.446522,
    "connections": [
      "slavyanskiy_bulvar_l3",
      "molodezhnaya",
      "kuntsevskaya_l4",
      "kuntsevskaya_l97",
      "kuntsevskaya_l131"
    ],
    "transferConnections": [
      "kuntsevskaya_l4",
      "kuntsevskaya_l97",
      "kuntsevskaya_l131"
    ]
  },
  "molodezhnaya": {
    "id": "molodezhnaya",
    "name": "Молодежная",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.741375,
    "lng": 37.415627,
    "connections": [
      "kuntsevskaya_l3",
      "krylatskoe"
    ],
    "transferConnections": []
  },
  "krylatskoe": {
    "id": "krylatskoe",
    "name": "Крылатское",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.756842,
    "lng": 37.408139,
    "connections": [
      "molodezhnaya",
      "strogino"
    ],
    "transferConnections": []
  },
  "strogino": {
    "id": "strogino",
    "name": "Строгино",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.803831,
    "lng": 37.402405,
    "connections": [
      "krylatskoe",
      "myakinino"
    ],
    "transferConnections": []
  },
  "myakinino": {
    "id": "myakinino",
    "name": "Мякинино",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.823342,
    "lng": 37.385214,
    "connections": [
      "strogino",
      "volokolamskaya_l3"
    ],
    "transferConnections": []
  },
  "volokolamskaya_l3": {
    "id": "volokolamskaya_l3",
    "name": "Волоколамская",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.835154,
    "lng": 37.382453,
    "connections": [
      "myakinino",
      "mitino",
      "volokolamskaya_l132"
    ],
    "transferConnections": [
      "volokolamskaya_l132"
    ]
  },
  "mitino": {
    "id": "mitino",
    "name": "Митино",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.846098,
    "lng": 37.36122,
    "connections": [
      "volokolamskaya_l3",
      "pyatnitskoe_shosse"
    ],
    "transferConnections": []
  },
  "pyatnitskoe_shosse": {
    "id": "pyatnitskoe_shosse",
    "name": "Пятницкое шоссе",
    "color": "#0072BA",
    "lineName": "Арбатско-Покровская",
    "line": "3",
    "lat": 55.853634,
    "lng": 37.353108,
    "connections": [
      "mitino"
    ],
    "transferConnections": []
  },
  "kuntsevskaya_l4": {
    "id": "kuntsevskaya_l4",
    "name": "Кунцевская",
    "color": "#1EBCEF",
    "lineName": "Филевская",
    "line": "4",
    "lat": 55.730815,
    "lng": 37.446754,
    "connections": [
      "pionerskaya",
      "kuntsevskaya_l3",
      "kuntsevskaya_l97",
      "kuntsevskaya_l131"
    ],
    "transferConnections": [
      "kuntsevskaya_l3",
      "kuntsevskaya_l97",
      "kuntsevskaya_l131"
    ]
  },
  "pionerskaya": {
    "id": "pionerskaya",
    "name": "Пионерская",
    "color": "#1EBCEF",
    "lineName": "Филевская",
    "line": "4",
    "lat": 55.736027,
    "lng": 37.466728,
    "connections": [
      "kuntsevskaya_l4",
      "filevskiy_park"
    ],
    "transferConnections": []
  },
  "filevskiy_park": {
    "id": "filevskiy_park",
    "name": "Филевский парк",
    "color": "#1EBCEF",
    "lineName": "Филевская",
    "line": "4",
    "lat": 55.739665,
    "lng": 37.483902,
    "connections": [
      "pionerskaya",
      "bagrationovskaya"
    ],
    "transferConnections": []
  },
  "bagrationovskaya": {
    "id": "bagrationovskaya",
    "name": "Багратионовская",
    "color": "#1EBCEF",
    "lineName": "Филевская",
    "line": "4",
    "lat": 55.743544,
    "lng": 37.497042,
    "connections": [
      "filevskiy_park",
      "fili_l4"
    ],
    "transferConnections": []
  },
  "fili_l4": {
    "id": "fili_l4",
    "name": "Фили",
    "color": "#1EBCEF",
    "lineName": "Филевская",
    "line": "4",
    "lat": 55.746763,
    "lng": 37.514035,
    "connections": [
      "bagrationovskaya",
      "kutuzovskaya_l4",
      "fili_l131"
    ],
    "transferConnections": [
      "fili_l131"
    ]
  },
  "kutuzovskaya_l4": {
    "id": "kutuzovskaya_l4",
    "name": "Кутузовская",
    "color": "#1EBCEF",
    "lineName": "Филевская",
    "line": "4",
    "lat": 55.740544,
    "lng": 37.5341,
    "connections": [
      "fili_l4",
      "studencheskaya",
      "kutuzovskaya_l95",
      "kutuzovskaya_l136"
    ],
    "transferConnections": [
      "kutuzovskaya_l95",
      "kutuzovskaya_l136"
    ]
  },
  "studencheskaya": {
    "id": "studencheskaya",
    "name": "Студенческая",
    "color": "#1EBCEF",
    "lineName": "Филевская",
    "line": "4",
    "lat": 55.738761,
    "lng": 37.54842,
    "connections": [
      "kutuzovskaya_l4",
      "kievskaya_l4"
    ],
    "transferConnections": []
  },
  "kievskaya_l4": {
    "id": "kievskaya_l4",
    "name": "Киевская",
    "color": "#1EBCEF",
    "lineName": "Филевская",
    "line": "4",
    "lat": 55.743168,
    "lng": 37.565425,
    "connections": [
      "studencheskaya",
      "smolenskaya_l4",
      "kievskaya_l3",
      "kievskaya_l5"
    ],
    "transferConnections": [
      "kievskaya_l3",
      "kievskaya_l5"
    ]
  },
  "smolenskaya_l4": {
    "id": "smolenskaya_l4",
    "name": "Смоленская",
    "color": "#1EBCEF",
    "lineName": "Филевская",
    "line": "4",
    "lat": 55.749083,
    "lng": 37.582173,
    "connections": [
      "kievskaya_l4",
      "arbatskaya_l4",
      "smolenskaya_l3"
    ],
    "transferConnections": [
      "smolenskaya_l3"
    ]
  },
  "arbatskaya_l4": {
    "id": "arbatskaya_l4",
    "name": "Арбатская",
    "color": "#1EBCEF",
    "lineName": "Филевская",
    "line": "4",
    "lat": 55.752122,
    "lng": 37.601553,
    "connections": [
      "smolenskaya_l4",
      "aleksandrovskiy_sad",
      "arbatskaya_l3"
    ],
    "transferConnections": [
      "arbatskaya_l3"
    ]
  },
  "aleksandrovskiy_sad": {
    "id": "aleksandrovskiy_sad",
    "name": "Александровский сад",
    "color": "#1EBCEF",
    "lineName": "Филевская",
    "line": "4",
    "lat": 55.752255,
    "lng": 37.608775,
    "connections": [
      "arbatskaya_l4",
      "delovoy_tsentr_vystavochnaya"
    ],
    "transferConnections": []
  },
  "delovoy_tsentr_vystavochnaya": {
    "id": "delovoy_tsentr_vystavochnaya",
    "name": "Деловой центр (Выставочная)",
    "color": "#1EBCEF",
    "lineName": "Филевская",
    "line": "4",
    "lat": 55.750243,
    "lng": 37.542641,
    "connections": [
      "aleksandrovskiy_sad",
      "moskva_siti",
      "delovoy_tsentr_l133",
      "delovoy_tsentr_l97"
    ],
    "transferConnections": [
      "delovoy_tsentr_l133",
      "delovoy_tsentr_l97"
    ]
  },
  "moskva_siti": {
    "id": "moskva_siti",
    "name": "Москва-Сити",
    "color": "#1EBCEF",
    "lineName": "Филевская",
    "line": "4",
    "lat": 55.748056,
    "lng": 37.532778,
    "connections": [
      "delovoy_tsentr_vystavochnaya"
    ],
    "transferConnections": []
  },
  "novoslobodskaya": {
    "id": "novoslobodskaya",
    "name": "Новослободская",
    "color": "#915133",
    "lineName": "Кольцевая",
    "line": "5",
    "lat": 55.779606,
    "lng": 37.601252,
    "connections": [
      "prospekt_mira_l5"
    ],
    "transferConnections": []
  },
  "prospekt_mira_l5": {
    "id": "prospekt_mira_l5",
    "name": "Проспект Мира",
    "color": "#915133",
    "lineName": "Кольцевая",
    "line": "5",
    "lat": 55.779584,
    "lng": 37.633646,
    "connections": [
      "novoslobodskaya",
      "komsomolskaya_l5",
      "prospekt_mira_l6"
    ],
    "transferConnections": [
      "prospekt_mira_l6"
    ]
  },
  "komsomolskaya_l5": {
    "id": "komsomolskaya_l5",
    "name": "Комсомольская",
    "color": "#915133",
    "lineName": "Кольцевая",
    "line": "5",
    "lat": 55.775672,
    "lng": 37.654772,
    "connections": [
      "prospekt_mira_l5",
      "kurskaya_l5",
      "komsomolskaya_l1"
    ],
    "transferConnections": [
      "komsomolskaya_l1"
    ]
  },
  "kurskaya_l5": {
    "id": "kurskaya_l5",
    "name": "Курская",
    "color": "#915133",
    "lineName": "Кольцевая",
    "line": "5",
    "lat": 55.758631,
    "lng": 37.661059,
    "connections": [
      "komsomolskaya_l5",
      "taganskaya_l5",
      "kurskaya_l3",
      "kurskaya_l132"
    ],
    "transferConnections": [
      "kurskaya_l3",
      "kurskaya_l132"
    ]
  },
  "taganskaya_l5": {
    "id": "taganskaya_l5",
    "name": "Таганская",
    "color": "#915133",
    "lineName": "Кольцевая",
    "line": "5",
    "lat": 55.742396,
    "lng": 37.653334,
    "connections": [
      "kurskaya_l5",
      "paveletskaya_l5",
      "taganskaya_l7"
    ],
    "transferConnections": [
      "taganskaya_l7"
    ]
  },
  "paveletskaya_l5": {
    "id": "paveletskaya_l5",
    "name": "Павелецкая",
    "color": "#915133",
    "lineName": "Кольцевая",
    "line": "5",
    "lat": 55.731414,
    "lng": 37.636294,
    "connections": [
      "taganskaya_l5",
      "dobryninskaya",
      "paveletskaya_l2"
    ],
    "transferConnections": [
      "paveletskaya_l2"
    ]
  },
  "dobryninskaya": {
    "id": "dobryninskaya",
    "name": "Добрынинская",
    "color": "#915133",
    "lineName": "Кольцевая",
    "line": "5",
    "lat": 55.728994,
    "lng": 37.622533,
    "connections": [
      "paveletskaya_l5",
      "oktyabrskaya_l5"
    ],
    "transferConnections": []
  },
  "oktyabrskaya_l5": {
    "id": "oktyabrskaya_l5",
    "name": "Октябрьская",
    "color": "#915133",
    "lineName": "Кольцевая",
    "line": "5",
    "lat": 55.729264,
    "lng": 37.611049,
    "connections": [
      "dobryninskaya",
      "park_kultury_l5",
      "oktyabrskaya_l6"
    ],
    "transferConnections": [
      "oktyabrskaya_l6"
    ]
  },
  "park_kultury_l5": {
    "id": "park_kultury_l5",
    "name": "Парк культуры",
    "color": "#915133",
    "lineName": "Кольцевая",
    "line": "5",
    "lat": 55.735221,
    "lng": 37.593095,
    "connections": [
      "oktyabrskaya_l5",
      "kievskaya_l5",
      "park_kultury_l1"
    ],
    "transferConnections": [
      "park_kultury_l1"
    ]
  },
  "kievskaya_l5": {
    "id": "kievskaya_l5",
    "name": "Киевская",
    "color": "#915133",
    "lineName": "Кольцевая",
    "line": "5",
    "lat": 55.74361,
    "lng": 37.56735,
    "connections": [
      "park_kultury_l5",
      "krasnopresnenskaya",
      "kievskaya_l3",
      "kievskaya_l4"
    ],
    "transferConnections": [
      "kievskaya_l3",
      "kievskaya_l4"
    ]
  },
  "krasnopresnenskaya": {
    "id": "krasnopresnenskaya",
    "name": "Краснопресненская",
    "color": "#915133",
    "lineName": "Кольцевая",
    "line": "5",
    "lat": 55.760378,
    "lng": 37.577114,
    "connections": [
      "kievskaya_l5",
      "belorusskaya_l5"
    ],
    "transferConnections": []
  },
  "belorusskaya_l5": {
    "id": "belorusskaya_l5",
    "name": "Белорусская",
    "color": "#915133",
    "lineName": "Кольцевая",
    "line": "5",
    "lat": 55.775179,
    "lng": 37.582303,
    "connections": [
      "krasnopresnenskaya",
      "belorusskaya_l2",
      "belorusskaya_l131",
      "belorusskaya_l136"
    ],
    "transferConnections": [
      "belorusskaya_l2",
      "belorusskaya_l131",
      "belorusskaya_l136"
    ]
  },
  "medvedkovo": {
    "id": "medvedkovo",
    "name": "Медведково",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.888103,
    "lng": 37.661562,
    "connections": [
      "babushkinskaya"
    ],
    "transferConnections": []
  },
  "babushkinskaya": {
    "id": "babushkinskaya",
    "name": "Бабушкинская",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.870641,
    "lng": 37.664341,
    "connections": [
      "medvedkovo",
      "sviblovo"
    ],
    "transferConnections": []
  },
  "sviblovo": {
    "id": "sviblovo",
    "name": "Свиблово",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.855558,
    "lng": 37.653379,
    "connections": [
      "babushkinskaya",
      "botanicheskiy_sad_l6"
    ],
    "transferConnections": []
  },
  "botanicheskiy_sad_l6": {
    "id": "botanicheskiy_sad_l6",
    "name": "Ботанический сад",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.844597,
    "lng": 37.637811,
    "connections": [
      "sviblovo",
      "vdnh",
      "botanicheskiy_sad_l95"
    ],
    "transferConnections": [
      "botanicheskiy_sad_l95"
    ]
  },
  "vdnh": {
    "id": "vdnh",
    "name": "ВДНХ",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.819626,
    "lng": 37.640751,
    "connections": [
      "botanicheskiy_sad_l6",
      "alekseevskaya"
    ],
    "transferConnections": []
  },
  "alekseevskaya": {
    "id": "alekseevskaya",
    "name": "Алексеевская",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.807794,
    "lng": 37.638699,
    "connections": [
      "vdnh",
      "rizhskaya_l6"
    ],
    "transferConnections": []
  },
  "rizhskaya_l6": {
    "id": "rizhskaya_l6",
    "name": "Рижская",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.792494,
    "lng": 37.636114,
    "connections": [
      "alekseevskaya",
      "prospekt_mira_l6",
      "rizhskaya_l97",
      "rizhskaya_l132",
      "rizhskaya_l136"
    ],
    "transferConnections": [
      "rizhskaya_l97",
      "rizhskaya_l132",
      "rizhskaya_l136"
    ]
  },
  "prospekt_mira_l6": {
    "id": "prospekt_mira_l6",
    "name": "Проспект Мира",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.781827,
    "lng": 37.633199,
    "connections": [
      "rizhskaya_l6",
      "suharevskaya",
      "prospekt_mira_l5"
    ],
    "transferConnections": [
      "prospekt_mira_l5"
    ]
  },
  "suharevskaya": {
    "id": "suharevskaya",
    "name": "Сухаревская",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.772315,
    "lng": 37.63285,
    "connections": [
      "prospekt_mira_l6",
      "turgenevskaya"
    ],
    "transferConnections": []
  },
  "turgenevskaya": {
    "id": "turgenevskaya",
    "name": "Тургеневская",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.765371,
    "lng": 37.636732,
    "connections": [
      "suharevskaya",
      "kitay_gorod_l6"
    ],
    "transferConnections": []
  },
  "kitay_gorod_l6": {
    "id": "kitay_gorod_l6",
    "name": "Китай-город",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.756498,
    "lng": 37.631326,
    "connections": [
      "turgenevskaya",
      "tretyakovskaya_l6",
      "kitay_gorod_l7"
    ],
    "transferConnections": [
      "kitay_gorod_l7"
    ]
  },
  "tretyakovskaya_l6": {
    "id": "tretyakovskaya_l6",
    "name": "Третьяковская",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.74073,
    "lng": 37.625624,
    "connections": [
      "kitay_gorod_l6",
      "oktyabrskaya_l6",
      "tretyakovskaya_l8"
    ],
    "transferConnections": [
      "tretyakovskaya_l8"
    ]
  },
  "oktyabrskaya_l6": {
    "id": "oktyabrskaya_l6",
    "name": "Октябрьская",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.731232,
    "lng": 37.612851,
    "connections": [
      "tretyakovskaya_l6",
      "shabolovskaya",
      "oktyabrskaya_l5"
    ],
    "transferConnections": [
      "oktyabrskaya_l5"
    ]
  },
  "shabolovskaya": {
    "id": "shabolovskaya",
    "name": "Шаболовская",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.718828,
    "lng": 37.607892,
    "connections": [
      "oktyabrskaya_l6",
      "leninskiy_prospekt"
    ],
    "transferConnections": []
  },
  "leninskiy_prospekt": {
    "id": "leninskiy_prospekt",
    "name": "Ленинский проспект",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.70678,
    "lng": 37.58499,
    "connections": [
      "shabolovskaya",
      "akademicheskaya_l6"
    ],
    "transferConnections": []
  },
  "akademicheskaya_l6": {
    "id": "akademicheskaya_l6",
    "name": "Академическая",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.687147,
    "lng": 37.5723,
    "connections": [
      "leninskiy_prospekt",
      "profsoyuznaya",
      "akademicheskaya_l137"
    ],
    "transferConnections": [
      "akademicheskaya_l137"
    ]
  },
  "profsoyuznaya": {
    "id": "profsoyuznaya",
    "name": "Профсоюзная",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.677671,
    "lng": 37.562595,
    "connections": [
      "akademicheskaya_l6",
      "novye_cheremushki"
    ],
    "transferConnections": []
  },
  "novye_cheremushki": {
    "id": "novye_cheremushki",
    "name": "Новые Черемушки",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.670077,
    "lng": 37.554493,
    "connections": [
      "profsoyuznaya",
      "kaluzhskaya"
    ],
    "transferConnections": []
  },
  "kaluzhskaya": {
    "id": "kaluzhskaya",
    "name": "Калужская",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.656682,
    "lng": 37.540075,
    "connections": [
      "novye_cheremushki",
      "belyaevo"
    ],
    "transferConnections": []
  },
  "belyaevo": {
    "id": "belyaevo",
    "name": "Беляево",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.642357,
    "lng": 37.526115,
    "connections": [
      "kaluzhskaya",
      "konkovo"
    ],
    "transferConnections": []
  },
  "konkovo": {
    "id": "konkovo",
    "name": "Коньково",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.631857,
    "lng": 37.519156,
    "connections": [
      "belyaevo",
      "teplyy_stan"
    ],
    "transferConnections": []
  },
  "teplyy_stan": {
    "id": "teplyy_stan",
    "name": "Теплый Стан",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.61873,
    "lng": 37.505912,
    "connections": [
      "konkovo",
      "yasenevo"
    ],
    "transferConnections": []
  },
  "yasenevo": {
    "id": "yasenevo",
    "name": "Ясенево",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.606182,
    "lng": 37.5334,
    "connections": [
      "teplyy_stan",
      "novoyasenevskaya"
    ],
    "transferConnections": []
  },
  "novoyasenevskaya": {
    "id": "novoyasenevskaya",
    "name": "Новоясеневская",
    "color": "#F07E24",
    "lineName": "Калужско-Рижская",
    "line": "6",
    "lat": 55.601947,
    "lng": 37.553017,
    "connections": [
      "yasenevo"
    ],
    "transferConnections": []
  },
  "planernaya": {
    "id": "planernaya",
    "name": "Планерная",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.859676,
    "lng": 37.436808,
    "connections": [
      "shodnenskaya"
    ],
    "transferConnections": []
  },
  "shodnenskaya": {
    "id": "shodnenskaya",
    "name": "Сходненская",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.84926,
    "lng": 37.44076,
    "connections": [
      "planernaya",
      "tushinskaya_l7"
    ],
    "transferConnections": []
  },
  "tushinskaya_l7": {
    "id": "tushinskaya_l7",
    "name": "Тушинская",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.825479,
    "lng": 37.437024,
    "connections": [
      "shodnenskaya",
      "spartak",
      "tushinskaya_l132"
    ],
    "transferConnections": [
      "tushinskaya_l132"
    ]
  },
  "spartak": {
    "id": "spartak",
    "name": "Спартак",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.8182,
    "lng": 37.4352,
    "connections": [
      "tushinskaya_l7",
      "schukinskaya"
    ],
    "transferConnections": []
  },
  "schukinskaya": {
    "id": "schukinskaya",
    "name": "Щукинская",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.8094,
    "lng": 37.463241,
    "connections": [
      "spartak",
      "oktyabrskoe_pole"
    ],
    "transferConnections": []
  },
  "oktyabrskoe_pole": {
    "id": "oktyabrskoe_pole",
    "name": "Октябрьское поле",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.793581,
    "lng": 37.493317,
    "connections": [
      "schukinskaya",
      "polezhaevskaya"
    ],
    "transferConnections": []
  },
  "polezhaevskaya": {
    "id": "polezhaevskaya",
    "name": "Полежаевская",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.777201,
    "lng": 37.517895,
    "connections": [
      "oktyabrskoe_pole",
      "begovaya_l7"
    ],
    "transferConnections": []
  },
  "begovaya_l7": {
    "id": "begovaya_l7",
    "name": "Беговая",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.773505,
    "lng": 37.545518,
    "connections": [
      "polezhaevskaya",
      "ulitsa_1905_goda",
      "begovaya_l131"
    ],
    "transferConnections": [
      "begovaya_l131"
    ]
  },
  "ulitsa_1905_goda": {
    "id": "ulitsa_1905_goda",
    "name": "Улица 1905 года",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.763944,
    "lng": 37.562271,
    "connections": [
      "begovaya_l7",
      "barrikadnaya"
    ],
    "transferConnections": []
  },
  "barrikadnaya": {
    "id": "barrikadnaya",
    "name": "Баррикадная",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.760793,
    "lng": 37.581242,
    "connections": [
      "ulitsa_1905_goda",
      "pushkinskaya"
    ],
    "transferConnections": []
  },
  "pushkinskaya": {
    "id": "pushkinskaya",
    "name": "Пушкинская",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.765607,
    "lng": 37.604356,
    "connections": [
      "barrikadnaya",
      "kuznetskiy_most"
    ],
    "transferConnections": []
  },
  "kuznetskiy_most": {
    "id": "kuznetskiy_most",
    "name": "Кузнецкий мост",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.761498,
    "lng": 37.624423,
    "connections": [
      "pushkinskaya",
      "kitay_gorod_l7"
    ],
    "transferConnections": []
  },
  "kitay_gorod_l7": {
    "id": "kitay_gorod_l7",
    "name": "Китай-город",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.75436,
    "lng": 37.633877,
    "connections": [
      "kuznetskiy_most",
      "taganskaya_l7",
      "kitay_gorod_l6"
    ],
    "transferConnections": [
      "kitay_gorod_l6"
    ]
  },
  "taganskaya_l7": {
    "id": "taganskaya_l7",
    "name": "Таганская",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.739502,
    "lng": 37.653605,
    "connections": [
      "kitay_gorod_l7",
      "proletarskaya",
      "taganskaya_l5"
    ],
    "transferConnections": [
      "taganskaya_l5"
    ]
  },
  "proletarskaya": {
    "id": "proletarskaya",
    "name": "Пролетарская",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.731546,
    "lng": 37.666917,
    "connections": [
      "taganskaya_l7",
      "volgogradskiy_prospekt"
    ],
    "transferConnections": []
  },
  "volgogradskiy_prospekt": {
    "id": "volgogradskiy_prospekt",
    "name": "Волгоградский проспект",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.725546,
    "lng": 37.685197,
    "connections": [
      "proletarskaya",
      "tekstilschiki_l7"
    ],
    "transferConnections": []
  },
  "tekstilschiki_l7": {
    "id": "tekstilschiki_l7",
    "name": "Текстильщики",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.709211,
    "lng": 37.732117,
    "connections": [
      "volgogradskiy_prospekt",
      "kuzminki",
      "tekstilschiki_l97",
      "tekstilschiki_l132"
    ],
    "transferConnections": [
      "tekstilschiki_l97",
      "tekstilschiki_l132"
    ]
  },
  "kuzminki": {
    "id": "kuzminki",
    "name": "Кузьминки",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.705493,
    "lng": 37.763295,
    "connections": [
      "tekstilschiki_l7",
      "ryazanskiy_prospekt"
    ],
    "transferConnections": []
  },
  "ryazanskiy_prospekt": {
    "id": "ryazanskiy_prospekt",
    "name": "Рязанский проспект",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.716139,
    "lng": 37.792694,
    "connections": [
      "kuzminki",
      "vyhino_l7"
    ],
    "transferConnections": []
  },
  "vyhino_l7": {
    "id": "vyhino_l7",
    "name": "Выхино",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.715983,
    "lng": 37.816788,
    "connections": [
      "ryazanskiy_prospekt",
      "lermontovskiy_prospekt",
      "vyhino_l135"
    ],
    "transferConnections": [
      "vyhino_l135"
    ]
  },
  "lermontovskiy_prospekt": {
    "id": "lermontovskiy_prospekt",
    "name": "Лермонтовский проспект",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.702036,
    "lng": 37.851044,
    "connections": [
      "vyhino_l7",
      "zhulebino"
    ],
    "transferConnections": []
  },
  "zhulebino": {
    "id": "zhulebino",
    "name": "Жулебино",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.684722,
    "lng": 37.855833,
    "connections": [
      "lermontovskiy_prospekt",
      "kotelniki"
    ],
    "transferConnections": []
  },
  "kotelniki": {
    "id": "kotelniki",
    "name": "Котельники",
    "color": "#943E90",
    "lineName": "Таганско-Краснопресненская",
    "line": "7",
    "lat": 55.6743,
    "lng": 37.8582,
    "connections": [
      "zhulebino"
    ],
    "transferConnections": []
  },
  "novokosino": {
    "id": "novokosino",
    "name": "Новокосино",
    "color": "#FFCD1C",
    "lineName": "Калининская",
    "line": "8",
    "lat": 55.745113,
    "lng": 37.864052,
    "connections": [
      "novogireevo_l8"
    ],
    "transferConnections": []
  },
  "novogireevo_l8": {
    "id": "novogireevo_l8",
    "name": "Новогиреево",
    "color": "#FFCD1C",
    "lineName": "Калининская",
    "line": "8",
    "lat": 55.752237,
    "lng": 37.814587,
    "connections": [
      "novokosino",
      "perovo_l8"
    ],
    "transferConnections": []
  },
  "perovo_l8": {
    "id": "perovo_l8",
    "name": "Перово",
    "color": "#FFCD1C",
    "lineName": "Калининская",
    "line": "8",
    "lat": 55.75098,
    "lng": 37.78422,
    "connections": [
      "novogireevo_l8",
      "shosse_entuziastov_l8"
    ],
    "transferConnections": []
  },
  "shosse_entuziastov_l8": {
    "id": "shosse_entuziastov_l8",
    "name": "Шоссе Энтузиастов",
    "color": "#FFCD1C",
    "lineName": "Калининская",
    "line": "8",
    "lat": 55.75809,
    "lng": 37.751703,
    "connections": [
      "perovo_l8",
      "aviamotornaya_l8",
      "shosse_entuziastov_l95"
    ],
    "transferConnections": [
      "shosse_entuziastov_l95"
    ]
  },
  "aviamotornaya_l8": {
    "id": "aviamotornaya_l8",
    "name": "Авиамоторная",
    "color": "#FFCD1C",
    "lineName": "Калининская",
    "line": "8",
    "lat": 55.751933,
    "lng": 37.717444,
    "connections": [
      "shosse_entuziastov_l8",
      "ploschad_ilicha",
      "aviamotornaya_l97",
      "aviamotornaya_l98",
      "aviamotornaya_l135"
    ],
    "transferConnections": [
      "aviamotornaya_l97",
      "aviamotornaya_l98",
      "aviamotornaya_l135"
    ]
  },
  "ploschad_ilicha": {
    "id": "ploschad_ilicha",
    "name": "Площадь Ильича",
    "color": "#FFCD1C",
    "lineName": "Калининская",
    "line": "8",
    "lat": 55.747115,
    "lng": 37.680726,
    "connections": [
      "aviamotornaya_l8",
      "marksistskaya"
    ],
    "transferConnections": []
  },
  "marksistskaya": {
    "id": "marksistskaya",
    "name": "Марксистская",
    "color": "#FFCD1C",
    "lineName": "Калининская",
    "line": "8",
    "lat": 55.740746,
    "lng": 37.65604,
    "connections": [
      "ploschad_ilicha",
      "tretyakovskaya_l8"
    ],
    "transferConnections": []
  },
  "tretyakovskaya_l8": {
    "id": "tretyakovskaya_l8",
    "name": "Третьяковская",
    "color": "#FFCD1C",
    "lineName": "Калининская",
    "line": "8",
    "lat": 55.741125,
    "lng": 37.626142,
    "connections": [
      "marksistskaya",
      "tretyakovskaya_l6"
    ],
    "transferConnections": [
      "tretyakovskaya_l6"
    ]
  },
  "altufevo": {
    "id": "altufevo",
    "name": "Алтуфьево",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.899034,
    "lng": 37.586473,
    "connections": [
      "bibirevo"
    ],
    "transferConnections": []
  },
  "bibirevo": {
    "id": "bibirevo",
    "name": "Бибирево",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.883868,
    "lng": 37.603011,
    "connections": [
      "altufevo",
      "otradnoe"
    ],
    "transferConnections": []
  },
  "otradnoe": {
    "id": "otradnoe",
    "name": "Отрадное",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.864273,
    "lng": 37.605066,
    "connections": [
      "bibirevo",
      "vladykino_l9"
    ],
    "transferConnections": []
  },
  "vladykino_l9": {
    "id": "vladykino_l9",
    "name": "Владыкино",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.848236,
    "lng": 37.590451,
    "connections": [
      "otradnoe",
      "petrovsko_razumovskaya_l9",
      "vladykino_l95"
    ],
    "transferConnections": [
      "vladykino_l95"
    ]
  },
  "petrovsko_razumovskaya_l9": {
    "id": "petrovsko_razumovskaya_l9",
    "name": "Петровско-Разумовская",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.836565,
    "lng": 37.575512,
    "connections": [
      "vladykino_l9",
      "timiryazevskaya_l9",
      "petrovsko_razumovskaya_l10"
    ],
    "transferConnections": [
      "petrovsko_razumovskaya_l10"
    ]
  },
  "timiryazevskaya_l9": {
    "id": "timiryazevskaya_l9",
    "name": "Тимирязевская",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.81866,
    "lng": 37.574498,
    "connections": [
      "petrovsko_razumovskaya_l9",
      "dmitrovskaya_l9",
      "timiryazevskaya_l131"
    ],
    "transferConnections": [
      "timiryazevskaya_l131"
    ]
  },
  "dmitrovskaya_l9": {
    "id": "dmitrovskaya_l9",
    "name": "Дмитровская",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.808056,
    "lng": 37.581734,
    "connections": [
      "timiryazevskaya_l9",
      "savelovskaya_l9",
      "dmitrovskaya_l132"
    ],
    "transferConnections": [
      "dmitrovskaya_l132"
    ]
  },
  "savelovskaya_l9": {
    "id": "savelovskaya_l9",
    "name": "Савёловская",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.794054,
    "lng": 37.587163,
    "connections": [
      "dmitrovskaya_l9",
      "mendeleevskaya",
      "savelovskaya_l97",
      "savelovskaya_l131",
      "savelovskaya_l136"
    ],
    "transferConnections": [
      "savelovskaya_l97",
      "savelovskaya_l131",
      "savelovskaya_l136"
    ]
  },
  "mendeleevskaya": {
    "id": "mendeleevskaya",
    "name": "Менделеевская",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.781999,
    "lng": 37.599141,
    "connections": [
      "savelovskaya_l9",
      "tsvetnoy_bulvar"
    ],
    "transferConnections": []
  },
  "tsvetnoy_bulvar": {
    "id": "tsvetnoy_bulvar",
    "name": "Цветной бульвар",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.771653,
    "lng": 37.620466,
    "connections": [
      "mendeleevskaya",
      "chehovskaya"
    ],
    "transferConnections": []
  },
  "chehovskaya": {
    "id": "chehovskaya",
    "name": "Чеховская",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.765747,
    "lng": 37.608493,
    "connections": [
      "tsvetnoy_bulvar",
      "borovitskaya"
    ],
    "transferConnections": []
  },
  "borovitskaya": {
    "id": "borovitskaya",
    "name": "Боровицкая",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.750399,
    "lng": 37.60934,
    "connections": [
      "chehovskaya",
      "polyanka"
    ],
    "transferConnections": []
  },
  "polyanka": {
    "id": "polyanka",
    "name": "Полянка",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.736795,
    "lng": 37.618594,
    "connections": [
      "borovitskaya",
      "serpuhovskaya"
    ],
    "transferConnections": []
  },
  "serpuhovskaya": {
    "id": "serpuhovskaya",
    "name": "Серпуховская",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.726548,
    "lng": 37.624792,
    "connections": [
      "polyanka",
      "tulskaya"
    ],
    "transferConnections": []
  },
  "tulskaya": {
    "id": "tulskaya",
    "name": "Тульская",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.70961,
    "lng": 37.622569,
    "connections": [
      "serpuhovskaya",
      "nagatinskaya"
    ],
    "transferConnections": []
  },
  "nagatinskaya": {
    "id": "nagatinskaya",
    "name": "Нагатинская",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.682099,
    "lng": 37.620917,
    "connections": [
      "tulskaya",
      "nagornaya"
    ],
    "transferConnections": []
  },
  "nagornaya": {
    "id": "nagornaya",
    "name": "Нагорная",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.672962,
    "lng": 37.610397,
    "connections": [
      "nagatinskaya",
      "nahimovskiy_prospekt"
    ],
    "transferConnections": []
  },
  "nahimovskiy_prospekt": {
    "id": "nahimovskiy_prospekt",
    "name": "Нахимовский проспект",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.662379,
    "lng": 37.605274,
    "connections": [
      "nagornaya",
      "sevastopolskaya"
    ],
    "transferConnections": []
  },
  "sevastopolskaya": {
    "id": "sevastopolskaya",
    "name": "Севастопольская",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.651451,
    "lng": 37.59809,
    "connections": [
      "nahimovskiy_prospekt",
      "chertanovskaya"
    ],
    "transferConnections": []
  },
  "chertanovskaya": {
    "id": "chertanovskaya",
    "name": "Чертановская",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.640538,
    "lng": 37.606065,
    "connections": [
      "sevastopolskaya",
      "yuzhnaya"
    ],
    "transferConnections": []
  },
  "yuzhnaya": {
    "id": "yuzhnaya",
    "name": "Южная",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.622436,
    "lng": 37.609047,
    "connections": [
      "chertanovskaya",
      "prazhskaya"
    ],
    "transferConnections": []
  },
  "prazhskaya": {
    "id": "prazhskaya",
    "name": "Пражская",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.610962,
    "lng": 37.602386,
    "connections": [
      "yuzhnaya",
      "ulitsa_akademika_yangelya"
    ],
    "transferConnections": []
  },
  "ulitsa_akademika_yangelya": {
    "id": "ulitsa_akademika_yangelya",
    "name": "Улица Академика Янгеля",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.596753,
    "lng": 37.601498,
    "connections": [
      "prazhskaya",
      "annino"
    ],
    "transferConnections": []
  },
  "annino": {
    "id": "annino",
    "name": "Аннино",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.583477,
    "lng": 37.596999,
    "connections": [
      "ulitsa_akademika_yangelya",
      "bulvar_dmitriya_donskogo"
    ],
    "transferConnections": []
  },
  "bulvar_dmitriya_donskogo": {
    "id": "bulvar_dmitriya_donskogo",
    "name": "Бульвар Дмитрия Донского",
    "color": "#ADACAC",
    "lineName": "Серпуховско-Тимирязевская",
    "line": "9",
    "lat": 55.568201,
    "lng": 37.576856,
    "connections": [
      "annino"
    ],
    "transferConnections": []
  },
  "fizteh": {
    "id": "fizteh",
    "name": "Физтех",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.921389,
    "lng": 37.546389,
    "connections": [
      "lianozovo_l10"
    ],
    "transferConnections": []
  },
  "lianozovo_l10": {
    "id": "lianozovo_l10",
    "name": "Лианозово",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.931111,
    "lng": 37.543611,
    "connections": [
      "fizteh",
      "yahromskaya"
    ],
    "transferConnections": []
  },
  "yahromskaya": {
    "id": "yahromskaya",
    "name": "Яхромская",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.8775,
    "lng": 37.545833,
    "connections": [
      "lianozovo_l10",
      "seligerskaya"
    ],
    "transferConnections": []
  },
  "seligerskaya": {
    "id": "seligerskaya",
    "name": "Селигерская",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.86483,
    "lng": 37.55005,
    "connections": [
      "yahromskaya",
      "verhnie_lihobory"
    ],
    "transferConnections": []
  },
  "verhnie_lihobory": {
    "id": "verhnie_lihobory",
    "name": "Верхние Лихоборы",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.85566,
    "lng": 37.56282,
    "connections": [
      "seligerskaya",
      "okruzhnaya_l10"
    ],
    "transferConnections": []
  },
  "okruzhnaya_l10": {
    "id": "okruzhnaya_l10",
    "name": "Окружная",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.848889,
    "lng": 37.571111,
    "connections": [
      "verhnie_lihobory",
      "petrovsko_razumovskaya_l10",
      "okruzhnaya_l95",
      "okruzhnaya_l131"
    ],
    "transferConnections": [
      "okruzhnaya_l95",
      "okruzhnaya_l131"
    ]
  },
  "petrovsko_razumovskaya_l10": {
    "id": "petrovsko_razumovskaya_l10",
    "name": "Петровско-Разумовская",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.836667,
    "lng": 37.575556,
    "connections": [
      "okruzhnaya_l10",
      "fonvizinskaya",
      "petrovsko_razumovskaya_l9"
    ],
    "transferConnections": [
      "petrovsko_razumovskaya_l9"
    ]
  },
  "fonvizinskaya": {
    "id": "fonvizinskaya",
    "name": "Фонвизинская",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.822778,
    "lng": 37.588056,
    "connections": [
      "petrovsko_razumovskaya_l10",
      "butyrskaya"
    ],
    "transferConnections": []
  },
  "butyrskaya": {
    "id": "butyrskaya",
    "name": "Бутырская ",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.813333,
    "lng": 37.602778,
    "connections": [
      "fonvizinskaya",
      "marina_roscha_l10"
    ],
    "transferConnections": []
  },
  "marina_roscha_l10": {
    "id": "marina_roscha_l10",
    "name": "Марьина Роща",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.793723,
    "lng": 37.61618,
    "connections": [
      "butyrskaya",
      "dostoevskaya"
    ],
    "transferConnections": []
  },
  "dostoevskaya": {
    "id": "dostoevskaya",
    "name": "Достоевская",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.781667,
    "lng": 37.613889,
    "connections": [
      "marina_roscha_l10",
      "trubnaya"
    ],
    "transferConnections": []
  },
  "trubnaya": {
    "id": "trubnaya",
    "name": "Трубная",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.76771,
    "lng": 37.621926,
    "connections": [
      "dostoevskaya",
      "sretenskiy_bulvar"
    ],
    "transferConnections": []
  },
  "sretenskiy_bulvar": {
    "id": "sretenskiy_bulvar",
    "name": "Сретенский бульвар",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.766106,
    "lng": 37.635688,
    "connections": [
      "trubnaya",
      "chkalovskaya"
    ],
    "transferConnections": []
  },
  "chkalovskaya": {
    "id": "chkalovskaya",
    "name": "Чкаловская",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.755951,
    "lng": 37.659293,
    "connections": [
      "sretenskiy_bulvar",
      "rimskaya"
    ],
    "transferConnections": []
  },
  "rimskaya": {
    "id": "rimskaya",
    "name": "Римская",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.747027,
    "lng": 37.679996,
    "connections": [
      "chkalovskaya",
      "krestyanskaya_zastava"
    ],
    "transferConnections": []
  },
  "krestyanskaya_zastava": {
    "id": "krestyanskaya_zastava",
    "name": "Крестьянская застава",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.732278,
    "lng": 37.665325,
    "connections": [
      "rimskaya",
      "dubrovka_l10"
    ],
    "transferConnections": []
  },
  "dubrovka_l10": {
    "id": "dubrovka_l10",
    "name": "Дубровка",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.71807,
    "lng": 37.676259,
    "connections": [
      "krestyanskaya_zastava",
      "kozhuhovskaya"
    ],
    "transferConnections": []
  },
  "kozhuhovskaya": {
    "id": "kozhuhovskaya",
    "name": "Кожуховская",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.706156,
    "lng": 37.68544,
    "connections": [
      "dubrovka_l10",
      "pechatniki_l10"
    ],
    "transferConnections": []
  },
  "pechatniki_l10": {
    "id": "pechatniki_l10",
    "name": "Печатники",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.692921,
    "lng": 37.728338,
    "connections": [
      "kozhuhovskaya",
      "volzhskaya",
      "pechatniki_l97"
    ],
    "transferConnections": [
      "pechatniki_l97"
    ]
  },
  "volzhskaya": {
    "id": "volzhskaya",
    "name": "Волжская",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.690446,
    "lng": 37.754314,
    "connections": [
      "pechatniki_l10",
      "lyublino_l10"
    ],
    "transferConnections": []
  },
  "lyublino_l10": {
    "id": "lyublino_l10",
    "name": "Люблино",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.676596,
    "lng": 37.761639,
    "connections": [
      "volzhskaya",
      "bratislavskaya",
      "lyublino_l132"
    ],
    "transferConnections": [
      "lyublino_l132"
    ]
  },
  "bratislavskaya": {
    "id": "bratislavskaya",
    "name": "Братиславская",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.658817,
    "lng": 37.748415,
    "connections": [
      "lyublino_l10",
      "marino"
    ],
    "transferConnections": []
  },
  "marino": {
    "id": "marino",
    "name": "Марьино",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.649158,
    "lng": 37.743844,
    "connections": [
      "bratislavskaya",
      "borisovo"
    ],
    "transferConnections": []
  },
  "borisovo": {
    "id": "borisovo",
    "name": "Борисово",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.6325,
    "lng": 37.743333,
    "connections": [
      "marino",
      "shipilovskaya"
    ],
    "transferConnections": []
  },
  "shipilovskaya": {
    "id": "shipilovskaya",
    "name": "Шипиловская",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.621667,
    "lng": 37.743611,
    "connections": [
      "borisovo",
      "zyablikovo"
    ],
    "transferConnections": []
  },
  "zyablikovo": {
    "id": "zyablikovo",
    "name": "Зябликово",
    "color": "#BED12C",
    "lineName": "Люблинско-Дмитровская",
    "line": "10",
    "lat": 55.611944,
    "lng": 37.745278,
    "connections": [
      "shipilovskaya"
    ],
    "transferConnections": []
  },
  "kashirskaya_l11": {
    "id": "kashirskaya_l11",
    "name": "Каширская",
    "color": "#88CDCF",
    "lineName": "Каховская",
    "line": "11",
    "lat": 55.654327,
    "lng": 37.647705,
    "connections": [
      "varshavskaya_l11",
      "kashirskaya_l2",
      "kashirskaya_l97"
    ],
    "transferConnections": [
      "kashirskaya_l2",
      "kashirskaya_l97"
    ]
  },
  "varshavskaya_l11": {
    "id": "varshavskaya_l11",
    "name": "Варшавская",
    "color": "#88CDCF",
    "lineName": "Каховская",
    "line": "11",
    "lat": 55.653294,
    "lng": 37.619522,
    "connections": [
      "kashirskaya_l11",
      "kahovskaya_l11",
      "varshavskaya_l97"
    ],
    "transferConnections": [
      "varshavskaya_l97"
    ]
  },
  "kahovskaya_l11": {
    "id": "kahovskaya_l11",
    "name": "Каховская",
    "color": "#88CDCF",
    "lineName": "Каховская",
    "line": "11",
    "lat": 55.652923,
    "lng": 37.596573,
    "connections": [
      "varshavskaya_l11",
      "kahovskaya_l97"
    ],
    "transferConnections": [
      "kahovskaya_l97"
    ]
  },
  "buninskaya_alleya": {
    "id": "buninskaya_alleya",
    "name": "Бунинская аллея",
    "color": "#BAC8E8",
    "lineName": "Бутовская",
    "line": "12",
    "lat": 55.537977,
    "lng": 37.515899,
    "connections": [
      "ulitsa_gorchakova"
    ],
    "transferConnections": []
  },
  "ulitsa_gorchakova": {
    "id": "ulitsa_gorchakova",
    "name": "Улица Горчакова",
    "color": "#BAC8E8",
    "lineName": "Бутовская",
    "line": "12",
    "lat": 55.542281,
    "lng": 37.532063,
    "connections": [
      "buninskaya_alleya",
      "bulvar_admirala_ushakova"
    ],
    "transferConnections": []
  },
  "bulvar_admirala_ushakova": {
    "id": "bulvar_admirala_ushakova",
    "name": "Бульвар Адмирала Ушакова",
    "color": "#BAC8E8",
    "lineName": "Бутовская",
    "line": "12",
    "lat": 55.545207,
    "lng": 37.542329,
    "connections": [
      "ulitsa_gorchakova",
      "ulitsa_skobelevskaya"
    ],
    "transferConnections": []
  },
  "ulitsa_skobelevskaya": {
    "id": "ulitsa_skobelevskaya",
    "name": "Улица Скобелевская",
    "color": "#BAC8E8",
    "lineName": "Бутовская",
    "line": "12",
    "lat": 55.548103,
    "lng": 37.552721,
    "connections": [
      "bulvar_admirala_ushakova",
      "ulitsa_starokachalovskaya"
    ],
    "transferConnections": []
  },
  "ulitsa_starokachalovskaya": {
    "id": "ulitsa_starokachalovskaya",
    "name": "Улица Старокачаловская",
    "color": "#BAC8E8",
    "lineName": "Бутовская",
    "line": "12",
    "lat": 55.569194,
    "lng": 37.576074,
    "connections": [
      "ulitsa_skobelevskaya",
      "lesoparkovaya"
    ],
    "transferConnections": []
  },
  "lesoparkovaya": {
    "id": "lesoparkovaya",
    "name": "Лесопарковая",
    "color": "#BAC8E8",
    "lineName": "Бутовская",
    "line": "12",
    "lat": 55.581656,
    "lng": 37.577816,
    "connections": [
      "ulitsa_starokachalovskaya",
      "bittsevskiy_park"
    ],
    "transferConnections": []
  },
  "bittsevskiy_park": {
    "id": "bittsevskiy_park",
    "name": "Битцевский Парк",
    "color": "#BAC8E8",
    "lineName": "Бутовская",
    "line": "12",
    "lat": 55.600066,
    "lng": 37.556058,
    "connections": [
      "lesoparkovaya"
    ],
    "transferConnections": []
  },
  "okruzhnaya_l95": {
    "id": "okruzhnaya_l95",
    "name": "Окружная",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.848889,
    "lng": 37.571111,
    "connections": [
      "vladykino_l95",
      "okruzhnaya_l10",
      "okruzhnaya_l131"
    ],
    "transferConnections": [
      "okruzhnaya_l10",
      "okruzhnaya_l131"
    ]
  },
  "vladykino_l95": {
    "id": "vladykino_l95",
    "name": "Владыкино",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.847222,
    "lng": 37.591944,
    "connections": [
      "okruzhnaya_l95",
      "botanicheskiy_sad_l95",
      "vladykino_l9"
    ],
    "transferConnections": [
      "vladykino_l9"
    ]
  },
  "botanicheskiy_sad_l95": {
    "id": "botanicheskiy_sad_l95",
    "name": "Ботанический сад",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.845556,
    "lng": 37.640278,
    "connections": [
      "vladykino_l95",
      "rostokino",
      "botanicheskiy_sad_l6"
    ],
    "transferConnections": [
      "botanicheskiy_sad_l6"
    ]
  },
  "rostokino": {
    "id": "rostokino",
    "name": "Ростокино",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.839444,
    "lng": 37.667778,
    "connections": [
      "botanicheskiy_sad_l95",
      "belokamennaya"
    ],
    "transferConnections": []
  },
  "belokamennaya": {
    "id": "belokamennaya",
    "name": "Белокаменная",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.83,
    "lng": 37.700556,
    "connections": [
      "rostokino",
      "bulvar_rokossovskogo_l95"
    ],
    "transferConnections": []
  },
  "bulvar_rokossovskogo_l95": {
    "id": "bulvar_rokossovskogo_l95",
    "name": "Бульвар Рокоссовского",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.817222,
    "lng": 37.736944,
    "connections": [
      "belokamennaya",
      "lokomotiv",
      "bulvar_rokossovskogo_l1"
    ],
    "transferConnections": [
      "bulvar_rokossovskogo_l1"
    ]
  },
  "lokomotiv": {
    "id": "lokomotiv",
    "name": "Локомотив",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.803219,
    "lng": 37.745742,
    "connections": [
      "bulvar_rokossovskogo_l95",
      "izmaylovo"
    ],
    "transferConnections": []
  },
  "izmaylovo": {
    "id": "izmaylovo",
    "name": "Измайлово",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.788611,
    "lng": 37.742778,
    "connections": [
      "lokomotiv",
      "sokolinaya_gora"
    ],
    "transferConnections": []
  },
  "sokolinaya_gora": {
    "id": "sokolinaya_gora",
    "name": "Соколиная Гора",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.77,
    "lng": 37.745278,
    "connections": [
      "izmaylovo",
      "shosse_entuziastov_l95"
    ],
    "transferConnections": []
  },
  "shosse_entuziastov_l95": {
    "id": "shosse_entuziastov_l95",
    "name": "Шоссе Энтузиастов",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.758633,
    "lng": 37.748477,
    "connections": [
      "sokolinaya_gora",
      "andronovka_l95",
      "shosse_entuziastov_l8"
    ],
    "transferConnections": [
      "shosse_entuziastov_l8"
    ]
  },
  "andronovka_l95": {
    "id": "andronovka_l95",
    "name": "Андроновка",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.741111,
    "lng": 37.734444,
    "connections": [
      "shosse_entuziastov_l95",
      "nizhegorodskaya_l95"
    ],
    "transferConnections": []
  },
  "nizhegorodskaya_l95": {
    "id": "nizhegorodskaya_l95",
    "name": "Нижегородская",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.732222,
    "lng": 37.72825,
    "connections": [
      "andronovka_l95",
      "novohohlovskaya_l95",
      "nizhegorodskaya_l97",
      "nizhegorodskaya_l98",
      "nizhegorodskaya_l136"
    ],
    "transferConnections": [
      "nizhegorodskaya_l97",
      "nizhegorodskaya_l98",
      "nizhegorodskaya_l136"
    ]
  },
  "novohohlovskaya_l95": {
    "id": "novohohlovskaya_l95",
    "name": "Новохохловская",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.723889,
    "lng": 37.716111,
    "connections": [
      "nizhegorodskaya_l95",
      "ugreshskaya"
    ],
    "transferConnections": []
  },
  "ugreshskaya": {
    "id": "ugreshskaya",
    "name": "Угрешская",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.718333,
    "lng": 37.697778,
    "connections": [
      "novohohlovskaya_l95",
      "dubrovka_l95"
    ],
    "transferConnections": []
  },
  "dubrovka_l95": {
    "id": "dubrovka_l95",
    "name": "Дубровка",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.71268,
    "lng": 37.677775,
    "connections": [
      "ugreshskaya",
      "avtozavodskaya_l95"
    ],
    "transferConnections": []
  },
  "avtozavodskaya_l95": {
    "id": "avtozavodskaya_l95",
    "name": "Автозаводская",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.70631,
    "lng": 37.66314,
    "connections": [
      "dubrovka_l95",
      "zil_l95",
      "avtozavodskaya_l2"
    ],
    "transferConnections": [
      "avtozavodskaya_l2"
    ]
  },
  "zil_l95": {
    "id": "zil_l95",
    "name": "ЗИЛ",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.698333,
    "lng": 37.648333,
    "connections": [
      "avtozavodskaya_l95",
      "verhnie_kotly",
      "zil_l137"
    ],
    "transferConnections": [
      "zil_l137"
    ]
  },
  "verhnie_kotly": {
    "id": "verhnie_kotly",
    "name": "Верхние Котлы",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.69,
    "lng": 37.618889,
    "connections": [
      "zil_l95",
      "krymskaya_l95"
    ],
    "transferConnections": []
  },
  "krymskaya_l95": {
    "id": "krymskaya_l95",
    "name": "Крымская",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.690038,
    "lng": 37.605,
    "connections": [
      "verhnie_kotly",
      "ploschad_gagarina",
      "krymskaya_l137"
    ],
    "transferConnections": [
      "krymskaya_l137"
    ]
  },
  "ploschad_gagarina": {
    "id": "ploschad_gagarina",
    "name": "Площадь Гагарина",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.706944,
    "lng": 37.585833,
    "connections": [
      "krymskaya_l95",
      "luzhniki"
    ],
    "transferConnections": []
  },
  "luzhniki": {
    "id": "luzhniki",
    "name": "Лужники",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.720278,
    "lng": 37.563056,
    "connections": [
      "ploschad_gagarina",
      "kutuzovskaya_l95"
    ],
    "transferConnections": []
  },
  "kutuzovskaya_l95": {
    "id": "kutuzovskaya_l95",
    "name": "Кутузовская",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.740833,
    "lng": 37.533333,
    "connections": [
      "luzhniki",
      "delovoy_tsentr_l95",
      "kutuzovskaya_l4",
      "kutuzovskaya_l136"
    ],
    "transferConnections": [
      "kutuzovskaya_l4",
      "kutuzovskaya_l136"
    ]
  },
  "delovoy_tsentr_l95": {
    "id": "delovoy_tsentr_l95",
    "name": "Деловой центр",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.747222,
    "lng": 37.532222,
    "connections": [
      "kutuzovskaya_l95",
      "shelepiha_l95"
    ],
    "transferConnections": []
  },
  "shelepiha_l95": {
    "id": "shelepiha_l95",
    "name": "Шелепиха",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.7575,
    "lng": 37.525556,
    "connections": [
      "delovoy_tsentr_l95",
      "horoshevo",
      "shelepiha_l97"
    ],
    "transferConnections": [
      "shelepiha_l97"
    ]
  },
  "horoshevo": {
    "id": "horoshevo",
    "name": "Хорошево",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.777222,
    "lng": 37.507222,
    "connections": [
      "shelepiha_l95",
      "zorge"
    ],
    "transferConnections": []
  },
  "zorge": {
    "id": "zorge",
    "name": "Зорге",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.787778,
    "lng": 37.504444,
    "connections": [
      "horoshevo",
      "panfilovskaya"
    ],
    "transferConnections": []
  },
  "panfilovskaya": {
    "id": "panfilovskaya",
    "name": "Панфиловская",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.799167,
    "lng": 37.498889,
    "connections": [
      "zorge",
      "streshnevo_l95"
    ],
    "transferConnections": []
  },
  "streshnevo_l95": {
    "id": "streshnevo_l95",
    "name": "Стрешнево",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.813611,
    "lng": 37.486944,
    "connections": [
      "panfilovskaya",
      "baltiyskaya",
      "streshnevo_l132"
    ],
    "transferConnections": [
      "streshnevo_l132"
    ]
  },
  "baltiyskaya": {
    "id": "baltiyskaya",
    "name": "Балтийская",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.825833,
    "lng": 37.496111,
    "connections": [
      "streshnevo_l95",
      "koptevo"
    ],
    "transferConnections": []
  },
  "koptevo": {
    "id": "koptevo",
    "name": "Коптево",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.839637,
    "lng": 37.520037,
    "connections": [
      "baltiyskaya",
      "lihobory_l95"
    ],
    "transferConnections": []
  },
  "lihobory_l95": {
    "id": "lihobory_l95",
    "name": "Лихоборы",
    "color": "#CC4C6E",
    "lineName": "МЦК",
    "line": "95",
    "lat": 55.847222,
    "lng": 37.551389,
    "connections": [
      "koptevo",
      "lihobory_l135"
    ],
    "transferConnections": [
      "lihobory_l135"
    ]
  },
  "michurinskiy_prospekt_l97": {
    "id": "michurinskiy_prospekt_l97",
    "name": "Мичуринский проспект",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.688333,
    "lng": 37.485,
    "connections": [
      "prospekt_vernadskogo_l97",
      "michurinskiy_prospekt_l133"
    ],
    "transferConnections": [
      "michurinskiy_prospekt_l133"
    ]
  },
  "prospekt_vernadskogo_l97": {
    "id": "prospekt_vernadskogo_l97",
    "name": "Проспект Вернадского",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.677778,
    "lng": 37.505,
    "connections": [
      "michurinskiy_prospekt_l97",
      "novatorskaya_l97",
      "prospekt_vernadskogo_l1"
    ],
    "transferConnections": [
      "prospekt_vernadskogo_l1"
    ]
  },
  "novatorskaya_l97": {
    "id": "novatorskaya_l97",
    "name": "Новаторская",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.670833,
    "lng": 37.52,
    "connections": [
      "prospekt_vernadskogo_l97",
      "vorontsovskaya",
      "novatorskaya_l137"
    ],
    "transferConnections": [
      "novatorskaya_l137"
    ]
  },
  "vorontsovskaya": {
    "id": "vorontsovskaya",
    "name": "Воронцовская",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.658333,
    "lng": 37.540833,
    "connections": [
      "novatorskaya_l97",
      "zyuzino"
    ],
    "transferConnections": []
  },
  "zyuzino": {
    "id": "zyuzino",
    "name": "Зюзино",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.655158,
    "lng": 37.575786,
    "connections": [
      "vorontsovskaya",
      "kahovskaya_l97"
    ],
    "transferConnections": []
  },
  "kahovskaya_l97": {
    "id": "kahovskaya_l97",
    "name": "Каховская",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.653056,
    "lng": 37.598333,
    "connections": [
      "zyuzino",
      "varshavskaya_l97",
      "kahovskaya_l11"
    ],
    "transferConnections": [
      "kahovskaya_l11"
    ]
  },
  "varshavskaya_l97": {
    "id": "varshavskaya_l97",
    "name": "Варшавская",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.653333,
    "lng": 37.619444,
    "connections": [
      "kahovskaya_l97",
      "kashirskaya_l97",
      "varshavskaya_l11"
    ],
    "transferConnections": [
      "varshavskaya_l11"
    ]
  },
  "kashirskaya_l97": {
    "id": "kashirskaya_l97",
    "name": "Каширская",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.655,
    "lng": 37.648611,
    "connections": [
      "varshavskaya_l97",
      "klenovyy_bulvar",
      "kashirskaya_l2",
      "kashirskaya_l11"
    ],
    "transferConnections": [
      "kashirskaya_l2",
      "kashirskaya_l11"
    ]
  },
  "klenovyy_bulvar": {
    "id": "klenovyy_bulvar",
    "name": "Кленовый бульвар",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.674444,
    "lng": 37.680833,
    "connections": [
      "kashirskaya_l97",
      "nagatinskiy_zaton"
    ],
    "transferConnections": []
  },
  "nagatinskiy_zaton": {
    "id": "nagatinskiy_zaton",
    "name": "Нагатинский Затон",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.684444,
    "lng": 37.703611,
    "connections": [
      "klenovyy_bulvar",
      "pechatniki_l97"
    ],
    "transferConnections": []
  },
  "pechatniki_l97": {
    "id": "pechatniki_l97",
    "name": "Печатники",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.694722,
    "lng": 37.7275,
    "connections": [
      "nagatinskiy_zaton",
      "tekstilschiki_l97",
      "pechatniki_l10"
    ],
    "transferConnections": [
      "pechatniki_l10"
    ]
  },
  "tekstilschiki_l97": {
    "id": "tekstilschiki_l97",
    "name": "Текстильщики",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.708333,
    "lng": 37.728333,
    "connections": [
      "pechatniki_l97",
      "nizhegorodskaya_l97",
      "tekstilschiki_l7",
      "tekstilschiki_l132"
    ],
    "transferConnections": [
      "tekstilschiki_l7",
      "tekstilschiki_l132"
    ]
  },
  "nizhegorodskaya_l97": {
    "id": "nizhegorodskaya_l97",
    "name": "Нижегородская",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.7325,
    "lng": 37.728611,
    "connections": [
      "tekstilschiki_l97",
      "aviamotornaya_l97",
      "nizhegorodskaya_l95",
      "nizhegorodskaya_l98",
      "nizhegorodskaya_l136"
    ],
    "transferConnections": [
      "nizhegorodskaya_l95",
      "nizhegorodskaya_l98",
      "nizhegorodskaya_l136"
    ]
  },
  "aviamotornaya_l97": {
    "id": "aviamotornaya_l97",
    "name": "Авиамоторная",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.753056,
    "lng": 37.718611,
    "connections": [
      "nizhegorodskaya_l97",
      "lefortovo_l97",
      "aviamotornaya_l8",
      "aviamotornaya_l98",
      "aviamotornaya_l135"
    ],
    "transferConnections": [
      "aviamotornaya_l8",
      "aviamotornaya_l98",
      "aviamotornaya_l135"
    ]
  },
  "lefortovo_l97": {
    "id": "lefortovo_l97",
    "name": "Лефортово",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.764444,
    "lng": 37.702778,
    "connections": [
      "aviamotornaya_l97",
      "elektrozavodskaya_l97",
      "lefortovo_l98"
    ],
    "transferConnections": [
      "lefortovo_l98"
    ]
  },
  "elektrozavodskaya_l97": {
    "id": "elektrozavodskaya_l97",
    "name": "Электрозаводская",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.782057,
    "lng": 37.7053,
    "connections": [
      "lefortovo_l97",
      "sokolniki_l97",
      "elektrozavodskaya_l3",
      "elektrozavodskaya_l98",
      "elektrozavodskaya_l135"
    ],
    "transferConnections": [
      "elektrozavodskaya_l3",
      "elektrozavodskaya_l98",
      "elektrozavodskaya_l135"
    ]
  },
  "sokolniki_l97": {
    "id": "sokolniki_l97",
    "name": "Сокольники",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.791111,
    "lng": 37.678889,
    "connections": [
      "elektrozavodskaya_l97",
      "rizhskaya_l97",
      "sokolniki_l1"
    ],
    "transferConnections": [
      "sokolniki_l1"
    ]
  },
  "rizhskaya_l97": {
    "id": "rizhskaya_l97",
    "name": "Рижская",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.792222,
    "lng": 37.633889,
    "connections": [
      "sokolniki_l97",
      "marina_roscha_l97",
      "rizhskaya_l6",
      "rizhskaya_l132",
      "rizhskaya_l136"
    ],
    "transferConnections": [
      "rizhskaya_l6",
      "rizhskaya_l132",
      "rizhskaya_l136"
    ]
  },
  "marina_roscha_l97": {
    "id": "marina_roscha_l97",
    "name": "Марьина Роща",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.798333,
    "lng": 37.617222,
    "connections": [
      "rizhskaya_l97",
      "savelovskaya_l97",
      "marina_roscha_l132",
      "marina_roscha_l136"
    ],
    "transferConnections": [
      "marina_roscha_l132",
      "marina_roscha_l136"
    ]
  },
  "savelovskaya_l97": {
    "id": "savelovskaya_l97",
    "name": "Савёловская",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.794054,
    "lng": 37.587163,
    "connections": [
      "marina_roscha_l97",
      "petrovskiy_park",
      "savelovskaya_l9",
      "savelovskaya_l131",
      "savelovskaya_l136"
    ],
    "transferConnections": [
      "savelovskaya_l9",
      "savelovskaya_l131",
      "savelovskaya_l136"
    ]
  },
  "petrovskiy_park": {
    "id": "petrovskiy_park",
    "name": "Петровский парк",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.79233,
    "lng": 37.55952,
    "connections": [
      "savelovskaya_l97",
      "tsska"
    ],
    "transferConnections": []
  },
  "tsska": {
    "id": "tsska",
    "name": "ЦСКА",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.78643,
    "lng": 37.53502,
    "connections": [
      "petrovskiy_park",
      "horoshevskaya"
    ],
    "transferConnections": []
  },
  "horoshevskaya": {
    "id": "horoshevskaya",
    "name": "Хорошевская",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.77643,
    "lng": 37.51981,
    "connections": [
      "tsska",
      "shelepiha_l97"
    ],
    "transferConnections": []
  },
  "shelepiha_l97": {
    "id": "shelepiha_l97",
    "name": "Шелепиха",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.75723,
    "lng": 37.52571,
    "connections": [
      "horoshevskaya",
      "delovoy_tsentr_l97",
      "shelepiha_l95"
    ],
    "transferConnections": [
      "shelepiha_l95"
    ]
  },
  "delovoy_tsentr_l97": {
    "id": "delovoy_tsentr_l97",
    "name": "Деловой центр",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.7491,
    "lng": 37.5395,
    "connections": [
      "shelepiha_l97",
      "narodnoe_opolchenie",
      "delovoy_tsentr_vystavochnaya",
      "delovoy_tsentr_l133"
    ],
    "transferConnections": [
      "delovoy_tsentr_vystavochnaya",
      "delovoy_tsentr_l133"
    ]
  },
  "narodnoe_opolchenie": {
    "id": "narodnoe_opolchenie",
    "name": "Народное Ополчение",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.77592,
    "lng": 37.485073,
    "connections": [
      "delovoy_tsentr_l97",
      "mnevniki"
    ],
    "transferConnections": []
  },
  "mnevniki": {
    "id": "mnevniki",
    "name": "Мнёвники",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.761153,
    "lng": 37.47139,
    "connections": [
      "narodnoe_opolchenie",
      "terehovo"
    ],
    "transferConnections": []
  },
  "terehovo": {
    "id": "terehovo",
    "name": "Терехово",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.748108,
    "lng": 37.459738,
    "connections": [
      "mnevniki",
      "kuntsevskaya_l97"
    ],
    "transferConnections": []
  },
  "kuntsevskaya_l97": {
    "id": "kuntsevskaya_l97",
    "name": "Кунцевская",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.730278,
    "lng": 37.445833,
    "connections": [
      "terehovo",
      "davydkovo",
      "kuntsevskaya_l3",
      "kuntsevskaya_l4",
      "kuntsevskaya_l131"
    ],
    "transferConnections": [
      "kuntsevskaya_l3",
      "kuntsevskaya_l4",
      "kuntsevskaya_l131"
    ]
  },
  "davydkovo": {
    "id": "davydkovo",
    "name": "Давыдково",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.715278,
    "lng": 37.451667,
    "connections": [
      "kuntsevskaya_l97",
      "aminevskaya_l97"
    ],
    "transferConnections": []
  },
  "aminevskaya_l97": {
    "id": "aminevskaya_l97",
    "name": "Аминьевская",
    "color": "#88CDCF",
    "lineName": "Большая кольцевая линия",
    "line": "97",
    "lat": 55.697222,
    "lng": 37.464167,
    "connections": [
      "davydkovo",
      "aminevskaya_l136"
    ],
    "transferConnections": [
      "aminevskaya_l136"
    ]
  },
  "kosino_l98": {
    "id": "kosino_l98",
    "name": "Косино",
    "color": "#CC0066",
    "lineName": "Некрасовская",
    "line": "98",
    "lat": 55.7026,
    "lng": 37.8511,
    "connections": [
      "ulitsa_dmitrievskogo"
    ],
    "transferConnections": []
  },
  "ulitsa_dmitrievskogo": {
    "id": "ulitsa_dmitrievskogo",
    "name": "Улица Дмитриевского",
    "color": "#CC0066",
    "lineName": "Некрасовская",
    "line": "98",
    "lat": 55.7093,
    "lng": 37.8792,
    "connections": [
      "kosino_l98",
      "luhmanovskaya"
    ],
    "transferConnections": []
  },
  "luhmanovskaya": {
    "id": "luhmanovskaya",
    "name": "Лухмановская",
    "color": "#CC0066",
    "lineName": "Некрасовская",
    "line": "98",
    "lat": 55.7078,
    "lng": 37.9004,
    "connections": [
      "ulitsa_dmitrievskogo",
      "nekrasovka"
    ],
    "transferConnections": []
  },
  "nekrasovka": {
    "id": "nekrasovka",
    "name": "Некрасовка",
    "color": "#CC0066",
    "lineName": "Некрасовская",
    "line": "98",
    "lat": 55.7029,
    "lng": 37.9264,
    "connections": [
      "luhmanovskaya",
      "yugo_vostochnaya"
    ],
    "transferConnections": []
  },
  "yugo_vostochnaya": {
    "id": "yugo_vostochnaya",
    "name": "Юго-Восточная",
    "color": "#CC0066",
    "lineName": "Некрасовская",
    "line": "98",
    "lat": 55.71,
    "lng": 37.82,
    "connections": [
      "nekrasovka",
      "okskaya"
    ],
    "transferConnections": []
  },
  "okskaya": {
    "id": "okskaya",
    "name": "Окская",
    "color": "#CC0066",
    "lineName": "Некрасовская",
    "line": "98",
    "lat": 55.72,
    "lng": 37.77,
    "connections": [
      "yugo_vostochnaya",
      "stahanovskaya"
    ],
    "transferConnections": []
  },
  "stahanovskaya": {
    "id": "stahanovskaya",
    "name": "Стахановская",
    "color": "#CC0066",
    "lineName": "Некрасовская",
    "line": "98",
    "lat": 55.73,
    "lng": 37.76,
    "connections": [
      "okskaya",
      "nizhegorodskaya_l98"
    ],
    "transferConnections": []
  },
  "nizhegorodskaya_l98": {
    "id": "nizhegorodskaya_l98",
    "name": "Нижегородская",
    "color": "#CC0066",
    "lineName": "Некрасовская",
    "line": "98",
    "lat": 55.73,
    "lng": 37.73,
    "connections": [
      "stahanovskaya",
      "lefortovo_l98",
      "nizhegorodskaya_l95",
      "nizhegorodskaya_l97",
      "nizhegorodskaya_l136"
    ],
    "transferConnections": [
      "nizhegorodskaya_l95",
      "nizhegorodskaya_l97",
      "nizhegorodskaya_l136"
    ]
  },
  "lefortovo_l98": {
    "id": "lefortovo_l98",
    "name": "Лефортово",
    "color": "#CC0066",
    "lineName": "Некрасовская",
    "line": "98",
    "lat": 55.764444,
    "lng": 37.702778,
    "connections": [
      "nizhegorodskaya_l98",
      "elektrozavodskaya_l98",
      "lefortovo_l97"
    ],
    "transferConnections": [
      "lefortovo_l97"
    ]
  },
  "elektrozavodskaya_l98": {
    "id": "elektrozavodskaya_l98",
    "name": "Электрозаводская",
    "color": "#CC0066",
    "lineName": "Некрасовская",
    "line": "98",
    "lat": 55.782057,
    "lng": 37.7053,
    "connections": [
      "lefortovo_l98",
      "aviamotornaya_l98",
      "elektrozavodskaya_l3",
      "elektrozavodskaya_l97",
      "elektrozavodskaya_l135"
    ],
    "transferConnections": [
      "elektrozavodskaya_l3",
      "elektrozavodskaya_l97",
      "elektrozavodskaya_l135"
    ]
  },
  "aviamotornaya_l98": {
    "id": "aviamotornaya_l98",
    "name": "Авиамоторная",
    "color": "#CC0066",
    "lineName": "Некрасовская",
    "line": "98",
    "lat": 55.751933,
    "lng": 37.717444,
    "connections": [
      "elektrozavodskaya_l98",
      "aviamotornaya_l8",
      "aviamotornaya_l97",
      "aviamotornaya_l135"
    ],
    "transferConnections": [
      "aviamotornaya_l8",
      "aviamotornaya_l97",
      "aviamotornaya_l135"
    ]
  },
  "lobnya": {
    "id": "lobnya",
    "name": "Лобня",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 56.0048,
    "lng": 37.29057,
    "connections": [
      "sheremetevskaya"
    ],
    "transferConnections": []
  },
  "sheremetevskaya": {
    "id": "sheremetevskaya",
    "name": "Шереметьевская",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.983882,
    "lng": 37.498752,
    "connections": [
      "lobnya",
      "hlebnikovo"
    ],
    "transferConnections": []
  },
  "hlebnikovo": {
    "id": "hlebnikovo",
    "name": "Хлебниково",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.970682,
    "lng": 37.504638,
    "connections": [
      "sheremetevskaya",
      "vodniki"
    ],
    "transferConnections": []
  },
  "vodniki": {
    "id": "vodniki",
    "name": "Водники",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.953419,
    "lng": 37.511143,
    "connections": [
      "hlebnikovo",
      "dolgoprudnaya"
    ],
    "transferConnections": []
  },
  "dolgoprudnaya": {
    "id": "dolgoprudnaya",
    "name": "Долгопрудная",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.938656,
    "lng": 37.520542,
    "connections": [
      "vodniki",
      "novodachnaya"
    ],
    "transferConnections": []
  },
  "novodachnaya": {
    "id": "novodachnaya",
    "name": "Новодачная",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.924459,
    "lng": 37.527877,
    "connections": [
      "dolgoprudnaya",
      "mark"
    ],
    "transferConnections": []
  },
  "mark": {
    "id": "mark",
    "name": "Марк",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.904458,
    "lng": 37.538242,
    "connections": [
      "novodachnaya",
      "lianozovo_l131"
    ],
    "transferConnections": []
  },
  "lianozovo_l131": {
    "id": "lianozovo_l131",
    "name": "Лианозово",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.897316,
    "lng": 37.553261,
    "connections": [
      "mark",
      "beskudnikovo"
    ],
    "transferConnections": []
  },
  "beskudnikovo": {
    "id": "beskudnikovo",
    "name": "Бескудниково",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.882713,
    "lng": 37.567768,
    "connections": [
      "lianozovo_l131",
      "degunino"
    ],
    "transferConnections": []
  },
  "degunino": {
    "id": "degunino",
    "name": "Дегунино",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.86586,
    "lng": 37.573235,
    "connections": [
      "beskudnikovo",
      "okruzhnaya_l131"
    ],
    "transferConnections": []
  },
  "okruzhnaya_l131": {
    "id": "okruzhnaya_l131",
    "name": "Окружная",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.848889,
    "lng": 37.571111,
    "connections": [
      "degunino",
      "timiryazevskaya_l131",
      "okruzhnaya_l10",
      "okruzhnaya_l95"
    ],
    "transferConnections": [
      "okruzhnaya_l10",
      "okruzhnaya_l95"
    ]
  },
  "timiryazevskaya_l131": {
    "id": "timiryazevskaya_l131",
    "name": "Тимирязевская",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.81866,
    "lng": 37.574498,
    "connections": [
      "okruzhnaya_l131",
      "savelovskaya_l131",
      "timiryazevskaya_l9"
    ],
    "transferConnections": [
      "timiryazevskaya_l9"
    ]
  },
  "savelovskaya_l131": {
    "id": "savelovskaya_l131",
    "name": "Савёловская",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.793936,
    "lng": 37.587038,
    "connections": [
      "timiryazevskaya_l131",
      "belorusskaya_l131",
      "savelovskaya_l9",
      "savelovskaya_l97",
      "savelovskaya_l136"
    ],
    "transferConnections": [
      "savelovskaya_l9",
      "savelovskaya_l97",
      "savelovskaya_l136"
    ]
  },
  "belorusskaya_l131": {
    "id": "belorusskaya_l131",
    "name": "Белорусская",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.775179,
    "lng": 37.582303,
    "connections": [
      "savelovskaya_l131",
      "begovaya_l131",
      "belorusskaya_l2",
      "belorusskaya_l5",
      "belorusskaya_l136"
    ],
    "transferConnections": [
      "belorusskaya_l2",
      "belorusskaya_l5",
      "belorusskaya_l136"
    ]
  },
  "begovaya_l131": {
    "id": "begovaya_l131",
    "name": "Беговая",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.773505,
    "lng": 37.545518,
    "connections": [
      "belorusskaya_l131",
      "testovskaya_l131",
      "begovaya_l7"
    ],
    "transferConnections": [
      "begovaya_l7"
    ]
  },
  "testovskaya_l131": {
    "id": "testovskaya_l131",
    "name": "Тестовская",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.754292,
    "lng": 37.531551,
    "connections": [
      "begovaya_l131",
      "fili_l131",
      "testovskaya_l136"
    ],
    "transferConnections": [
      "testovskaya_l136"
    ]
  },
  "fili_l131": {
    "id": "fili_l131",
    "name": "Фили",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.744263,
    "lng": 37.514526,
    "connections": [
      "testovskaya_l131",
      "slavyanskiy_bulvar_l131",
      "fili_l4"
    ],
    "transferConnections": [
      "fili_l4"
    ]
  },
  "slavyanskiy_bulvar_l131": {
    "id": "slavyanskiy_bulvar_l131",
    "name": "Славянский бульвар",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.729722,
    "lng": 37.470556,
    "connections": [
      "fili_l131",
      "kuntsevskaya_l131",
      "slavyanskiy_bulvar_l3"
    ],
    "transferConnections": [
      "slavyanskiy_bulvar_l3"
    ]
  },
  "kuntsevskaya_l131": {
    "id": "kuntsevskaya_l131",
    "name": "Кунцевская",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.730554,
    "lng": 37.445591,
    "connections": [
      "slavyanskiy_bulvar_l131",
      "rabochiy_poselok",
      "kuntsevskaya_l3",
      "kuntsevskaya_l4",
      "kuntsevskaya_l97"
    ],
    "transferConnections": [
      "kuntsevskaya_l3",
      "kuntsevskaya_l4",
      "kuntsevskaya_l97"
    ]
  },
  "rabochiy_poselok": {
    "id": "rabochiy_poselok",
    "name": "Рабочий Посёлок",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.726957,
    "lng": 37.415577,
    "connections": [
      "kuntsevskaya_l131",
      "setun"
    ],
    "transferConnections": []
  },
  "setun": {
    "id": "setun",
    "name": "Сетунь",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.723713,
    "lng": 37.397259,
    "connections": [
      "rabochiy_poselok",
      "nemchinovka"
    ],
    "transferConnections": []
  },
  "nemchinovka": {
    "id": "nemchinovka",
    "name": "Немчиновка",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.715668,
    "lng": 37.374611,
    "connections": [
      "setun",
      "skolkovo"
    ],
    "transferConnections": []
  },
  "skolkovo": {
    "id": "skolkovo",
    "name": "Сколково",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.666801,
    "lng": 37.424618,
    "connections": [
      "nemchinovka",
      "bakovka"
    ],
    "transferConnections": []
  },
  "bakovka": {
    "id": "bakovka",
    "name": "Баковка",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.682816,
    "lng": 37.315205,
    "connections": [
      "skolkovo",
      "odintsovo"
    ],
    "transferConnections": []
  },
  "odintsovo": {
    "id": "odintsovo",
    "name": "Одинцово",
    "color": "#F5A528",
    "lineName": "МЦД-1",
    "line": "131",
    "lat": 55.67798,
    "lng": 37.27773,
    "connections": [
      "bakovka"
    ],
    "transferConnections": []
  },
  "nahabino": {
    "id": "nahabino",
    "name": "Нахабино",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.841522,
    "lng": 37.185204,
    "connections": [
      "anikeevka"
    ],
    "transferConnections": []
  },
  "anikeevka": {
    "id": "anikeevka",
    "name": "Аникеевка",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.832099,
    "lng": 37.219829,
    "connections": [
      "nahabino",
      "opaliha"
    ],
    "transferConnections": []
  },
  "opaliha": {
    "id": "opaliha",
    "name": "Опалиха",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.82333,
    "lng": 37.246843,
    "connections": [
      "anikeevka",
      "krasnogorskaya"
    ],
    "transferConnections": []
  },
  "krasnogorskaya": {
    "id": "krasnogorskaya",
    "name": "Красногорская",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.814571,
    "lng": 37.303337,
    "connections": [
      "opaliha",
      "pavshino"
    ],
    "transferConnections": []
  },
  "pavshino": {
    "id": "pavshino",
    "name": "Павшино",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.815231,
    "lng": 37.341461,
    "connections": [
      "krasnogorskaya",
      "penyagino"
    ],
    "transferConnections": []
  },
  "penyagino": {
    "id": "penyagino",
    "name": "Пенягино",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.822539,
    "lng": 37.361049,
    "connections": [
      "pavshino",
      "volokolamskaya_l132"
    ],
    "transferConnections": []
  },
  "volokolamskaya_l132": {
    "id": "volokolamskaya_l132",
    "name": "Волоколамская",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.835154,
    "lng": 37.382453,
    "connections": [
      "penyagino",
      "trikotazhnaya",
      "volokolamskaya_l3"
    ],
    "transferConnections": [
      "volokolamskaya_l3"
    ]
  },
  "trikotazhnaya": {
    "id": "trikotazhnaya",
    "name": "Трикотажная",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.833137,
    "lng": 37.398967,
    "connections": [
      "volokolamskaya_l132",
      "tushinskaya_l132"
    ],
    "transferConnections": []
  },
  "tushinskaya_l132": {
    "id": "tushinskaya_l132",
    "name": "Тушинская",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.825479,
    "lng": 37.437024,
    "connections": [
      "trikotazhnaya",
      "pokrovskoe_streshnevo",
      "tushinskaya_l7"
    ],
    "transferConnections": [
      "tushinskaya_l7"
    ]
  },
  "pokrovskoe_streshnevo": {
    "id": "pokrovskoe_streshnevo",
    "name": "Покровское-Стрешнево",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.814247,
    "lng": 37.47678,
    "connections": [
      "tushinskaya_l132",
      "streshnevo_l132"
    ],
    "transferConnections": []
  },
  "streshnevo_l132": {
    "id": "streshnevo_l132",
    "name": "Стрешнево",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.813611,
    "lng": 37.486944,
    "connections": [
      "pokrovskoe_streshnevo",
      "krasnyy_baltiets",
      "streshnevo_l95"
    ],
    "transferConnections": [
      "streshnevo_l95"
    ]
  },
  "krasnyy_baltiets": {
    "id": "krasnyy_baltiets",
    "name": "Красный Балтиец",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.815514,
    "lng": 37.526367,
    "connections": [
      "streshnevo_l132",
      "grazhdanskaya"
    ],
    "transferConnections": []
  },
  "grazhdanskaya": {
    "id": "grazhdanskaya",
    "name": "Гражданская",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.805527,
    "lng": 37.55315,
    "connections": [
      "krasnyy_baltiets",
      "dmitrovskaya_l132"
    ],
    "transferConnections": []
  },
  "dmitrovskaya_l132": {
    "id": "dmitrovskaya_l132",
    "name": "Дмитровская",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.808056,
    "lng": 37.581734,
    "connections": [
      "grazhdanskaya",
      "rizhskaya_l132",
      "dmitrovskaya_l9"
    ],
    "transferConnections": [
      "dmitrovskaya_l9"
    ]
  },
  "rizhskaya_l132": {
    "id": "rizhskaya_l132",
    "name": "Рижская",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.792494,
    "lng": 37.636114,
    "connections": [
      "dmitrovskaya_l132",
      "ploschad_treh_vokzalov_l132",
      "rizhskaya_l6",
      "rizhskaya_l97",
      "rizhskaya_l136"
    ],
    "transferConnections": [
      "rizhskaya_l6",
      "rizhskaya_l97",
      "rizhskaya_l136"
    ]
  },
  "ploschad_treh_vokzalov_l132": {
    "id": "ploschad_treh_vokzalov_l132",
    "name": "Площадь трёх вокзалов",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.776087,
    "lng": 37.651861,
    "connections": [
      "rizhskaya_l132",
      "kurskaya_l132",
      "ploschad_treh_vokzalov_l136"
    ],
    "transferConnections": [
      "ploschad_treh_vokzalov_l136"
    ]
  },
  "kurskaya_l132": {
    "id": "kurskaya_l132",
    "name": "Курская",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.757622,
    "lng": 37.660767,
    "connections": [
      "ploschad_treh_vokzalov_l132",
      "moskva_tovarnaya",
      "kurskaya_l3",
      "kurskaya_l5"
    ],
    "transferConnections": [
      "kurskaya_l3",
      "kurskaya_l5"
    ]
  },
  "moskva_tovarnaya": {
    "id": "moskva_tovarnaya",
    "name": "Москва Товарная",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.745358,
    "lng": 37.688839,
    "connections": [
      "kurskaya_l132",
      "kalitniki"
    ],
    "transferConnections": []
  },
  "kalitniki": {
    "id": "kalitniki",
    "name": "Калитники",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.733981,
    "lng": 37.702203,
    "connections": [
      "moskva_tovarnaya",
      "novohohlovskaya_l132"
    ],
    "transferConnections": []
  },
  "novohohlovskaya_l132": {
    "id": "novohohlovskaya_l132",
    "name": "Новохохловская",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.718523,
    "lng": 37.719236,
    "connections": [
      "kalitniki",
      "tekstilschiki_l132"
    ],
    "transferConnections": []
  },
  "tekstilschiki_l132": {
    "id": "tekstilschiki_l132",
    "name": "Текстильщики",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.708934,
    "lng": 37.731283,
    "connections": [
      "novohohlovskaya_l132",
      "lyublino_l132",
      "tekstilschiki_l7",
      "tekstilschiki_l97"
    ],
    "transferConnections": [
      "tekstilschiki_l7",
      "tekstilschiki_l97"
    ]
  },
  "lyublino_l132": {
    "id": "lyublino_l132",
    "name": "Люблино",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.676596,
    "lng": 37.761639,
    "connections": [
      "tekstilschiki_l132",
      "depo",
      "lyublino_l10"
    ],
    "transferConnections": [
      "lyublino_l10"
    ]
  },
  "depo": {
    "id": "depo",
    "name": "Депо",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.674257,
    "lng": 37.728446,
    "connections": [
      "lyublino_l132",
      "pererva"
    ],
    "transferConnections": []
  },
  "pererva": {
    "id": "pererva",
    "name": "Перерва",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.660809,
    "lng": 37.716278,
    "connections": [
      "depo",
      "kuryanovo"
    ],
    "transferConnections": []
  },
  "kuryanovo": {
    "id": "kuryanovo",
    "name": "Курьяново",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.649722,
    "lng": 37.701667,
    "connections": [
      "pererva",
      "moskvoreche"
    ],
    "transferConnections": []
  },
  "moskvoreche": {
    "id": "moskvoreche",
    "name": "Москворечье",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.641239,
    "lng": 37.689789,
    "connections": [
      "kuryanovo",
      "tsaritsyno_l132"
    ],
    "transferConnections": []
  },
  "tsaritsyno_l132": {
    "id": "tsaritsyno_l132",
    "name": "Царицыно",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.618309,
    "lng": 37.668846,
    "connections": [
      "moskvoreche",
      "pokrovskoe",
      "tsaritsyno_l2"
    ],
    "transferConnections": [
      "tsaritsyno_l2"
    ]
  },
  "pokrovskoe": {
    "id": "pokrovskoe",
    "name": "Покровское",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.814247,
    "lng": 37.47678,
    "connections": [
      "tsaritsyno_l132",
      "krasnyy_stroitel"
    ],
    "transferConnections": []
  },
  "krasnyy_stroitel": {
    "id": "krasnyy_stroitel",
    "name": "Красный строитель",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.589455,
    "lng": 37.615093,
    "connections": [
      "pokrovskoe",
      "bittsa"
    ],
    "transferConnections": []
  },
  "bittsa": {
    "id": "bittsa",
    "name": "Битца",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.571186,
    "lng": 37.611443,
    "connections": [
      "krasnyy_stroitel",
      "butovo"
    ],
    "transferConnections": []
  },
  "butovo": {
    "id": "butovo",
    "name": "Бутово",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.548279,
    "lng": 37.555668,
    "connections": [
      "bittsa",
      "scherbinka"
    ],
    "transferConnections": []
  },
  "scherbinka": {
    "id": "scherbinka",
    "name": "Щербинка",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.509724,
    "lng": 37.562008,
    "connections": [
      "butovo",
      "ostafevo"
    ],
    "transferConnections": []
  },
  "ostafevo": {
    "id": "ostafevo",
    "name": "Остафьево",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.50337,
    "lng": 37.520055,
    "connections": [
      "scherbinka",
      "silikatnaya"
    ],
    "transferConnections": []
  },
  "silikatnaya": {
    "id": "silikatnaya",
    "name": "Силикатная",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.470278,
    "lng": 37.555278,
    "connections": [
      "ostafevo",
      "podolsk"
    ],
    "transferConnections": []
  },
  "podolsk": {
    "id": "podolsk",
    "name": "Подольск",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.431667,
    "lng": 37.565,
    "connections": [
      "silikatnaya",
      "marina_roscha_l132"
    ],
    "transferConnections": []
  },
  "marina_roscha_l132": {
    "id": "marina_roscha_l132",
    "name": "Марьина Роща",
    "color": "#E74683",
    "lineName": "МЦД-2",
    "line": "132",
    "lat": 55.800833,
    "lng": 37.618889,
    "connections": [
      "podolsk",
      "marina_roscha_l97",
      "marina_roscha_l136"
    ],
    "transferConnections": [
      "marina_roscha_l97",
      "marina_roscha_l136"
    ]
  },
  "delovoy_tsentr_l133": {
    "id": "delovoy_tsentr_l133",
    "name": "Деловой центр",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.7491,
    "lng": 37.5395,
    "connections": [
      "pyhtino",
      "delovoy_tsentr_vystavochnaya",
      "delovoy_tsentr_l97"
    ],
    "transferConnections": [
      "delovoy_tsentr_vystavochnaya",
      "delovoy_tsentr_l97"
    ]
  },
  "pyhtino": {
    "id": "pyhtino",
    "name": "Пыхтино",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.625,
    "lng": 37.298056,
    "connections": [
      "delovoy_tsentr_l133",
      "park_pobedy_l133"
    ],
    "transferConnections": []
  },
  "park_pobedy_l133": {
    "id": "park_pobedy_l133",
    "name": "Парк Победы",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.736478,
    "lng": 37.514401,
    "connections": [
      "pyhtino",
      "minskaya_l133",
      "park_pobedy_l3"
    ],
    "transferConnections": [
      "park_pobedy_l3"
    ]
  },
  "minskaya_l133": {
    "id": "minskaya_l133",
    "name": "Минская",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.7232,
    "lng": 37.5038,
    "connections": [
      "park_pobedy_l133",
      "lomonosovskiy_prospekt"
    ],
    "transferConnections": []
  },
  "lomonosovskiy_prospekt": {
    "id": "lomonosovskiy_prospekt",
    "name": "Ломоносовский проспект",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.7055,
    "lng": 37.5225,
    "connections": [
      "minskaya_l133",
      "ramenki"
    ],
    "transferConnections": []
  },
  "ramenki": {
    "id": "ramenki",
    "name": "Раменки",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.6961,
    "lng": 37.505,
    "connections": [
      "lomonosovskiy_prospekt",
      "michurinskiy_prospekt_l133"
    ],
    "transferConnections": []
  },
  "michurinskiy_prospekt_l133": {
    "id": "michurinskiy_prospekt_l133",
    "name": "Мичуринский проспект",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.6888,
    "lng": 37.485,
    "connections": [
      "ramenki",
      "ozernaya",
      "michurinskiy_prospekt_l97"
    ],
    "transferConnections": [
      "michurinskiy_prospekt_l97"
    ]
  },
  "ozernaya": {
    "id": "ozernaya",
    "name": "Озёрная",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.6698,
    "lng": 37.4495,
    "connections": [
      "michurinskiy_prospekt_l133",
      "govorovo"
    ],
    "transferConnections": []
  },
  "govorovo": {
    "id": "govorovo",
    "name": "Говорово",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.6588,
    "lng": 37.4174,
    "connections": [
      "ozernaya",
      "solntsevo"
    ],
    "transferConnections": []
  },
  "solntsevo": {
    "id": "solntsevo",
    "name": "Солнцево",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.649,
    "lng": 37.3911,
    "connections": [
      "govorovo",
      "borovskoe_shosse"
    ],
    "transferConnections": []
  },
  "borovskoe_shosse": {
    "id": "borovskoe_shosse",
    "name": "Боровское шоссе",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.647,
    "lng": 37.3701,
    "connections": [
      "solntsevo",
      "novoperedelkino_l133"
    ],
    "transferConnections": []
  },
  "novoperedelkino_l133": {
    "id": "novoperedelkino_l133",
    "name": "Новопеределкино",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.6385,
    "lng": 37.3544,
    "connections": [
      "borovskoe_shosse",
      "rasskazovka"
    ],
    "transferConnections": []
  },
  "rasskazovka": {
    "id": "rasskazovka",
    "name": "Рассказовка",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.6324,
    "lng": 37.3328,
    "connections": [
      "novoperedelkino_l133",
      "aeroport_vnukovo"
    ],
    "transferConnections": []
  },
  "aeroport_vnukovo": {
    "id": "aeroport_vnukovo",
    "name": "Аэропорт Внуково",
    "color": "#FFCD1C",
    "lineName": "Солнцевская",
    "line": "133",
    "lat": 55.606667,
    "lng": 37.288333,
    "connections": [
      "rasskazovka"
    ],
    "transferConnections": []
  },
  "kryukovo": {
    "id": "kryukovo",
    "name": "Крюково",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.979722,
    "lng": 37.173611,
    "connections": [
      "malino"
    ],
    "transferConnections": []
  },
  "malino": {
    "id": "malino",
    "name": "Малино",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.969167,
    "lng": 37.211667,
    "connections": [
      "kryukovo",
      "firsanovskaya"
    ],
    "transferConnections": []
  },
  "firsanovskaya": {
    "id": "firsanovskaya",
    "name": "Фирсановская",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.960278,
    "lng": 37.251111,
    "connections": [
      "malino",
      "shodnya"
    ],
    "transferConnections": []
  },
  "shodnya": {
    "id": "shodnya",
    "name": "Сходня",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.949722,
    "lng": 37.298611,
    "connections": [
      "firsanovskaya",
      "podrezkovo"
    ],
    "transferConnections": []
  },
  "podrezkovo": {
    "id": "podrezkovo",
    "name": "Подрезково",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.941667,
    "lng": 37.334722,
    "connections": [
      "shodnya",
      "novopodrezkovo"
    ],
    "transferConnections": []
  },
  "novopodrezkovo": {
    "id": "novopodrezkovo",
    "name": "Новоподрезково",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.936389,
    "lng": 37.351667,
    "connections": [
      "podrezkovo",
      "molzhaninovo"
    ],
    "transferConnections": []
  },
  "molzhaninovo": {
    "id": "molzhaninovo",
    "name": "Молжаниново",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.924167,
    "lng": 37.380833,
    "connections": [
      "novopodrezkovo",
      "himki"
    ],
    "transferConnections": []
  },
  "himki": {
    "id": "himki",
    "name": "Химки",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.894444,
    "lng": 37.450833,
    "connections": [
      "molzhaninovo",
      "levoberezhnaya"
    ],
    "transferConnections": []
  },
  "levoberezhnaya": {
    "id": "levoberezhnaya",
    "name": "Левобережная",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.886944,
    "lng": 37.468611,
    "connections": [
      "himki",
      "hovrino_l135"
    ],
    "transferConnections": []
  },
  "hovrino_l135": {
    "id": "hovrino_l135",
    "name": "Ховрино",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.879444,
    "lng": 37.486667,
    "connections": [
      "levoberezhnaya",
      "grachevskaya",
      "hovrino_l2"
    ],
    "transferConnections": [
      "hovrino_l2"
    ]
  },
  "grachevskaya": {
    "id": "grachevskaya",
    "name": "Грачёвская",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.869444,
    "lng": 37.509167,
    "connections": [
      "hovrino_l135",
      "mosselmash"
    ],
    "transferConnections": []
  },
  "mosselmash": {
    "id": "mosselmash",
    "name": "Моссельмаш",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.862222,
    "lng": 37.526389,
    "connections": [
      "grachevskaya",
      "lihobory_l135"
    ],
    "transferConnections": []
  },
  "lihobory_l135": {
    "id": "lihobory_l135",
    "name": "Лихоборы",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.85,
    "lng": 37.5525,
    "connections": [
      "mosselmash",
      "petrovsko_razumovskaya_l135",
      "lihobory_l95"
    ],
    "transferConnections": [
      "lihobory_l95"
    ]
  },
  "petrovsko_razumovskaya_l135": {
    "id": "petrovsko_razumovskaya_l135",
    "name": "Петровско-Разумовская",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.839722,
    "lng": 37.568333,
    "connections": [
      "lihobory_l135",
      "ostankino"
    ],
    "transferConnections": []
  },
  "ostankino": {
    "id": "ostankino",
    "name": "Останкино",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.817222,
    "lng": 37.603611,
    "connections": [
      "petrovsko_razumovskaya_l135",
      "rizhskaya_l135"
    ],
    "transferConnections": []
  },
  "rizhskaya_l135": {
    "id": "rizhskaya_l135",
    "name": "Рижская",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.796944,
    "lng": 37.639167,
    "connections": [
      "ostankino",
      "mitkovo",
      "rizhskaya_l136"
    ],
    "transferConnections": [
      "rizhskaya_l136"
    ]
  },
  "mitkovo": {
    "id": "mitkovo",
    "name": "Митьково",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.786389,
    "lng": 37.6675,
    "connections": [
      "rizhskaya_l135",
      "elektrozavodskaya_l135"
    ],
    "transferConnections": []
  },
  "elektrozavodskaya_l135": {
    "id": "elektrozavodskaya_l135",
    "name": "Электрозаводская",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.781111,
    "lng": 37.705278,
    "connections": [
      "mitkovo",
      "sortirovochnaya",
      "elektrozavodskaya_l3",
      "elektrozavodskaya_l97",
      "elektrozavodskaya_l98"
    ],
    "transferConnections": [
      "elektrozavodskaya_l3",
      "elektrozavodskaya_l97",
      "elektrozavodskaya_l98"
    ]
  },
  "sortirovochnaya": {
    "id": "sortirovochnaya",
    "name": "Сортировочная",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.763611,
    "lng": 37.720833,
    "connections": [
      "elektrozavodskaya_l135",
      "aviamotornaya_l135"
    ],
    "transferConnections": []
  },
  "aviamotornaya_l135": {
    "id": "aviamotornaya_l135",
    "name": "Авиамоторная",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.750278,
    "lng": 37.721944,
    "connections": [
      "sortirovochnaya",
      "andronovka_l135",
      "aviamotornaya_l8",
      "aviamotornaya_l97",
      "aviamotornaya_l98"
    ],
    "transferConnections": [
      "aviamotornaya_l8",
      "aviamotornaya_l97",
      "aviamotornaya_l98"
    ]
  },
  "andronovka_l135": {
    "id": "andronovka_l135",
    "name": "Андроновка",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.744444,
    "lng": 37.741111,
    "connections": [
      "aviamotornaya_l135",
      "perovo_l135"
    ],
    "transferConnections": []
  },
  "perovo_l135": {
    "id": "perovo_l135",
    "name": "Перово",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.735556,
    "lng": 37.765,
    "connections": [
      "andronovka_l135",
      "plyuschevo"
    ],
    "transferConnections": []
  },
  "plyuschevo": {
    "id": "plyuschevo",
    "name": "Плющево",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.730556,
    "lng": 37.774167,
    "connections": [
      "perovo_l135",
      "veshnyaki"
    ],
    "transferConnections": []
  },
  "veshnyaki": {
    "id": "veshnyaki",
    "name": "Вешняки",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.721944,
    "lng": 37.799167,
    "connections": [
      "plyuschevo",
      "vyhino_l135"
    ],
    "transferConnections": []
  },
  "vyhino_l135": {
    "id": "vyhino_l135",
    "name": "Выхино",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.716575,
    "lng": 37.815911,
    "connections": [
      "veshnyaki",
      "kosino_l135",
      "vyhino_l7"
    ],
    "transferConnections": [
      "vyhino_l7"
    ]
  },
  "kosino_l135": {
    "id": "kosino_l135",
    "name": "Косино",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.714167,
    "lng": 37.8475,
    "connections": [
      "vyhino_l135",
      "uhtomskaya"
    ],
    "transferConnections": []
  },
  "uhtomskaya": {
    "id": "uhtomskaya",
    "name": "Ухтомская",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.698611,
    "lng": 37.864167,
    "connections": [
      "kosino_l135",
      "lyubertsy_i"
    ],
    "transferConnections": []
  },
  "lyubertsy_i": {
    "id": "lyubertsy_i",
    "name": "Люберцы I",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.681667,
    "lng": 37.896944,
    "connections": [
      "uhtomskaya",
      "panki"
    ],
    "transferConnections": []
  },
  "panki": {
    "id": "panki",
    "name": "Панки",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.668889,
    "lng": 37.9225,
    "connections": [
      "lyubertsy_i",
      "tomilino"
    ],
    "transferConnections": []
  },
  "tomilino": {
    "id": "tomilino",
    "name": "Томилино",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.655,
    "lng": 37.954722,
    "connections": [
      "panki",
      "kraskovo"
    ],
    "transferConnections": []
  },
  "kraskovo": {
    "id": "kraskovo",
    "name": "Красково",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.649722,
    "lng": 37.9825,
    "connections": [
      "tomilino",
      "malahovka"
    ],
    "transferConnections": []
  },
  "malahovka": {
    "id": "malahovka",
    "name": "Малаховка",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.645,
    "lng": 38.008333,
    "connections": [
      "kraskovo",
      "udelnaya"
    ],
    "transferConnections": []
  },
  "udelnaya": {
    "id": "udelnaya",
    "name": "Удельная",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.634444,
    "lng": 38.043889,
    "connections": [
      "malahovka",
      "bykovo"
    ],
    "transferConnections": []
  },
  "bykovo": {
    "id": "bykovo",
    "name": "Быково",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.626667,
    "lng": 38.070556,
    "connections": [
      "udelnaya",
      "ilinskaya"
    ],
    "transferConnections": []
  },
  "ilinskaya": {
    "id": "ilinskaya",
    "name": "Ильинская",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.616389,
    "lng": 38.100278,
    "connections": [
      "bykovo",
      "otdyh"
    ],
    "transferConnections": []
  },
  "otdyh": {
    "id": "otdyh",
    "name": "Отдых",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.601111,
    "lng": 38.136944,
    "connections": [
      "ilinskaya",
      "kratovo"
    ],
    "transferConnections": []
  },
  "kratovo": {
    "id": "kratovo",
    "name": "Кратово",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.591667,
    "lng": 38.16,
    "connections": [
      "otdyh",
      "eseninskaya"
    ],
    "transferConnections": []
  },
  "eseninskaya": {
    "id": "eseninskaya",
    "name": "Есенинская",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.581944,
    "lng": 38.184167,
    "connections": [
      "kratovo",
      "fabrichnaya"
    ],
    "transferConnections": []
  },
  "fabrichnaya": {
    "id": "fabrichnaya",
    "name": "Фабричная",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.572778,
    "lng": 1.873333,
    "connections": [
      "eseninskaya",
      "ramenskoe"
    ],
    "transferConnections": []
  },
  "ramenskoe": {
    "id": "ramenskoe",
    "name": "Раменское",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.565278,
    "lng": 55.565278,
    "connections": [
      "fabrichnaya",
      "ippodrom"
    ],
    "transferConnections": []
  },
  "ippodrom": {
    "id": "ippodrom",
    "name": "Ипподром",
    "color": "#EA5B04",
    "lineName": "МЦД-3",
    "line": "135",
    "lat": 55.560278,
    "lng": 38.238889,
    "connections": [
      "ramenskoe"
    ],
    "transferConnections": []
  },
  "zheleznodorozhnaya": {
    "id": "zheleznodorozhnaya",
    "name": "Железнодорожная",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.7525,
    "lng": 38.008889,
    "connections": [
      "olgino"
    ],
    "transferConnections": []
  },
  "olgino": {
    "id": "olgino",
    "name": "Ольгино",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.751667,
    "lng": 37.978611,
    "connections": [
      "zheleznodorozhnaya",
      "kuchino"
    ],
    "transferConnections": []
  },
  "kuchino": {
    "id": "kuchino",
    "name": "Кучино",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.752222,
    "lng": 37.954722,
    "connections": [
      "olgino",
      "saltykovskaya"
    ],
    "transferConnections": []
  },
  "saltykovskaya": {
    "id": "saltykovskaya",
    "name": "Салтыковская",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.757778,
    "lng": 37.923056,
    "connections": [
      "kuchino",
      "nikolskoe"
    ],
    "transferConnections": []
  },
  "nikolskoe": {
    "id": "nikolskoe",
    "name": "Никольское",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.759722,
    "lng": 37.897778,
    "connections": [
      "saltykovskaya",
      "reutov"
    ],
    "transferConnections": []
  },
  "reutov": {
    "id": "reutov",
    "name": "Реутов",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.751389,
    "lng": 37.855833,
    "connections": [
      "nikolskoe",
      "novogireevo_l136"
    ],
    "transferConnections": []
  },
  "novogireevo_l136": {
    "id": "novogireevo_l136",
    "name": "Новогиреево",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.744444,
    "lng": 37.818333,
    "connections": [
      "reutov",
      "kuskovo"
    ],
    "transferConnections": []
  },
  "kuskovo": {
    "id": "kuskovo",
    "name": "Кусково",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.739722,
    "lng": 37.795278,
    "connections": [
      "novogireevo_l136",
      "chuhlinka"
    ],
    "transferConnections": []
  },
  "chuhlinka": {
    "id": "chuhlinka",
    "name": "Чухлинка",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.733889,
    "lng": 55.733889,
    "connections": [
      "kuskovo",
      "nizhegorodskaya_l136"
    ],
    "transferConnections": []
  },
  "nizhegorodskaya_l136": {
    "id": "nizhegorodskaya_l136",
    "name": "Нижегородская",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.733333,
    "lng": 37.729444,
    "connections": [
      "chuhlinka",
      "serp_i_molot",
      "nizhegorodskaya_l95",
      "nizhegorodskaya_l97",
      "nizhegorodskaya_l98"
    ],
    "transferConnections": [
      "nizhegorodskaya_l95",
      "nizhegorodskaya_l97",
      "nizhegorodskaya_l98"
    ]
  },
  "serp_i_molot": {
    "id": "serp_i_molot",
    "name": "Серп и Молот",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.748056,
    "lng": 37.681944,
    "connections": [
      "nizhegorodskaya_l136",
      "kurskaya_l136"
    ],
    "transferConnections": []
  },
  "kurskaya_l136": {
    "id": "kurskaya_l136",
    "name": "Курская",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.740833,
    "lng": 37.660556,
    "connections": [
      "serp_i_molot",
      "ploschad_treh_vokzalov_l136"
    ],
    "transferConnections": []
  },
  "ploschad_treh_vokzalov_l136": {
    "id": "ploschad_treh_vokzalov_l136",
    "name": "Площадь трёх вокзалов",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.776667,
    "lng": 37.651111,
    "connections": [
      "kurskaya_l136",
      "rizhskaya_l136",
      "ploschad_treh_vokzalov_l132"
    ],
    "transferConnections": [
      "ploschad_treh_vokzalov_l132"
    ]
  },
  "rizhskaya_l136": {
    "id": "rizhskaya_l136",
    "name": "Рижская",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.793889,
    "lng": 37.638611,
    "connections": [
      "ploschad_treh_vokzalov_l136",
      "marina_roscha_l136",
      "rizhskaya_l6",
      "rizhskaya_l97",
      "rizhskaya_l132",
      "rizhskaya_l135"
    ],
    "transferConnections": [
      "rizhskaya_l6",
      "rizhskaya_l97",
      "rizhskaya_l132",
      "rizhskaya_l135"
    ]
  },
  "marina_roscha_l136": {
    "id": "marina_roscha_l136",
    "name": "Марьина Роща",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.800833,
    "lng": 37.618889,
    "connections": [
      "rizhskaya_l136",
      "savelovskaya_l136",
      "marina_roscha_l97",
      "marina_roscha_l132"
    ],
    "transferConnections": [
      "marina_roscha_l97",
      "marina_roscha_l132"
    ]
  },
  "savelovskaya_l136": {
    "id": "savelovskaya_l136",
    "name": "Савёловская",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.794444,
    "lng": 37.590278,
    "connections": [
      "marina_roscha_l136",
      "belorusskaya_l136",
      "savelovskaya_l9",
      "savelovskaya_l97",
      "savelovskaya_l131"
    ],
    "transferConnections": [
      "savelovskaya_l9",
      "savelovskaya_l97",
      "savelovskaya_l131"
    ]
  },
  "belorusskaya_l136": {
    "id": "belorusskaya_l136",
    "name": "Белорусская",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.776389,
    "lng": 37.580278,
    "connections": [
      "savelovskaya_l136",
      "ermakova_roscha",
      "belorusskaya_l2",
      "belorusskaya_l5",
      "belorusskaya_l131"
    ],
    "transferConnections": [
      "belorusskaya_l2",
      "belorusskaya_l5",
      "belorusskaya_l131"
    ]
  },
  "ermakova_roscha": {
    "id": "ermakova_roscha",
    "name": "Ермакова Роща",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.765556,
    "lng": 37.535278,
    "connections": [
      "belorusskaya_l136",
      "testovskaya_l136"
    ],
    "transferConnections": []
  },
  "testovskaya_l136": {
    "id": "testovskaya_l136",
    "name": "Тестовская",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.750833,
    "lng": 37.530278,
    "connections": [
      "ermakova_roscha",
      "kutuzovskaya_l136",
      "testovskaya_l131"
    ],
    "transferConnections": [
      "testovskaya_l131"
    ]
  },
  "kutuzovskaya_l136": {
    "id": "kutuzovskaya_l136",
    "name": "Кутузовская",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.741944,
    "lng": 37.533056,
    "connections": [
      "testovskaya_l136",
      "poklonnaya",
      "kutuzovskaya_l4",
      "kutuzovskaya_l95"
    ],
    "transferConnections": [
      "kutuzovskaya_l4",
      "kutuzovskaya_l95"
    ]
  },
  "poklonnaya": {
    "id": "poklonnaya",
    "name": "Поклонная",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.728333,
    "lng": 37.511667,
    "connections": [
      "kutuzovskaya_l136",
      "minskaya_l136"
    ],
    "transferConnections": []
  },
  "minskaya_l136": {
    "id": "minskaya_l136",
    "name": "Минская",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.723333,
    "lng": 37.533056,
    "connections": [
      "poklonnaya",
      "matveevskoe"
    ],
    "transferConnections": []
  },
  "matveevskoe": {
    "id": "matveevskoe",
    "name": "Матвеевское",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.704722,
    "lng": 37.482222,
    "connections": [
      "minskaya_l136",
      "aminevskaya_l136"
    ],
    "transferConnections": []
  },
  "aminevskaya_l136": {
    "id": "aminevskaya_l136",
    "name": "Аминьевская",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.699444,
    "lng": 37.468056,
    "connections": [
      "matveevskoe",
      "ochakovo_i",
      "aminevskaya_l97"
    ],
    "transferConnections": [
      "aminevskaya_l97"
    ]
  },
  "ochakovo_i": {
    "id": "ochakovo_i",
    "name": "Очаково I",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.683611,
    "lng": 37.451389,
    "connections": [
      "aminevskaya_l136",
      "mescherskaya"
    ],
    "transferConnections": []
  },
  "mescherskaya": {
    "id": "mescherskaya",
    "name": "Мещерская",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.666667,
    "lng": 37.424444,
    "connections": [
      "ochakovo_i",
      "solnechnaya"
    ],
    "transferConnections": []
  },
  "solnechnaya": {
    "id": "solnechnaya",
    "name": "Солнечная",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.656944,
    "lng": 37.383611,
    "connections": [
      "mescherskaya",
      "novoperedelkino_l136"
    ],
    "transferConnections": []
  },
  "novoperedelkino_l136": {
    "id": "novoperedelkino_l136",
    "name": "Новопеределкино",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.639167,
    "lng": 37.381111,
    "connections": [
      "solnechnaya",
      "peredelkino"
    ],
    "transferConnections": []
  },
  "peredelkino": {
    "id": "peredelkino",
    "name": "Переделкино",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.656111,
    "lng": 37.353889,
    "connections": [
      "novoperedelkino_l136",
      "michurinets"
    ],
    "transferConnections": []
  },
  "michurinets": {
    "id": "michurinets",
    "name": "Мичуринец",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.646111,
    "lng": 37.315,
    "connections": [
      "peredelkino",
      "vnukovo"
    ],
    "transferConnections": []
  },
  "vnukovo": {
    "id": "vnukovo",
    "name": "Внуково",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.648889,
    "lng": 37.269722,
    "connections": [
      "michurinets",
      "lesnoy_gorodok"
    ],
    "transferConnections": []
  },
  "lesnoy_gorodok": {
    "id": "lesnoy_gorodok",
    "name": "Лесной Городок",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.630278,
    "lng": 37.219167,
    "connections": [
      "vnukovo",
      "tolstopaltsevo"
    ],
    "transferConnections": []
  },
  "tolstopaltsevo": {
    "id": "tolstopaltsevo",
    "name": "Толстопальцево",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.607778,
    "lng": 37.186389,
    "connections": [
      "lesnoy_gorodok",
      "kokoshkino"
    ],
    "transferConnections": []
  },
  "kokoshkino": {
    "id": "kokoshkino",
    "name": "Кокошкино",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.599722,
    "lng": 37.171389,
    "connections": [
      "tolstopaltsevo",
      "sanino"
    ],
    "transferConnections": []
  },
  "sanino": {
    "id": "sanino",
    "name": "Санино",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.583889,
    "lng": 37.138333,
    "connections": [
      "kokoshkino",
      "krekshino"
    ],
    "transferConnections": []
  },
  "krekshino": {
    "id": "krekshino",
    "name": "Крёкшино",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.577778,
    "lng": 37.109722,
    "connections": [
      "sanino",
      "pobeda"
    ],
    "transferConnections": []
  },
  "pobeda": {
    "id": "pobeda",
    "name": "Победа",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.566111,
    "lng": 37.093056,
    "connections": [
      "krekshino",
      "aprelevka"
    ],
    "transferConnections": []
  },
  "aprelevka": {
    "id": "aprelevka",
    "name": "Апрелевка",
    "color": "#00CC66",
    "lineName": "МЦД-4",
    "line": "136",
    "lat": 55.550278,
    "lng": 37.0675,
    "connections": [
      "pobeda"
    ],
    "transferConnections": []
  },
  "zil_l137": {
    "id": "zil_l137",
    "name": "ЗИЛ",
    "color": "#03795F",
    "lineName": "Троицкая",
    "line": "137",
    "lat": 55.697915,
    "lng": 37.647565,
    "connections": [
      "krymskaya_l137",
      "zil_l95"
    ],
    "transferConnections": [
      "zil_l95"
    ]
  },
  "krymskaya_l137": {
    "id": "krymskaya_l137",
    "name": "Крымская",
    "color": "#03795F",
    "lineName": "Троицкая",
    "line": "137",
    "lat": 55.689971,
    "lng": 37.605612,
    "connections": [
      "zil_l137",
      "akademicheskaya_l137",
      "krymskaya_l95"
    ],
    "transferConnections": [
      "krymskaya_l95"
    ]
  },
  "akademicheskaya_l137": {
    "id": "akademicheskaya_l137",
    "name": "Академическая",
    "color": "#03795F",
    "lineName": "Троицкая",
    "line": "137",
    "lat": 55.68808,
    "lng": 37.57501,
    "connections": [
      "krymskaya_l137",
      "vavilovskaya",
      "akademicheskaya_l6"
    ],
    "transferConnections": [
      "akademicheskaya_l6"
    ]
  },
  "vavilovskaya": {
    "id": "vavilovskaya",
    "name": "Вавиловская",
    "color": "#03795F",
    "lineName": "Троицкая",
    "line": "137",
    "lat": 55.686688,
    "lng": 37.543706,
    "connections": [
      "akademicheskaya_l137",
      "novatorskaya_l137"
    ],
    "transferConnections": []
  },
  "novatorskaya_l137": {
    "id": "novatorskaya_l137",
    "name": "Новаторская",
    "color": "#03795F",
    "lineName": "Троицкая",
    "line": "137",
    "lat": 55.670833,
    "lng": 37.52,
    "connections": [
      "vavilovskaya",
      "universitet_druzhby_narodov",
      "novatorskaya_l97"
    ],
    "transferConnections": [
      "novatorskaya_l97"
    ]
  },
  "universitet_druzhby_narodov": {
    "id": "universitet_druzhby_narodov",
    "name": "Университет дружбы народов",
    "color": "#03795F",
    "lineName": "Троицкая",
    "line": "137",
    "lat": 55.64824,
    "lng": 37.507556,
    "connections": [
      "novatorskaya_l137",
      "generala_tyuleneva"
    ],
    "transferConnections": []
  },
  "generala_tyuleneva": {
    "id": "generala_tyuleneva",
    "name": "Генерала Тюленева",
    "color": "#03795F",
    "lineName": "Троицкая",
    "line": "137",
    "lat": 55.626248,
    "lng": 37.486032,
    "connections": [
      "universitet_druzhby_narodov",
      "tyutchevskaya"
    ],
    "transferConnections": []
  },
  "tyutchevskaya": {
    "id": "tyutchevskaya",
    "name": "Тютчевская",
    "color": "#03795F",
    "lineName": "Троицкая",
    "line": "137",
    "lat": 55.618801,
    "lng": 37.481415,
    "connections": [
      "generala_tyuleneva",
      "kornilovskaya"
    ],
    "transferConnections": []
  },
  "kornilovskaya": {
    "id": "kornilovskaya",
    "name": "Корниловская",
    "color": "#03795F",
    "lineName": "Троицкая",
    "line": "137",
    "lat": 55.599411,
    "lng": 37.479586,
    "connections": [
      "tyutchevskaya",
      "kommunarka"
    ],
    "transferConnections": []
  },
  "kommunarka": {
    "id": "kommunarka",
    "name": "Коммунарка",
    "color": "#03795F",
    "lineName": "Троицкая",
    "line": "137",
    "lat": 55.57354,
    "lng": 37.468116,
    "connections": [
      "kornilovskaya",
      "novomoskovskaya"
    ],
    "transferConnections": []
  },
  "novomoskovskaya": {
    "id": "novomoskovskaya",
    "name": "Новомосковская",
    "color": "#03795F",
    "lineName": "Троицкая",
    "line": "137",
    "lat": 55.560094,
    "lng": 37.469807,
    "connections": [
      "kommunarka",
      "novomoskovskaya_kommunarka"
    ],
    "transferConnections": [
      "novomoskovskaya_kommunarka"
    ]
  }
};

export const metroStations = Object.values(metroGraph);

export const explicitTransferEdges = new Set([
  "shosse_entuziastov_l8::shosse_entuziastov_l95",
  "aviamotornaya_l8::aviamotornaya_l97",
  "aviamotornaya_l8::aviamotornaya_l98",
  "aviamotornaya_l135::aviamotornaya_l8",
  "tretyakovskaya_l6::tretyakovskaya_l8",
  "hovrino_l135::hovrino_l2",
  "belorusskaya_l2::belorusskaya_l5",
  "belorusskaya_l131::belorusskaya_l2",
  "belorusskaya_l136::belorusskaya_l2",
  "paveletskaya_l2::paveletskaya_l5",
  "avtozavodskaya_l2::avtozavodskaya_l95",
  "kashirskaya_l11::kashirskaya_l2",
  "kashirskaya_l2::kashirskaya_l97",
  "tsaritsyno_l132::tsaritsyno_l2",
  "botanicheskiy_sad_l6::botanicheskiy_sad_l95",
  "rizhskaya_l6::rizhskaya_l97",
  "rizhskaya_l132::rizhskaya_l6",
  "rizhskaya_l136::rizhskaya_l6",
  "prospekt_mira_l5::prospekt_mira_l6",
  "kitay_gorod_l6::kitay_gorod_l7",
  "oktyabrskaya_l5::oktyabrskaya_l6",
  "akademicheskaya_l137::akademicheskaya_l6",
  "bulvar_rokossovskogo_l1::bulvar_rokossovskogo_l95",
  "sokolniki_l1::sokolniki_l97",
  "komsomolskaya_l1::komsomolskaya_l5",
  "park_kultury_l1::park_kultury_l5",
  "prospekt_vernadskogo_l1::prospekt_vernadskogo_l97",
  "novomoskovskaya::novomoskovskaya_kommunarka",
  "elektrozavodskaya_l3::elektrozavodskaya_l97",
  "elektrozavodskaya_l3::elektrozavodskaya_l98",
  "elektrozavodskaya_l135::elektrozavodskaya_l3",
  "kurskaya_l3::kurskaya_l5",
  "kurskaya_l132::kurskaya_l3",
  "arbatskaya_l3::arbatskaya_l4",
  "smolenskaya_l3::smolenskaya_l4",
  "kievskaya_l3::kievskaya_l4",
  "kievskaya_l3::kievskaya_l5",
  "park_pobedy_l133::park_pobedy_l3",
  "slavyanskiy_bulvar_l131::slavyanskiy_bulvar_l3",
  "kuntsevskaya_l3::kuntsevskaya_l4",
  "kuntsevskaya_l3::kuntsevskaya_l97",
  "kuntsevskaya_l131::kuntsevskaya_l3",
  "volokolamskaya_l132::volokolamskaya_l3",
  "kuntsevskaya_l4::kuntsevskaya_l97",
  "kuntsevskaya_l131::kuntsevskaya_l4",
  "fili_l131::fili_l4",
  "kutuzovskaya_l4::kutuzovskaya_l95",
  "kutuzovskaya_l136::kutuzovskaya_l4",
  "kievskaya_l4::kievskaya_l5",
  "delovoy_tsentr_l133::delovoy_tsentr_vystavochnaya",
  "delovoy_tsentr_l97::delovoy_tsentr_vystavochnaya",
  "vladykino_l9::vladykino_l95",
  "petrovsko_razumovskaya_l10::petrovsko_razumovskaya_l9",
  "timiryazevskaya_l131::timiryazevskaya_l9",
  "dmitrovskaya_l132::dmitrovskaya_l9",
  "savelovskaya_l9::savelovskaya_l97",
  "savelovskaya_l131::savelovskaya_l9",
  "savelovskaya_l136::savelovskaya_l9",
  "tushinskaya_l132::tushinskaya_l7",
  "begovaya_l131::begovaya_l7",
  "taganskaya_l5::taganskaya_l7",
  "tekstilschiki_l7::tekstilschiki_l97",
  "tekstilschiki_l132::tekstilschiki_l7",
  "vyhino_l135::vyhino_l7",
  "kurskaya_l132::kurskaya_l5",
  "belorusskaya_l131::belorusskaya_l5",
  "belorusskaya_l136::belorusskaya_l5",
  "okruzhnaya_l10::okruzhnaya_l95",
  "okruzhnaya_l10::okruzhnaya_l131",
  "pechatniki_l10::pechatniki_l97",
  "lyublino_l10::lyublino_l132",
  "kashirskaya_l11::kashirskaya_l97",
  "varshavskaya_l11::varshavskaya_l97",
  "kahovskaya_l11::kahovskaya_l97",
  "delovoy_tsentr_l133::delovoy_tsentr_l97",
  "michurinskiy_prospekt_l133::michurinskiy_prospekt_l97",
  "okruzhnaya_l131::okruzhnaya_l95",
  "nizhegorodskaya_l95::nizhegorodskaya_l97",
  "nizhegorodskaya_l95::nizhegorodskaya_l98",
  "nizhegorodskaya_l136::nizhegorodskaya_l95",
  "zil_l137::zil_l95",
  "krymskaya_l137::krymskaya_l95",
  "kutuzovskaya_l136::kutuzovskaya_l95",
  "shelepiha_l95::shelepiha_l97",
  "streshnevo_l132::streshnevo_l95",
  "lihobory_l135::lihobory_l95",
  "novatorskaya_l137::novatorskaya_l97",
  "tekstilschiki_l132::tekstilschiki_l97",
  "nizhegorodskaya_l97::nizhegorodskaya_l98",
  "nizhegorodskaya_l136::nizhegorodskaya_l97",
  "aviamotornaya_l97::aviamotornaya_l98",
  "aviamotornaya_l135::aviamotornaya_l97",
  "lefortovo_l97::lefortovo_l98",
  "elektrozavodskaya_l97::elektrozavodskaya_l98",
  "elektrozavodskaya_l135::elektrozavodskaya_l97",
  "rizhskaya_l132::rizhskaya_l97",
  "rizhskaya_l136::rizhskaya_l97",
  "marina_roscha_l132::marina_roscha_l97",
  "marina_roscha_l136::marina_roscha_l97",
  "savelovskaya_l131::savelovskaya_l97",
  "savelovskaya_l136::savelovskaya_l97",
  "kuntsevskaya_l131::kuntsevskaya_l97",
  "aminevskaya_l136::aminevskaya_l97",
  "nizhegorodskaya_l136::nizhegorodskaya_l98",
  "elektrozavodskaya_l135::elektrozavodskaya_l98",
  "aviamotornaya_l135::aviamotornaya_l98",
  "savelovskaya_l131::savelovskaya_l136",
  "belorusskaya_l131::belorusskaya_l136",
  "testovskaya_l131::testovskaya_l136",
  "rizhskaya_l132::rizhskaya_l136",
  "ploschad_treh_vokzalov_l132::ploschad_treh_vokzalov_l136",
  "marina_roscha_l132::marina_roscha_l136",
  "rizhskaya_l135::rizhskaya_l136"
]);
