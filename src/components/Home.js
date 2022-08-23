import { useEffect } from 'react';
import '../styles/home.css';
import Navbar from './Navbar';
function Home(){

    useEffect( ()=>{
        const urlApi='https://api.themoviedb.org/3/genre/movie/list?api_key=3cbf294e793f0a6ca68822022122050f&language=en-US'
    })
    return(
        <div>

            <Navbar/>

            <div className='homeDiv'>

                <section>
                    Comedy
                </section>
                
                <section>
                    Drama
                </section>
                
                <section>
                    Action
                </section>
                
                <section>
                    Romance
                </section>

                <section>
                    Thriller
                </section>

            </div>
            
            
        </div>
    )
}

export default Home;