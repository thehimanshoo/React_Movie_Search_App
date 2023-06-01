import React from "react" 
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as moviesAction from '../../redux/movies/movies.action'
import * as moviesReducer from '../../redux/movies/movies.reducer'
import MoviesList from "./MoviesList";


let Home2 = () => {
    let dispatch = useDispatch();
    let foundMovie = useSelector(state =>  state[moviesReducer.MOVIES_FEATURE_KEY])
    let {moviesData} =  foundMovie


let [movieName , setMovieName] = useState({
    searchMovie : ''
})

let handleSeach = (event) => {
    setMovieName({
    ...movieName ,
    searchMovie : event.target.value,
 })
}

let searchMovie = (event) => {
    event.preventDefault()
dispatch(moviesAction.searchMovies(movieName.searchMovie))
}

    return(
        <React.Fragment>
            

  <section className="d-flex justify-content-center m-auto">
                <nav className="navbar navbar-expand-lg navbar-light searchBar">
                    <div className="main_wrapper m-auto w-100">
                    <div className="container_fluid">
                        <a className="navbar-brand font-bold text-primary " href="#">Movies4U</a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                            <div className="input-group d-flex algn-item-center justfy-content-center">
                                <div id="navbar-search-autocomplete" className="form-outline w-75  d-flex">
                                    <input type="search" id="form1" className="form-control p-4" placeholder="Search Movies" onChange={handleSeach}/>
                                    <button type="button" className="btn btn-primary" onClick={searchMovie}>
                                    <i className="fas fa-search"></i>
                                   </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                </nav>
            </section>

            <section>

            <MoviesList searchName={movieName.searchMovie}/>
      
       </section>

        </React.Fragment>
    )
}

export default Home2;