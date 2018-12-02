import api, { discoverMovie } from '../../api';
import { observable, autorun, action, computed, configure, runInAction } from "mobx";

configure({ enforceActions: "observed" })
export class Home {

    // trending
    @observable trending = []
    @observable popular = []
    @observable top_rated = []

    // discover
    @observable discover = []

    // search
    @observable search_results = []

    @observable state = {
        trending: 'pending',
        discover: 'pending',
        search: 'pending',
        search_results: 'pending'
    };

    
    @action("TRENDING_AND_POPULAR")
    getTrendingAndPopular() {
        this.trending = []
        this.popular = []
        this.top_rated = []
        this.state.trending = 'pending'

        api.trendingAndPopular().then(response => {
            runInAction(() => {
                this.state.trending = 'success'
                this.trending = response.trending_all_day
                this.popular = response.popular
                this.top_rated = response.top_rated
            })
        }).catch(() => {
            runInAction(() => {
                this.state.trending = 'error'
            })
        })
    }

    @action("DISCOVER_MOVIE")
    discoverMovie(type, primary_release_year) {
        this.state.discover = 'pending'
        this.discover = []
        api.discoverMovie(type,primary_release_year).then(response => {
            runInAction(() => {
                this.state.discover = 'success'
                this.discover = response
            })
        }).catch(() => {
            runInAction(() => {
                this.state.discover = 'error'
            })
        })
    }
    
    @action("SEARCH_MOVIE")
    searchMovie(query) {
        this.state.search = 'pending'
        this.search_results = []
        api.searchMovie(query).then(response => {
            runInAction(() => {
                this.state.search = 'success'
                this.search_results = response
            })
        }).catch(() => {
            runInAction(() => {
                this.state.search = 'error'
            })
        })
    }
 }

export default Home