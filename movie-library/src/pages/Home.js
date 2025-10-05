import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies } from '../store/slices/movieSlice';
import MovieCard from '../components/Moviecard/Moviecard';

const Home = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  if (loading)
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <div className="spinner"></div>
      </div>
    );

  if (error)
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>
        {error}
      </div>
    );

  return (
    <div className="movie-grid">
      {console.log("Movie List:", list)}
      {list.map((movie) => (
        <div>
        <MovieCard key={movie.id} movie={movie} />
        </div>
      ))}
      
    </div>
  );
};

export default Home;
