# Movie Web Service

## 📝 About Project

`fetch`를 통해 외부 API의 데이터를 이용해 만든 영화 조회 서비스입니다. 데이터는 YTS 사이트의 좋아요 순 상위 50개의 영화 데이터를 가져왔습니다. 홈 화면의 썸네일을 클릭하면 세부화면으로 넘어가도록 구현하였습니다. 또한 반응형을 고려하여 모바일 화면에서도 잘 구현될 수 있도록 만들었습니다.

![movie-web-service](https://user-images.githubusercontent.com/87454393/185085963-3689dc9f-5259-4d51-b4a5-eef5d02b325e.png)
![movie-web-service-detail](https://user-images.githubusercontent.com/87454393/185085989-449c91b5-bfff-4ce9-99de-4ee2d31c8221.png)

## 🖥 Environment

1. Skills: `React JS`, `React Router`, `PostCSS`
2. Deploy: `Netlify` - [Click Here To See Demo](https://movie-web-service.netlify.app/)

## 💡 Code

### movieAPI.js

```javascript
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
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=like_count&limit=50',
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
```

### home.jsx

```javascript

...

const [movies, setMovies] = useState([]);

useEffect(() => {
  movieAPI
    .movieList() //
    .then((movies) => {
      setMovies(movies);
      setLoading(false);
    });
}, [movieAPI]);

...

```

- React는 View에 해당하는 영역이기 때문에 데이터 통신은 파일을 따로 만들어 분리했습니다.
- 분리한 데이터 통신 파일(movieAPI.js)의 메서드를 통해 데이터를 가져오도록 구현했습니다.

### detail.jsx

```javascript
...

const {id} = useParams();
const [movie, setMovie] = useState([]);

useEffect(() => {
  movieAPI
    .movieDetail(id) //
    .then((movie) => {
      setMovie(movie);
      setLoading(false);
    });
}, [id, movieAPI]);

...

<MovieDetail
  title={movie.title_long}
  thumbnail={movie.medium_cover_image}
  rating={movie.rating}
  runtime={movie.runtime}
  genres={movie.genres}
  likes={movie.like_count}
  description={movie.description_full}
 />
...
```

- 라우팅은 `useParams`로 선택한 영화의 고유 id값을 불러와 그 id에 해당하는 데이터를 `props`로 전달하여 상세화면에서 나타나도록 구현했습니다.
