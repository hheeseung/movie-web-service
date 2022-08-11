class MovieAPI {
  constructor() {
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async movieList() {
    try {
      const response = await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year',
        this.getRequestOptions
      );
      const result = await response.json();
      return result.data.movies;
    } catch (error) {
      return console.log('error', error);
    }
  }
}

export default MovieAPI;
