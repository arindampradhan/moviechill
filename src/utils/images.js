const config = {
  "images": {
    "base_url": "http://image.tmdb.org/t/p/",
    "secure_base_url": "https://image.tmdb.org/t/p/",
    "backdrop_sizes": [
      "w300",
      "w780",
      "w1280",
      "original"
    ],
    "logo_sizes": [
      "w45",
      "w92",
      "w154",
      "w185",
      "w300",
      "w500",
      "original"
    ],
    "poster_sizes": [
      "w92",
      "w154",
      "w185",
      "w342",
      "w500",
      "w780",
      "original"
    ],
    "profile_sizes": [
      "w45",
      "w185",
      "h632",
      "original"
    ],
    "still_sizes": [
      "w92",
      "w185",
      "w300",
      "original"
    ]
  }
}
const getImage = {
  backdrop_sizes: (url) =>  `${config.secure_base_url}/${config.images["backdrop_sizes"]}/${url}`,
  logo_sizes: (url) =>  `${config.secure_base_url}/${config.images["logo_sizes"]}/${url}`,
  poster_sizes: (url) =>  `${config.secure_base_url}/${config.images["poster_sizes"]}/${url}`,
  profile_sizes: (url) =>  `${config.secure_base_url}/${config.images["profile_sizes"]}/${url}`,
  still_sizes: (url) =>  `${config.secure_base_url}/${config.images["still_sizes"]}/${url}`,
}

export default getImage