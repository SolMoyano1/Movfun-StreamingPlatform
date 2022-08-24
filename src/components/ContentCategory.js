import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/contentCategory.css'

function ContentCategory(){

    const [moviesArray, setMoviesArray] = useState([])
    let currentUrl=window.location.href;
    console.log(currentUrl);


    useEffect(()=>{
        const urlApiComedia= 'http://localhost:4020/movies';

        axios.get(urlApiComedia)
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
                console.log('Error: ' + error)
            });
    },[setMoviesArray]);

    console.log(moviesArray);
    

    return(
        <div className='contentCategoryDiv'>
           <div className='contentCategoryGrid'>
                {
                
                    moviesArray.map( (eachMovie, key) =>{
                        return(
                            <div className='moviesContainer' key={key}> 
                                <img src={`https://image.tmdb.org/t/p/w500/${eachMovie.poster_path}`} className='moviesPosters'/>
                            </div>
                        )
                    })
                }
                
            </div> 
        </div>
        
    )
}

export default ContentCategory;