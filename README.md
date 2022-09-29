# Movie Web Service

## 📝 About Project

`fetch`를 사용하여 외부 API의 데이터를 가져와 만든 영화 정보 조회 서비스입니다. [YTS 사이트](https://yts.mx/api) API를 이용하여 영화 데이터를 수집하였습니다. `React Router`를 사용하여 화면 간 이동을 구현했고, 모바일 화면에서도 깨지지 않고 잘 보여질 수 있도록 제작하였습니다.

![Movie-Web-Service-Demo](https://user-images.githubusercontent.com/87454393/192266988-0b14a1c1-5788-4135-ad87-546065f4e6fb.gif)

## 🖥 Demo

[Click Here To See Demo](https://movie-web-service.netlify.app/)

## 👩‍💻 Environment

1. Skills: Bootstrap, PostCSS, React JS, React Router
2. Deploy: Netlify

## 💡 Code

### movieAPI.js

```javascript
class MovieAPI {
  ...
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
  ...
}
```

- 3가지 카테고리(인기순, 평점순, 최신순)를 나타내기 위해 `Promise.all`로 API 주소값 여러 개를 전달하였습니다.

### home.jsx

```javascript
...
const [popularMovies, setPopularMovies] = useState([]);
const [highRatingMovies, setHighRatingMovies] = useState([]);
const [recentMovies, setRecentMovies] = useState([]);

useEffect(() => {
  movieAPI
    .movieList() //
    .then((movies) => {
      setPopularMovies(movies[0]);
      setHighRatingMovies(movies[1]);
      setRecentMovies(movies[2]);
      setLoading(false);
    });
}, [movieAPI]);
...
```

- React는 View에 해당하는 영역이기 때문에 데이터 통신은 파일을 따로 만들어 의존성 주입을 하였습니다.
- 카테고리에 따른 라우팅을 위해 `state`를 세가지로 나누어 데이터를 전달받도록 하였습니다.

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
```

- 상세 화면으로의 이동은 `useParams`를 통해 고유 id값을 전달받아 해당 영화에 대한 정보를 받아오도록 구현하였습니다.

## During the Project

### 어려웠던 부분

- 일부 영화의 경우 출연자 목록이나 줄거리, 영화 포스터 그림이 없어서 빈 칸으로 뜨는 문제가 있었습니다. 그런 요소마다 대체할 이미지나 텍스트를 넣는 작업을 해줘야 했습니다.

### 해결

- 영화 전체 목록에서의 썸네일은 최상위 컴포넌트에서 props를 통해 대체 이미지를 전달받는 방식으로 구현하였습니다.
- 영화 상세 목록에서 뜨지 않는 영화 포스터는 상세목록 컴포넌트 안에서 대체 이미지를 만들어 대체하는 방식으로 구현했습니다.
- 출연자 정보와 설명이 뜨지 않는 경우는 전달받은 값이 없을 경우 텍스트나 대체 이미지 경로가 뜨도록 만들었습니다.

### 개선 또는 추가하고 싶은 것

- [] API 통신 속도 향상하기
- [] 검색 기능 구현하기
- [] 사용자 관련 기능 - 로그인, 평점 매기기, 한줄평 쓰기 등
- [] 해당 영화와 관련된 영화 추천 기능
