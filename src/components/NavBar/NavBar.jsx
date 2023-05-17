import { useRef } from 'react'
import './NavBar.css';
import { FaBars, FaTimes,  } from 'react-icons/fa';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import logo from './logoSB.png'


export function NavBar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
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
    )
}
