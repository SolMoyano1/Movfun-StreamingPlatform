import '../styles/login.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Login(){

    const navigate= useNavigate();

    const handleSubmit = (e) =>{
       
        e.preventDefault();
        const emailValue= e.target.email.value;
        const passwordValue= e.target.password.value;
        const verifyEmail= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
       
        //check that the fields are filled
        if(emailValue === '' || passwordValue === ''){
            alert('You must fill all the fields');
        }
        //verify Email
        else if(emailValue !== '' && !verifyEmail.test(emailValue)){
            alert('You must enter a valid email');
        }

        else{            
            const urlApi= 'http://localhost:4010/usuarios';
            
            axios.get(urlApi, {params:{email: emailValue, password:passwordValue}})
                .then(resolve =>{
                    console.log(resolve.data);
                    return resolve.data;
                })
                .then( resolve=>{
                    if(resolve.length > 0){
                        const userToken= resolve[0].token;
                        console.log(userToken);
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

    let tokenIsInStorage = sessionStorage.getItem('userToken');
    console.log(tokenIsInStorage)


    return(
        <div>
            {tokenIsInStorage && <Navigate to='/Home'/>}

            <form onSubmit={handleSubmit}>

                <label>Email:</label><br/>
                <input type='text' name='email' placeholder='Username' className='loginInputs'/><br/>
                
                <label>Password:</label><br/>
                <input type='password' name='password' placeholder='Password' className='loginInputs'/><br/>
                
                <button type='submit' className='loginBtn'>LogIn</button>
            </form>
        </div>
        
    )
}

export default Login;

