import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../styles/contentDetails.css';
import Navbar from './Navbar';

function ContentDetails(){

    const [detail, setDetail]= useState('');

    //get the ID from the url
    const getQueryString = new URLSearchParams(window.location.search);
    const getId = getQueryString.get('id')
    
    //get API data
    useEffect(()=>{
        const urlApi= `http://localhost:4020/${getId}`;
        
        axios.get(urlApi)
            .then(resolve =>{
                setDetail(resolve.data[0]);             
            })

            .catch( error =>{
                console.log('Error:'+ error);
                alert('We are having trouble loading the page.');
            })

    },[getId])
    
    // check if token is saved to protect the routes. If it is not, redirect the user to the Login
    let tokenIsInStorage= sessionStorage.getItem('userToken');

    //button 'See more/Less' state
    const [btnOn, setBtnOn] = useState(true);

    const btnClicked = ()=>{
        setBtnOn(!btnOn)
    };

    return(
        <div className='mainDiv'>

            {!tokenIsInStorage && <Navigate to='/'/>}

            <Navbar/>

            <div className='contentDetailsDivContainer'>

                <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt='Movie Poster' className='moviePoster'/>
                
                
                <div className="divMovieData">
                    
                    <h1 className="movieName">{detail.title}</h1> 
                    <p className="movieInfoTitles">{detail.run_time}</p>
                    <p className="movieOverview">{detail.overview}</p>

                    <button onClick={btnClicked} className={`btn ${btnOn? 'more':'less'}`}></button>
                    
                    <aside className={`${ btnOn && 'hideContent'}`}>
                        
                        <h2 className='movieInfoTitles'>Genre:</h2>
                        <p className="movieInfo">{detail.genre}</p>
                        
                        <h2 className='movieInfoTitles'>Release date:</h2>
                        <p className="movieInfo">{detail.release_date}</p>
                        
                        <h2 className='movieInfoTitles'>Director:</h2>
                        <p className="movieInfo">{detail.director}</p>
                        
                        <h2 className='movieInfoTitles'>Producer:</h2>
                        <p className="movieInfo">{detail.producer}</p>
                        
                        <h2 className='movieInfoTitles'>Original language:</h2>
                        <p className="movieInfo">{detail.original_language}</p>
                        
                        <h2 className='movieInfoTitles'>Rating:</h2>
                        <p className="movieInfo">{detail.vote_average}</p>

                    </aside>


                </div>
            </div>
             
        </div>
    )
}

export default ContentDetails;