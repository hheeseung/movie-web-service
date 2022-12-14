# Movie Web Service

## π About Project

`fetch`λ₯Ό μ¬μ©νμ¬ μΈλΆ APIμ λ°μ΄ν°λ₯Ό κ°μ Έμ λ§λ  μν μ λ³΄ μ‘°ν μλΉμ€μλλ€. [YTS μ¬μ΄νΈ](https://yts.mx/api) APIλ₯Ό μ΄μ©νμ¬ μν λ°μ΄ν°λ₯Ό μμ§νμμ΅λλ€. `React Router`λ₯Ό μ¬μ©νμ¬ νλ©΄ κ° μ΄λμ κ΅¬ννκ³ , λͺ¨λ°μΌ νλ©΄μμλ κΉ¨μ§μ§ μκ³  μ λ³΄μ¬μ§ μ μλλ‘ μ μνμμ΅λλ€.

![Movie-Web-Service-Demo](https://user-images.githubusercontent.com/87454393/192266988-0b14a1c1-5788-4135-ad87-546065f4e6fb.gif)

## π₯ Demo

[Click Here To See Demo](https://movie-web-service.netlify.app/)

## π©βπ» Environment

1. Skills: Bootstrap, PostCSS, React JS, React Router
2. Deploy: Netlify

## π‘ Code

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

- 3κ°μ§ μΉ΄νκ³ λ¦¬(μΈκΈ°μ, νμ μ, μ΅μ μ)λ₯Ό λνλ΄κΈ° μν΄ `Promise.all`λ‘ API μ£Όμκ° μ¬λ¬ κ°λ₯Ό μ λ¬νμμ΅λλ€.

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

- Reactλ Viewμ ν΄λΉνλ μμ­μ΄κΈ° λλ¬Έμ λ°μ΄ν° ν΅μ μ νμΌμ λ°λ‘ λ§λ€μ΄ μμ‘΄μ± μ£Όμμ νμμ΅λλ€.
- μΉ΄νκ³ λ¦¬μ λ°λ₯Έ λΌμ°νμ μν΄ `state`λ₯Ό μΈκ°μ§λ‘ λλμ΄ λ°μ΄ν°λ₯Ό μ λ¬λ°λλ‘ νμμ΅λλ€.

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

- μμΈ νλ©΄μΌλ‘μ μ΄λμ `useParams`λ₯Ό ν΅ν΄ κ³ μ  idκ°μ μ λ¬λ°μ ν΄λΉ μνμ λν μ λ³΄λ₯Ό λ°μμ€λλ‘ κ΅¬ννμμ΅λλ€.

## During the Project

### μ΄λ €μ λ λΆλΆ

- μΌλΆ μνμ κ²½μ° μΆμ°μ λͺ©λ‘μ΄λ μ€κ±°λ¦¬, μν ν¬μ€ν° κ·Έλ¦Όμ΄ μμ΄μ λΉ μΉΈμΌλ‘ λ¨λ λ¬Έμ κ° μμμ΅λλ€. κ·Έλ° μμλ§λ€ λμ²΄ν  μ΄λ―Έμ§λ νμ€νΈλ₯Ό λ£λ μμμ ν΄μ€μΌ νμ΅λλ€.

### ν΄κ²°

- μν μ μ²΄ λͺ©λ‘μμμ μΈλ€μΌμ μ΅μμ μ»΄ν¬λνΈμμ propsλ₯Ό ν΅ν΄ λμ²΄ μ΄λ―Έμ§λ₯Ό μ λ¬λ°λ λ°©μμΌλ‘ κ΅¬ννμμ΅λλ€.
- μν μμΈ λͺ©λ‘μμ λ¨μ§ μλ μν ν¬μ€ν°λ μμΈλͺ©λ‘ μ»΄ν¬λνΈ μμμ λμ²΄ μ΄λ―Έμ§λ₯Ό λ§λ€μ΄ λμ²΄νλ λ°©μμΌλ‘ κ΅¬ννμ΅λλ€.
- μΆμ°μ μ λ³΄μ μ€λͺμ΄ λ¨μ§ μλ κ²½μ°λ μ λ¬λ°μ κ°μ΄ μμ κ²½μ° νμ€νΈλ λμ²΄ μ΄λ―Έμ§ κ²½λ‘κ° λ¨λλ‘ λ§λ€μμ΅λλ€.

### κ°μ  λλ μΆκ°νκ³  μΆμ κ²

- [ ] API ν΅μ  μλ ν₯μνκΈ°
- [ ] κ²μ κΈ°λ₯ κ΅¬ννκΈ°
- [ ] μ¬μ©μ κ΄λ ¨ κΈ°λ₯ - λ‘κ·ΈμΈ, νμ  λ§€κΈ°κΈ°, νμ€ν μ°κΈ° λ±
- [ ] ν΄λΉ μνμ κ΄λ ¨λ μν μΆμ² κΈ°λ₯
