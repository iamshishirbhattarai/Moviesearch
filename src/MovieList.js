import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MovieList.css' ;

const MovieList = (props) => {
    if (!Array.isArray(props.movies)) {
        return <div>No movies to display.</div>;
      }
      else{
    return (
      <div className="container-fluid d-flex justify-content-center">
          <div className="row ">
        {props.movies.map((movie, index) => {
          return (
            <div className='col-md-3' key={index}>
                <div className="card border-success custom-card " >
              <img className="card-img-top" src={movie.Poster} alt={movie.title} />
              <div className="card-body">
              <h4 className='card-title'> <strong>Title:</strong> {movie.Title} </h4>
              <p className= 'card-text'> Year: {movie.Year} </p>              </div>
             
            </div>
            </div>
          );
        
        })}
      </div>
      </div>
    );}
    };
  

export default MovieList