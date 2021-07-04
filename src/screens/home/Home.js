import React from 'react'
import Header from '../../common/header/Header';
import './home.css';
import UpComingMoviesList from '../../common/UpComingMoviesList';
import ShowingReleasedMovies from '../../common/ShowingReleasedMovies';


export default function Home(){
    return(
        <div>
        <Header />
        <div className='upcoming'>Upcoming Movies</div>
        <UpComingMoviesList />
        <ShowingReleasedMovies />
        
       


        </div>
    )
}




