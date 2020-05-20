import React from "react";
import styles from './ShowCard.module.css'
export default function ShowCard({tv}) {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${tv.poster_path}`}
        alt={tv.name + "poster"}
      />
      <div className="card--content">
        <h3 className={styles.cardTitle}>{tv.name}</h3>
        <h3 className={styles.cardSeasons}>{tv.season_number}</h3>
        <p className={styles.info}>
          <small>First Air Date: {tv.first_air_date}</small>
        </p>
        <p className={styles.info}>
          <small>RATING: {tv.vote_average}</small>
        </p>
        <p className={styles.info}>{tv.overview}</p>
      </div>
    </div>
  );
}
