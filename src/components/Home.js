import { useEffect } from 'react';
import '../styles/home.css';
import Navbar from './Navbar';

import { Navigate, Link } from "react-router-dom";
import axios from 'axios';

function Home(){


    return(
        <div>

            <Navbar/>

            <div className='homeDiv'>

                <section>
                <Link to={'/ComedyMovies'} > Comedy </Link> 
                </section>
                
                <section>
                    <Link to={'/RomanceMovies'} > Romance </Link> 
                </section>
                
                <section>
                    <Link to={'/DramaMovies'}>Drama</Link>
                </section>
                
                <section>
                    <Link to={'/ThrillerMovies'}>Thriller</Link>
                </section>

                <section>
                    <Link to={'/ActionMovies'}>Action</Link>
                </section>

            </div>
            
            
        </div>
    )
}

export default Home;