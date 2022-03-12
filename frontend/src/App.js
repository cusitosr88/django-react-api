import React, { useState, useEffect } from 'react'
import './App.css';
import MovieList from './components/movie-list';
import MovieDetail from './components/movie-detail';

function App() {

  const [movies, setMovie] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token dcf3c583643e5da4d21e2ef236d75d56116998fc'
      }
    }
    )
    .then(resp => resp.json())
    .then(resp => setMovie(resp))
    .catch(e => console.log(e))
  }, [])

  const movieClicked = movie => {
    setSelectedMovie(movie)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className="layout">
          <div>
            <MovieList movies={movies} movieClicked={movieClicked}/>
          </div>
          <div>
            <MovieDetail movie={selectedMovie}/>
          </div>
        </div>
    </div>
  );
}

export default App;
