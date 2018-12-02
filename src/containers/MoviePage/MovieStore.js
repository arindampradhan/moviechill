import { observable, autorun, action, runInAction,computed } from "mobx";
import api from "../../api";
class Movie {
    @observable movie = null
    @observable movie_details = null
    @observable state = {
        movie: 'pending',
        movie_details: 'pending'
    }

    @computed get movie_id() {
        return this.movie && this.movie.id ? this.movie.id: null
    }

    @action("MOVIE")
    getMovie(movie_id) {
        this.state.movie = 'pending'
        this.movie = null

        api.getMovie(movie_id).then(response => {
            runInAction(() => {
                this.movie = response
                this.state.movie = 'success'
            })
        }).catch(() => {
            runInAction(() => {
                this.state.movie = 'error'
            })
        })
    }

    @action("MOVIE_DETAILS")
    getMovieDetails(movie_id) {
        this.state.movie_details = 'pending'
        this.movie_details = null
        api.getMovieDetails(movie_id).then(response => {
            runInAction(() => {
                this.movie_details = response
                this.state.movie_details = 'success'
            })
        }).catch(() => {
            runInAction(() => {
                this.state.movie_details = 'error'
            })
        })
    }

}
export default Movie