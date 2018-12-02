import request from './utils/request';
import axios from 'axios'

//////////////////////////////////
// Movie page
//////////////////////////////////

/**
 * get Movie details
 * @param {Number} movie_id
 */
export const getMovie = (movie_id) => {
    return request({
        url: `/movie/${movie_id}`
    })
}

/**
 * Full Movie Detail View
 * @param {Number} movie_id
 */
 export const getMovieDetails = (movie_id) => {
    return axios.all([
        request({ url: `/movie/${movie_id}/alternative_titles`}), 
        request({ url: `/movie/${movie_id}/changes` }), 
        request({ url: `/movie/${movie_id}/credits` }), 
        request({ url: `/movie/${movie_id}/external_ids` }), 
        request({ url: `/movie/${movie_id}/images` }), 
        request({ url: `/movie/${movie_id}/keywords` }), 
        request({ url: `/movie/${movie_id}/release_dates` }), 
        request({ url: `/movie/${movie_id}/videos` }), 
        request({ url: `/movie/${movie_id}/translations` }), 
        request({ url: `/movie/${movie_id}/recommendations` }), 
        request({ url: `/movie/${movie_id}/similar` }), 
        request({ url: `/movie/${movie_id}/reviews` }), 
        request({ url: `/movie/${movie_id}/lists` }), 
        request({ url: `/movie/${movie_id}/recommendations` }), 
        request({ url: `/movie/${movie_id}/similar` }), 
        request({ url: `/movie/${movie_id}/reviews` }), 
        request({ url: `/movie/${movie_id}/lists` }), 
    ])
    .then(axios.spread(function (acct, perms) {
        console.log(acct, perms)
    }));
}
/**
 * get trending and popular
 */
export const trendingAndPopular = () => {
    return axios.all([
        request({ url: `/movie/popular` }), 
        request({ url: `/movie/top_rated` }), 
        request({ url: `/trending/all/day` }), 

    ])
    .then(axios.spread(function (acct, perms) {
        console.log(acct, perms)
    }));
}


//////////////////////////////////
// Search page
//////////////////////////////////

/**
 * Default page view
 * Discover Movie
 */
export const discoverMovie = () => {
    return request({
        url: `/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US`
    })
}

/**
 * Search movie by query
 * @param {*} query search for movie
 */
export const searchMovie = (query) => {
    return request({
        url: `/search/movie?language=en-US&query=${query}&page=1&include_adult=false`
    })
}


//////////////////////////////////
// People page
//////////////////////////////////

/**
 * Get person
 * @param {Number} person_id 
 */
export const getPerson = (person_id) => {
    return request({ url: `/person/{person_id}`})
}


/**
 * Full Person Detail View
 * @param {Number} person_id
 */
export const getPersonDetails = (person_id) => {
    return axios.all([
        request({ url: `/person/${person_id}/changes` }),
        request({ url: `/person/${person_id}/movie_credits` }),
        request({ url: `/person/${person_id}/tv_credits` }),
        request({ url: `/person/${person_id}/combined_credits` }),
        request({ url: `/person/${person_id}/external_ids` }),
        request({ url: `/person/${person_id}/images` }),
        request({ url: `/person/${person_id}/tagged_images` }),
        request({ url: `/person/${person_id}/translations` }),
    ])
    .then(axios.spread(function (acct, perms) {
        console.log(acct, perms)
    }));
}

export default {
    getMovie,
    getMovieDetails,
    trendingAndPopular,
    discoverMovie,
    searchMovie,
    getPerson,
    getPersonDetails,
}