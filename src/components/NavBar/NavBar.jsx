import { useRef } from 'react'
import './NavBar.css';
import { FaBars, FaTimes,  } from 'react-icons/fa';
import CartWidget from '../CartWidget/CartWidget';
import logo from './logoSB.png'


export function NavBar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header className='container'>
            <div className='nav_brand'>
                <a href="#"><img src={ logo } alt={'logoSB'} /></a>
            </div>
            <nav ref={navRef} className='nav'>
                <ul className='nav_list'>
                    <li className='nav_page'>
                        <a href="#">Categoria 1</a>
                    </li>
                    <li className='nav_page'>
                        <a href="#">Categoria 2</a>
                    </li>
                    <li className='nav_page'>
                        <a href="#">Categoria 3</a>
                    </li>
                </ul>
                <div className='nav-icons'>
                    <CartWidget />
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
