import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/Moviecard/Moviecard';

const Watchlist = () => {
  const { items } = useSelector((state) => state.watchlist);

  if (items.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', color: '#888' }}>
        <h2>Your watchlist is empty </h2>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {items.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Watchlist;
