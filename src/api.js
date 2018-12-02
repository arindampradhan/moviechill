import request from './utils/request';

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
    return Promise.all([
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
    .then(function ([
        alternative_titles,
        changes,
        credits,
        external_ids,
        images,
        keywords,
        release_dates,
        videos,
        translations,
        recommendations,
        similar,
        reviews,
        lists,
        recommentation,
        similarMovie,
        review,
        list
    ]) {
        return { 
            alternative_titles,
            changes,
            credits,
            external_ids,
            images,
            keywords,
            release_dates,
            videos,
            translations,
            recommendations,
            similar,
            reviews,
            lists,
            recommentation,
            similarMovie,
            review,
            list
        }
    });
}
/**
 * get trending and popular
 */
export const trendingAndPopular = () => {
    return Promise.all([
        request({ url: `/movie/popular` }), 
        request({ url: `/movie/top_rated` }), 
        request({ url: `/trending/all/day` }), 

    ])
    .then(function ([popular, top_rated, trending_all_day]) {
        return { popular, top_rated, trending_all_day }
    });
}


//////////////////////////////////
// Search page
//////////////////////////////////

/**
 * Default page view
 * Discover Movie
 */
export const discoverMovie = (type, primary_release_year = 2018) => {
    let url = '';
    switch (type) {
        case 'theatres':
            url = `/discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2019-01-01`;
            break;
        case 'popular':
            url = `/discover/movie?sort_by=popularity.desc`;
            break;
        case 'R':
            url = `/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc`;
            break;
        case 'kids':
            url = `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc`;
            break;
        case 'dramas':
            url = `/discover/movie?primary_release_year=${primary_release_year}&sort_by=vote_average.desc`;
            break;
        case 'science_fiction':
            url = `/discover/movie?with_genres=878&sort_by=vote_average.desc`;
            break;
        case 'highest_grossing':
            url = `/discover/movie?with_genres=35&sort_by=revenue.desc`;
            break;
        case 'best_drama':
            url = `/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10`;
            break;
        default:
            // movies in theater
            url = `/discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2019-01-01`;
            break;
    }

    return request({
        url
    })
}


/**
 * Search movie by query
 * @param {String} query search for movie
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
    return request({ url: `/person/${person_id}`})
}


/**
 * Full Person Detail View
 * @param {Number} person_id
 */
export const getPersonDetails = (person_id) => {
    return Promise.all([
        request({ url: `/person/${person_id}/changes` }),
        request({ url: `/person/${person_id}/movie_credits` }),
        request({ url: `/person/${person_id}/tv_credits` }),
        request({ url: `/person/${person_id}/combined_credits` }),
        request({ url: `/person/${person_id}/external_ids` }),
        request({ url: `/person/${person_id}/images` }),
        request({ url: `/person/${person_id}/tagged_images` }),
        request({ url: `/person/${person_id}/translations` }),
    ])
    .then(function ([changes, movie_credits, tv_credits, combined_credits, external_ids, images, tagged_images, translations]) {
        return { changes, movie_credits, tv_credits, combined_credits, external_ids, images, tagged_images, translations }
    });
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