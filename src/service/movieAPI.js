class MovieAPI {
  constructor() {
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async popularMovieList() {
    try {
      const response = await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=like_count&limit=30',
        this.getRequestOptions
      );
      const result = await response.json();
      return result.data.movies;
    } catch (error) {
      return console.log('error', error);
    }
  }

  async movieDetail(id) {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
        this.getRequestOptions
      );
      const result = await response.json();
      return result.data.movie;
    } catch (error) {
      return console.log('error', error);
    }
  }
}

export default MovieAPI;
