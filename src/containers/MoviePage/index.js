import React, { Component } from 'react'
import { observer } from 'mobx-react';

@observer(['movie'])
class MoviePage extends Component {
  componentDidMount() {
      debugger
      const {movie, match} = this.props
      if (match && match.params.movie_id) {
          movie.getMovie(match.params.movie_id)
          movie.getMovieDetails(match.params.movie_id)
      }
  }

  render() {
    return (
      <div>
        <h2>Movie Page</h2>
      </div>
    )
  }
}


export default MoviePage;
