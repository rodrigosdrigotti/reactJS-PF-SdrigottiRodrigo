import { useRef } from 'react'
import { FaBars, FaTimes,  } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { SlUser } from 'react-icons/sl'

export function NavBar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header className='container'>
            <div className='nav_brand'>
                <a className='' href="#">Mi Marca</a>
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
                    <a href="#"><SlUser size={'1.3em'}/></a>
                    <a href="#"><HiOutlineShoppingBag size={'1.3em'}/></a>
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
