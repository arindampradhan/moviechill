import React, { Component } from 'react'
import { observer } from 'mobx-react';
import MovieView from '../../components/MovieView';
import Cast from '../../components/Cast';
import StoryView from '../../components/StoryView';


@observer(['movie'])
class MoviePage extends Component {
  componentDidMount() {
    const {movie, match} = this.props
    if (match && match.params.movie_id) {
      movie.getMovie(match.params.movie_id)
      movie.getMovieDetails(match.params.movie_id)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { movie, match } = this.props
    const { match: match2 } = nextProps
    if (match.params.movie_id !== match2.params.movie_id) {
      movie.getMovie(match.params.movie_id)
      movie.getMovieDetails(match.params.movie_id)
    }
  }

  render() {
    const { movie, movie_details } = this.props.movie;
    const { credits, external_ids, images, keywords, list, lists, recommendations, reviews, similarMovie, videos } = movie_details || {}
    
    return (
      <div className="container-fluid">
        <MovieView {...movie}/>
        {credits ? <Cast cast={credits.cast} crew={credits.crew} />:null}
        <StoryView movie={movie} />
      </div>
    )
  }
}


export default MoviePage;
