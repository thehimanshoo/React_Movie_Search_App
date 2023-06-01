import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "../../Styled-Components/Styled_Components";
import "./MoviesList.css";
import * as moviesReducer from "../../redux/movies/movies.reducer";
import * as moviesAction from "../../redux/movies/movies.action";
import { Link } from "react-router-dom";
import WatchList from "../Watchlist/WatchList";

const MoviesList =(props)=>{

    let dispatch = useDispatch()

    let foundMovie = useSelector(state =>  state[moviesReducer.MOVIES_FEATURE_KEY])
    let {moviesData} =  foundMovie
    let movieDetails = moviesData.Search || [] ;


    let addToWatchList = (movie) => {
      dispatch(moviesAction.addWatchList(movie));
    }


    // let [settings ,setSettings]=useState({
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 3000,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 2100,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 1550,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2,
    //                 dots: true,
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 dots: true
    //             }
    //         }
    //     ]
    // });

    return (
        <React.Fragment>
           <section className="bg-light mt-0 w-100">
               <div className=" mt-3 bg-light">
               <div  className="notable_article">
               {
                movieDetails.length > 0 && 
               <span className="text-dark movieName text-teal"> {`Showing all results for ${props.searchName}`}</span>
                
                
               }
            </div>
                    <div className="row">
                        {
                             movieDetails.map(each_movie => {
                                    return(
                                        <div className="col-md-3 m-auto card_handler">
                                            <div className="card flex-center card_design">
                                               <div className="card-header cardheader">
                                                <Link to={"/"}>
                                                <img src={each_movie.Poster} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="card-body bg-light font-weight-bold">
                                                <span className="movieTitle">{`${each_movie.Title}`}</span> <br/>
                                                <span className="year text-primary">{`Year:${each_movie.Year}`}</span>
                                            </div>
                                                <div>
                                                <Link className="btn btn-warning btn-large" onClick={addToWatchList.bind(this,each_movie)}> Add to Watch List</Link>
                                                </div>  
                                            </div>
                                    </div>
                                    )
                                })
                            }
                    </div>
               </div>
           </section>

           <section>
            <WatchList/>
           </section>
        </React.Fragment>
    )
};

export default MoviesList;