import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";
import Spinner from "./components/Spinner";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

  const fetchMovies = async (query = "") => {
    setisLoading(true);
    setErrorMessage("");

    try {
      // Shape the fetch
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      };

      // Attempt to fetch response object
      const response = await fetch(endpoint, options);

      // Guard clause response not being okay
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      // Attempt to parse response to json so we can use it
      const data = await response.json();

      // Guard clause the parsing going wrong
      if (data.Response === "False") {
        setMovieList([]);
        setErrorMessage(data.Error || "Failed to parse movies response object");
        return;
      }

      setMovieList(data.results || []);

      setisLoading(false);
    } catch (error) {
      console.log(`Error fetching movies ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>

          <img src="./hero.png" alt="Hero Banner" />
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>

          {isLoading ? (
            <Spinner></Spinner>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>

        <h1>{searchTerm}</h1>
      </div>
    </main>
  );
};

export default App;
