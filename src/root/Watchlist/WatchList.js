import React, { useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import * as movieAction from '../../redux/movies/movies.action'
import * as movieReduce from '../../redux/movies/movies.reducer'
import "../../root/home/MoviesList.css";

let WatchList = () =>{

    let [settings] = useState({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    let watchlist = useSelector(state => state[movieReduce.MOVIES_FEATURE_KEY])
    let {watchList} = watchlist
    let dispatch = useDispatch();
    useEffect(() => {
      dispatch(movieAction.getWatchList());
    }, [])

    return(
        <React.Fragment>
            <Slider {...settings}>
            <div className='row'>
                {
                    watchList.length > 0 && watchList.map(each_movie => {
                        return(
                            <div className="col">
                                <div className="card flex-center">
                                   <div className="card-header">
                                    <Link to={"/"}>
                                    <img src={each_movie.Poster} alt=""/>
                                    </Link>
                                </div>
                                <div className="card-body bg-light font-weight-bold">
                                    <span className="movieTitle">{`${each_movie.Title}`}</span> <br/>
                                    <span className="year text-primary">{`Year:${each_movie.Year}`}</span>
                                </div>  
                                </div>
                        </div>
                        )
                    })
                }
            </div>
            </Slider> 

            <div className='mt-5'>
                <div className='nav'>
                    <div className='navbar-nav'>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WatchList