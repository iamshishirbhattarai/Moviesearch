  import React from 'react'
  import './App.css';
  import Home from './Home'
  import 'bootstrap/dist/css/bootstrap.css';
  import { useState } from 'react';
  import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
  import MovieList from './MovieList';
  import { NavbarBrand } from 'react-bootstrap';
  import { useEffect } from 'react';

  const App = () => {
    const defaultValue= [
    
      {
          "Title": "Christmas Bloody Christmas",
          "Year": "2022",
          "imdbID": "tt22042742",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOTRmMDc4ZDAtOTJiNS00YTQ4LWJkM2MtMTQxMDEwNzMyN2MwXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg"
      },
      {
          "Title": "The Christmas Card",
          "Year": "2006",
          "imdbID": "tt0783494",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTU1NzU3NTA3OF5BMl5BanBnXkFtZTcwOTY3OTQ1MQ@@._V1_SX300.jpg"
      },
      {
          "Title": "Merry Christmas, Drake & Josh",
          "Year": "2008",
          "imdbID": "tt1249300",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMDYyNDRlNTctOGUyOC00Yzc1LWE2OTctYmE0ZDBmMzNlYTYzXkEyXkFqcGdeQXVyMjYzMjA3NzI@._V1_SX300.jpg"
      },
      {
          "Title": "The Nine Lives of Christmas",
          "Year": "2014",
          "imdbID": "tt3889642",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMmE0NDEzOGMtMjZhYS00YTY0LWEzMzQtNTA2MTVkZDNlZGU4XkEyXkFqcGdeQXVyNjg5MzE4NTA@._V1_SX300.jpg"
      },
      {
        "Title": "Hum Log",
        "Year": "1951",
        "imdbID": "tt0331261",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTY0YThkZDItZGI3Ny00ZDc4LWJhM2MtOTVjYWFjZWE2MzIyXkEyXkFqcGdeQXVyNTg2NDk1Mjk@._V1_SX300.jpg"
    },
      {
          "Title": "One Magic Christmas",
          "Year": "1985",
          "imdbID": "tt0089731",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOGE0NWRkNTUtMTliMi00OGY4LWFhODUtYzUzZTVmYWRkZmYzXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"
      },
      {
          "Title": "Christmas in South Park",
          "Year": "2000",
          "imdbID": "tt0263206",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYjE0NmZjMjgtZmJjOS00NTU0LWJlYzgtZjExNGUzZGVmNzRlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
          "Title": "Christmas Cupid",
          "Year": "2010",
          "imdbID": "tt1699746",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZWFkMzM5YTctY2Y1YS00MzhlLTg4MjktYmJhYTkxNTk5OTNiL2ltYWdlXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg"
      },
      {
        "Title": "Hum Do Anjaane",
        "Year": "2011",
        "imdbID": "tt2035528",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzFhYTJiNWItYTY1Zi00NmE5LWE3ZTAtNGRlNWJjZjJmZWNmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },


  ];
    const [movie, setMovie] = useState([ ]);
  const [searchValue, setSearchValue]= useState('');
  
  const getMovieRequest= async()=>{
    if (searchValue.trim() === '') {
      setMovie(defaultValue);
    } else {
    const url= `http://www.omdbapi.com/?s=${searchValue}&i=tt3896198&apikey=9ad8f5b5`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson.Response === 'True') {
        setMovie(responseJson.Search);
      } else {
        setMovie([]);
      }
    } catch (error) {
      console.log('Error:', error);
      setMovie([]);
    }
  }
  } 
  useEffect(()=>{
      getMovieRequest();
  },[searchValue]);
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark top">
          <a className='navbar-brand custom-brand' href="\" > MOVIESEARCH </a>
            <form className='form-inline my-lg-0 search-box'>
              <input type="text" className="form-control" arial-label="Search Movie"
                    value={searchValue}
                    onChange={
                    (e)=>{ setSearchValue(e.target.value);}
                  }/>
              <button type="submit"
              className="btn btn-primary "> Search </button>
              </form> 

        </nav>
      {<MovieList movies= {movie}/> }
        </div>

  
    )
  }

  export default App