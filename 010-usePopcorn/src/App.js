import { useState } from "react";
import {
  Navbar,
  Search,
  NumResults,
  Box,
  MovieList,
  WatchedSummary,
  WatchedMoviesList,
  MovieDetails,
  Loader,
  ErrorMessage,
} from "./components";
import { useMovies } from "./useMovies";

export default function App() {
  const [watched, setWatched] = useState([], "watched");

  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatch(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteMovie(id) {
    setWatched((movies) => movies.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <Navbar
        element={
          <>
            <Search query={query} setQuery={setQuery} />
            <NumResults movies={movies} />
          </>
        }
      />

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatch}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteMovie={handleDeleteMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}
