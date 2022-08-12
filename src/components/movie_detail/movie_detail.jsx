import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../movie_detail/movie_detail.module.css';

const MovieDetail = ({
  title,
  thumbnail,
  rating,
  runtime,
  genres,
  likes,
  description,
}) => {
  return (
    <>
      <main className={styles.contents}>
        <div className={styles.metadata}>
          <img src={thumbnail} alt='thumbnail' className={styles.thumbnail} />
          <div className={styles.movieInfo}>
            <h1>{title}</h1>
            <p className={styles.rating}>
              <i className='fa-solid fa-star'></i> {rating} / 10
            </p>
            <p className={styles.likes}>
              <i className='fa-solid fa-heart'></i> {likes}
            </p>
            <p className={styles.runtime}>
              <i className='fa-solid fa-clock'></i>
              {` ${Math.floor(runtime / 60)}`}h {runtime % 60} min
            </p>
            {genres &&
              genres.map((genre) => (
                <p key={genre} className={styles.genre}>
                  #{genre}
                </p>
              ))}
          </div>
        </div>
        <h3>Synopsis</h3>
        <p className={styles.description}>{description}</p>
      </main>
      <Link to='/'>
        <button className={styles.back}>
          <i className='fa-solid fa-arrow-left-long'></i>
          &nbsp;back
        </button>
      </Link>
    </>
  );
};

export default MovieDetail;
