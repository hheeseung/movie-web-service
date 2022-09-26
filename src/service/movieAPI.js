class MovieAPI {
  constructor() {
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async movieList() {
    try {
      const [response1, response2, response3] = await Promise.all([
        fetch(
          'https://yts.mx/api/v2/list_movies.json?&sort_by=like_count&limit=7',
          this.getRequestOptions
        ),
        fetch(
          'https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=7',
          this.getRequestOptions
        ),
        fetch('https://yts.mx/api/v2/list_movies.json?sort_by=year&limit=7'),
      ]);
      const popular = await response1.json();
      const highRating = await response2.json();
      const recent = await response3.json();
      return [popular.data.movies, highRating.data.movies, recent.data.movies];
    } catch (error) {
      return console.log('error', error);
    }
  }

  async movieListAll() {
    try {
      const [response1, response2, response3] = await Promise.all([
        fetch(
          'https://yts.mx/api/v2/list_movies.json?&sort_by=like_count&limit=42',
          this.getRequestOptions
        ),
        fetch(
          'https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=42',
          this.getRequestOptions
        ),
        fetch('https://yts.mx/api/v2/list_movies.json?sort_by=year&limit=42'),
      ]);
      const popular = await response1.json();
      const highRating = await response2.json();
      const recent = await response3.json();
      return [popular.data.movies, highRating.data.movies, recent.data.movies];
    } catch (error) {
      return console.log('error', error);
    }
  }

  async movieDetail(id) {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_cast=true`,
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
