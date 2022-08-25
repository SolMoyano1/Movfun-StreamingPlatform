import '../styles/login.css';
import Navbar from './Navbar';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SiMaildotru } from 'react-icons/si';
import { AiFillLock } from 'react-icons/ai';


function Login(){

    const navigate= useNavigate();

    const handleSubmit = (e) =>{
       
        e.preventDefault();
        const emailValue= e.target.email.value;
        const passwordValue= e.target.password.value;
        const verifyEmail= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
       
        //check if the fields are filled
        if(emailValue === '' || passwordValue === ''){
            alert('You must fill all the fields');
        }
        //verify email
        else if(emailValue !== '' && !verifyEmail.test(emailValue)){
            alert('You must enter a valid email');
        }
        // get API data to check if the user is registered
        else{            
            const urlApi= 'http://localhost:4010/users';
            
            axios.get(urlApi, {params:{email: emailValue, password:passwordValue}})
                .then(resolve =>{
                    console.log(resolve.data);
                    return resolve.data;
                })
                .then( resolve=>{
                    if(resolve.length > 0){
                        const userToken= resolve[0].token;
                        console.log('token saved:' + userToken);
                        sessionStorage.setItem('userToken', userToken)
                        alert(`Welcome, ${resolve[0].name}`);
                        navigate('/Home');
                    }
                    
                    else{
                        alert('Unregistered email or wrong password');
                    }
                })

                .catch(error =>{
                    console.log('Error: ' + error);
                })
        }

    }
    // check if token is saved. If it is, redirect the user to the Home
    let tokenIsInStorage = sessionStorage.getItem('userToken');

    return(
        <div className='mainDiv'>
            {tokenIsInStorage && <Navigate to='/Home'/>}
            
            <Navbar/>
            <div className='loginDivContainer'>
                
                <h1 className='loginTitle'>Log in to watch your favorite movies!</h1>
                
                <form onSubmit={handleSubmit} className='formLogin'>

                    <label>
                        <SiMaildotru className='atSignSimbol'/>
                        <input type='text' name='email' placeholder='  Email' className='loginInputs'/><br/>
                    </label><br/>
                    
                    <label>
                        <AiFillLock className='atSignSimbol'/>
                        <input type='password' name='password' placeholder='  Password' className='loginInputs'/><br/>
                    </label><br/>
                    
                    <button type='submit' className='loginBtn'>Log In</button>
                </form>
            </div>
            
        </div>
        
    )
}

export default Login;

