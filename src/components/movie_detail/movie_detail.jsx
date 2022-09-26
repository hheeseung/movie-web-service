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
  cast,
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
            <h2 className={styles.title}>{title}</h2>
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
        <div className={styles.casts}>
          <h3>Cast</h3>
          <div className={styles.cast}>
            {cast
              ? cast.map((c) => (
                  <div key={c.name} className={styles.cast__info}>
                    <img
                      src={
                        c.url_small_image
                          ? c.url_small_image
                          : '/images/no-image-available-cast.jpg'
                      }
                      alt='cast'
                      className={styles.cast__image}
                    />
                    <p className={styles.cast__name}>{c.name}</p>
                  </div>
                ))
              : 'No Information'}
          </div>
        </div>
        <div className={styles.synopsis}>
          <h3>Synopsis</h3>
          {description ? (
            <p className={styles.description}>{description}</p>
          ) : (
            'No Information'
          )}
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
