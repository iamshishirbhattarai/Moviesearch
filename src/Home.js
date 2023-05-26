import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
const Home = () => {
  return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container top">
        <a className="navbar-brand navbrand " href="/">MOVIESEARCH </a>
       
        <div className="justify-content-end">
          <form className="form-inline my-2 my-lg-0 search-box" >
            <input className="form-control mr-sm-2  " type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary my-2 my-sm-0" type="submit" >Search</button>
          </form>
        </div>
      </div>
    </nav>
   </div>
  );
};

export default Home;
