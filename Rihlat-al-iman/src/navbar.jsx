import logo from './assets/logo.jpg';
import { useState } from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';
export default function NavBar() {
    const customGreen = "#464b37";

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-50" style={{ backgroundColor: customGreen }}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-10 rounded-full" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold font-mono whitespace-nowrap dark:text-white">رحلة الإيمان</span>
                </Link>
                <button 
                    onClick={toggleMenu}
                    data-collapse-toggle="navbar-default" 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  dark:text-amber-200 dark:active:bg-gray-700" 
                    aria-controls="navbar-default" 
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link to="/" className="block py-2 px-3 focus:text-amber-200 active:**: text-white active:text-amber-200" aria-current="page">Home</Link>
                        </li> 
                        <li>
                        <Link to="/about" className="block py-2 px-3 focus:text-amber-200 text-white active:text-amber-200" aria-current="page">About</Link>
                        </li> 
                        <li>
                        <Link to="/developer" className="block py-2 px-3 focus:text-amber-200 text-white active:text-amber-200" aria-current="page">Developers</Link>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>
    );
}