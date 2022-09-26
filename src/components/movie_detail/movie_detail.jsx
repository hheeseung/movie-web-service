import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from '../movie_detail/movie_detail.module.css';

const DEFAULT_COVER = '/images/no-image-available.jpg';

const MovieDetail = ({
  title,
  thumbnail,
  rating,
  runtime,
  genres,
  likes,
  description,
}) => {
  const navigate = useNavigate();
  const handleImgError = (e) => (e.target.src = DEFAULT_COVER);

  return (
    <>
      <main className={styles.contents}>
        <div className={styles.metadata}>
          <img
            src={thumbnail}
            alt='thumbnail'
            className={styles.thumbnail}
            onError={handleImgError}
          />
          <div className={styles.movieInfo}>
            <h1 className={styles.title}>{title}</h1>
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
        <div className={styles.synopsis}>
          <h3>Synopsis</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </main>
      <button className={styles.back} onClick={() => navigate(-1)}>
        <i className='fa-solid fa-arrow-left-long'></i>
        &nbsp;back
      </button>
    </>
  );
};

export default MovieDetail;
