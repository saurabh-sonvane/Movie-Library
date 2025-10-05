import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../../store/slices/watchlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.watchlist);
  const isInWatchlist = items.some((item) => item.id === movie.id);

  const handleWatchlist = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(movie.id));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <button
          className={`watchlist-btn ${isInWatchlist ? "remove" : "add"}`}
          onClick={handleWatchlist}
        >
          {isInWatchlist ? <FaHeart /> : <FaRegHeart />}
          <span>{isInWatchlist ? "Remove" : "Add"}</span>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
