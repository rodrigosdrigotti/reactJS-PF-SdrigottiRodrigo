import { useRef, useContext, useState } from 'react'
import { FaBars, FaTimes,  } from 'react-icons/fa';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from './logoSB.png';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from "../../context/CartContext";
import { Alert } from '../Alert/Alert';
import './NavBar.css';

export function NavBar() {
    const navigate = useNavigate();
    const navRef = useRef();
    const { currentUser, logout } = useContext(AuthContext);
    const [error, setError] = useState('');
    const { clearCart } = useContext(CartContext);

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const handleLogout = async () => {
        setError('');
        try {
            await logout();  
            clearCart();
            navigate("/login");  
        } catch (error) {
            setError('Falló cerrar sesión');
        }
    }

    return (
        <>
        { currentUser && 
            <header className='container'>
                <div className='nav_brand'>
                    <NavLink to='/'><img src={ logo } alt={'logoSB'} /></NavLink>
                </div>
                <nav ref={navRef} className='nav'>
                    <ul className='nav_list'>
                        <li className='nav_page'>
                            <NavLink to='/'>Productos</NavLink>
                        </li>
                        <li className='nav_page'>
                            <NavLink to='/categoria/indumentaria'>Indumentaria</NavLink>
                        </li>
                        <li className='nav_page'>
                            <NavLink to='/categoria/equipamiento'>Equipamiento</NavLink>
                        </li>
                    </ul>
                    <div className='nav-icons'>
                        {<Alert error={error} />}
                        <div className='nav-icon-user'>
                            {currentUser.email}
                            <button className='btn-nav-icon-user' onClick={handleLogout}>Logout</button>
                        </div>
                        <Link className='carrito' to="/cart"><CartWidget /></Link>
                    </div>
                    <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className='nav-btn' onClick={showNavBar}>
                    <FaBars />
                </button>
            </header>
        }
        </>
    )
}
