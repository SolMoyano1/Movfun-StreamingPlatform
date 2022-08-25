import '../styles/contentCategory.css'
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';



function ContentCategory(){

    const [moviesArray, setMoviesArray] = useState([]);

    let currentUrl=window.location.href;

    //get the API data according to the url
    useEffect(()=>{
        const urlApi= 'http://localhost:4020/movies';

        axios.get(urlApi)
            .then(resolve=>{
                if(currentUrl === 'http://localhost:3060/ComedyMovies'){
                    setMoviesArray(resolve.data[0].comedy);
                }
                else if(currentUrl === 'http://localhost:3060/RomanceMovies'){
                    setMoviesArray(resolve.data[0].romance);
                }
                else if(currentUrl === 'http://localhost:3060/ThrillerMovies'){
                    setMoviesArray(resolve.data[0].thriller);
                }
                else if(currentUrl === 'http://localhost:3060/DramaMovies'){
                    setMoviesArray(resolve.data[0].drama);
                }
                else{
                    setMoviesArray(resolve.data[0].action);
                }
            })
            
            .catch(error =>{
                console.log('Error: ' + error);
                alert('We are having trouble loading the page.');
            });
    },[setMoviesArray]);

    console.log(moviesArray);

    // check if token is saved to protect the routes. If it is not, redirect the user to the Login
    let tokenIsInStorage = sessionStorage.getItem('userToken')
    
    return(
        <div className='mainDiv'>
            {!tokenIsInStorage && <Navigate to='/'/>}

            <Navbar/>

            <div className='contentCategoryDivContainer'>
                
                <div className='contentCategoryGrid'>

                    {
                        moviesArray.map( (eachMovie, key) =>{
                            return(
                                <div className='moviesContainer' key={key}> 
                                    <Link to={`/Details?id=${eachMovie.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w500/${eachMovie.poster_path}`} alt='Movie Poster' className='moviesPosters'/>         
                                    </Link>
                                </div>
                            )
                        })
                    }
                        
                </div> 
            </div>
        </div>
    )
}
export default ContentCategory;