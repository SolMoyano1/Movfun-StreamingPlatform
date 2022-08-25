import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){

    return(
        <header>
            <nav className='navbar'>
                <ul className='ulNavbar'>
                    <h1 className='movfun'>Movfun</h1>
                    <li className='sections'><Link to='/Home' className='linksNames'>Home</Link></li>
                    <li className='sections'><Link to='/Logout' className='linksNames'>LogOut</Link></li>                   
                </ul>
            </nav>

        </header>
    )
}

export default Navbar;