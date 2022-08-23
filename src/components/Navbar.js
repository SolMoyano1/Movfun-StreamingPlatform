import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){

    return(
        <header>
            <nav className='navbar'>
                <ul className=''>
                    <li className='sections'>
                        <Link to='/Contact' className='linksNames'>Contact Us</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar;