import '../styles/home.css';
import Navbar from './Navbar';
import { Navigate, Link } from "react-router-dom";

function Home(){

    // check if token is saved to protect the route. If it is not, redirect the user to the Login
    let tokenIsInStorage= sessionStorage.getItem('userToken');

    return(
        <div className='mainDiv'>

            {!tokenIsInStorage && <Navigate to='/'/>}

            <Navbar/>
            
            <h1 className='homeTitle'>What genre of movie would you like to watch?</h1>

            <div className='homeDivContainer'>

                <Link to={'/ComedyMovies'} className='eachLink'>
                    <div className='homeLinks'>
                        <img src={'https://image.tmdb.org/t/p/w500//zmXaK4ajfTUOeb8K13uQ4fNfE8L.jpg'} alt='Comedy Poster' className='homeMoviesPosters'/>
                        <p className='homeLinksNames'>Comedy</p> 
                    </div>                 
                </Link> 
            
                <Link to={'/RomanceMovies'} className='eachLink'> 
                    <div className='homeLinks'>
                        <img src={'https://image.tmdb.org/t/p/w500//Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg'} alt='Romance Poster' className='homeMoviesPosters'/>
                        <p className='homeLinksNames'>Romance</p> 
                    </div>
                </Link> 

                <Link to={'/DramaMovies'} className='eachLink'>
                    <div className='homeLinks'>
                        <img src={'https://image.tmdb.org/t/p/w500//bMgq7VBriuBFknXEe9E9pVBYGZq.jpg'} alt='Drama Poster' className='homeMoviesPosters'/>
                        <p className='homeLinksNames'>Drama</p> 
                    </div>
                </Link>

                <Link to={'/ThrillerMovies'} className='eachLink penultimateLink'>
                    <div className='homeLinks'>
                        <img src={'https://image.tmdb.org/t/p/w500//lr11mCT85T1JanlgjMuhs9nMht4.jpg'} alt='Thriller Poster' className='homeMoviesPosters'/>
                        <p className='homeLinksNames'>Thriller</p> 
                    </div>
                </Link>
    
                <Link to={'/ActionMovies'} className='eachLink lastLink'>
                    <div className='homeLinks'>
                        <img src={'https://image.tmdb.org/t/p/w500//wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg'} alt='Action Poster' className='homeMoviesPosters'/>
                        <p className='homeLinksNames'>Action</p> 
                    </div>
                </Link>

            </div>
        </div>
    );
};
export default Home;