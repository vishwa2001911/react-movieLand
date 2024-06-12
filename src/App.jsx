import { useState, useEffect } from 'react';
import './App.css'
import MovieCard from './components/MovieCard';


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=36b95973"

  const searchMovies = async (title) => {
    const response = await fetch(API_URL+"&s="+title);
    const data = await response.json();
    setMovies(data.Search);
  }

  const movie1 = {
      "Title": "Superman/Batman: Apocalypse",
      "Year": "2010",
      "imdbID": "tt1673430",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }
  


  useEffect(()=>{
    searchMovies("Superman")
  },[])
 

  return (
    <>
      <div className="app">

        <h1>Movie Land</h1>
      
        <div className="search">
          <input type="text" 
            placeholder='Search for movies'
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
          />
          <img src="https://www.svgrepo.com/show/89385/search.svg" 
          alt="Search"
          onClick={()=> searchMovies(searchTerm)}  
          />
        </div>

        
            {movies.length>0 ? (
              <div className="container">
                  {movies.map((i,index)=> <MovieCard key={index} movie={i} /> )}
              </div>
            ): (
              <div className="empty">
                  <h2>No Movise Found.</h2>
              </div>
            )}
        

      </div>
    </>
  )
}

export default App
