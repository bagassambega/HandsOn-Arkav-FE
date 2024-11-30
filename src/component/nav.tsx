import { useState } from 'react';
import Logo from '/logo-arkavidia.webp';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="nav fixed z-10 bg-white w-4/5 left-0 right-0 filter pl-12 pr-8 lg:px-16 mx-auto mt-4 py-4 h-20 lg:h-24 items-center border-solid border-2 border-black rounded-full flex">
            <div className="nav-left">
                <a href="/">
                    <img src={Logo} alt="Arkavidia" className="w-auto h-12" />
                </a>
            </div>
            <div className="nav-right ml-auto lg:flex flex-row gap-10 items-center md:hidden sm:hidden">
                <a href="/" className="nav-link hover:text-gray-700">
                    Home
                </a>
                <div className="relative group">
                    <a href="/events" className="nav-link hover:text-gray-700">
                        Event
                    </a>
                    <div className="absolute left-0  bg-white shadow-lg rounded-md p-2 hidden group-hover:block">
                        <a href="/events/cp" className="block px-4 py-2 hover:bg-gray-200 rounded-md">
                            CP
                        </a>
                        <a href="/events/ctf" className="block px-4 py-2 hover:bg-gray-200 rounded-md">
                            CTF
                        </a>
                        <a href="/events/ds" className="block px-4 py-2 hover:bg-gray-200 rounded-md">
                            DS
                        </a>
                    </div>
                </div>
                <div className="relative group">
                    <a href="/competition" className="nav-link hover:text-gray-700">
                        Competition
                    </a>
                    <div className="absolute left-0  bg-white shadow-lg rounded-md p-2 hidden group-hover:block">
                        <a href="/competition/cp" className="block px-4 py-2 hover:bg-gray-200 rounded-md">
                            CP
                        </a>
                        <a href="/competition/ctf" className="block px-4 py-2 hover:bg-gray-200 rounded-md">
                            CTF
                        </a>
                        <a href="/competition/ds" className="block px-4 py-2 hover:bg-gray-200 rounded-md">
                            DS
                        </a>
                    </div>
                </div>
                <a href="/login" className="border-2 border-black rounded-md p-2 hover:text-gray-700 hover:border-gray-700">
                    Sign In | Sign Up
                </a>
            </div>
            <button
                className="md:hidden ml-auto"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                    />
                </svg>
            </button>
            {isMenuOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-20 flex flex-col items-center justify-center space-y-6">
                    <a href="/" className="text-gray-800 hover:text-gray-700">
                        Home
                    </a>
                    <a href="/events" className="text-gray-800 hover:text-gray-700">
                        Event
                    </a>
                    <a href="/competition" className="text-gray-800 hover:text-gray-700">
                        Competition
                    </a>
                    <a href="/login" className="border-2 border-black rounded-md p-2 hover:text-gray-700 hover:border-gray-700">
                        Sign In | Sign Up
                    </a>
                    <button
                        onClick={toggleMenu}
                        >X</button>
                </div>
            )}
        </div>
    );
};

export default Nav;