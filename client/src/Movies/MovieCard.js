import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const { id, title, director, metascore, stars } = props.movie;

  const saveMovie = (movie) => {
    props.addToSavedList(movie)
  }

  return (
    <div className="save-wrapper">
      
      <div className="movie-card">
        <Link to={`/movies/${id}`}>
          <h2>{title}</h2>
        </Link>
        
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>

        <h3>Actors</h3>
          {(!stars)
            ? <div>Loading Stars...</div> 
            : stars.map(star => (
              <div key={star} className="movie-star">
                {star}
              </div>
          ))}      
      </div>
      <div className="save-button" onClick={() => saveMovie(props.movie)}>Save</div>
    </div>
  );
};

export default MovieCard;
