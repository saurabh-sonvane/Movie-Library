import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchMovieByTitle } from "../../store/slices/movieSlice";
import "./Navbar.css";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      dispatch(searchMovieByTitle(query));
      navigate("/");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">🎬 Movie Library</div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>

      <input
        type="text"
        className="navbar-search"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
      />
    </nav>
  );
};

export default Navbar;
