import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}

    <div className="saved-list-buttons">
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
      <div className="clear-button" onClick={props.clearSavedList}>Clear</div>
    </div>
  </div>
);

export default SavedList;
