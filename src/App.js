import {useState, useEffect } from "react";
// affa7d76affa7d76

import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';
const API_URL= 'http://www.omdbapi.com/?i=tt3896198&apikey=affa7d76'; 

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }


  useEffect(() => {
      searchMovies('Avengers');
      }, []);
    

  return(
    <div className="app">
      <h1>MovieMania</h1>

      <div className="search">
        <input
        placeholder="Search For Movies"
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
        src= {searchIcon}
        alt= 'search'
        onClick={() => searchMovies(searchTerm)}
        />
      </div>

          {
            movies?.length > 0
            ? (
              <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
               </div>
           
            ): (
              <div className="empty">
                <h2>No Movies Found</h2>
              </div>
            )

          }

      </div>
    
  );
}

export default App;