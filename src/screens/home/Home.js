import React from 'react'
import Header from '../../common/header/Header_modal'
import './home.css';
import SingleLineGridList from '../../common/GridList';



export default function Home(){
    return(
        <div>
        <Header />
        <div className='upcoming'>Upcoming Movies</div>
        <SingleLineGridList />
       


        </div>
    )
}




