import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const { id, title, director, metascore, stars } = props.movie;

  return (
    <div className="save-wrapper">
      <Link to={`/movies/${id}`}>
        <div className="movie-card">
          <h2>{title}</h2>
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
        <div className="save-button">Save</div>
      </Link>
    </div>
  );
};

export default MovieCard;
