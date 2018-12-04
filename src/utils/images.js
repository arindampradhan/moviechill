import _random from 'lodash/random'
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

const randomList =  [
  '/images/illustrations/burger-and-coke-06.png',
  '/images/illustrations/director.png',
  '/images/illustrations/orange_dribble_aa.jpg',
  '/images/illustrations/deep2.jpg',
  '/images/illustrations/random_arts.jpg',
  '/images/illustrations/bemocs_wsj_01.jpg',
  '/images/illustrations/movieposter.png'
]

const randomBlur = [
  '/images/icons/blur.jpg',
  '/images/icons/blur2.jpg',
]

const getImage = {
  backdrop: (url) =>  `${config.images.secure_base_url}${config.images.backdrop_sizes[1]}/${url}`,
  logo: (url) =>  `${config.images.secure_base_url}${config.images["logo_sizes"][1]}/${url}`,
  poster: (url) =>  `${config.images.secure_base_url}${config.images["poster_sizes"][6]}/${url}`,
  profile: (url) =>  `${config.images.secure_base_url}${config.images["profile_sizes"][1]}/${url}`,
  still: (url) =>  `${config.images.secure_base_url}${config.images["still_sizes"][1]}/${url}`,
  random: () => randomList[_random(0, randomList.length - 1)],
  blur: () => randomBlur[_random(0, randomBlur.length - 1)]
}

export default getImage