import '../styles/logout.css';
import Navbar from "./Navbar";
import { Navigate, useNavigate } from "react-router-dom";

function Logout(){

    let navigate= useNavigate();

    // clear session storage and redirect user to the Login
    const userLoggedOut = ()=>{
        sessionStorage.removeItem('userToken');
        navigate('/');
    };

    // redirect user to the Home section
    const userWentBack = ()=>{
        navigate('/Home');
    };

    // check if token is saved to protect the route. If it is not, redirect the user to the Login
    let tokenIsInStorage = sessionStorage.getItem('userToken');

    return(
        <div className='mainDiv'>

            {!tokenIsInStorage && <Navigate to='/'/>}
            
            <Navbar/>

            <div className='logOutDivContainer'>   
                <h1 className='logOutTitle'>Are you sure you want to log out?</h1>

                <button onClick={userLoggedOut} type='submit' className='logOutBtn'>Yes, log out</button>

                <button onClick={userWentBack} type='submit' className='logOutBtn'>No, go back</button>         
            </div>
            
        </div>
    );
};
export default Logout;