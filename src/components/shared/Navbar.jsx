
import { useState, useEffect } from 'react'
import codeimagifyLogo from '../../assets/codeimagify-logo.png' // Ensure this path is correct based on your project structure

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [dark, setDark] = useState(false)

    useEffect(() => {
        // Apply theme to document root for Tailwind dark mode
        if (dark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [dark])

    const handleLogoClick = (e) => {
        e.preventDefault()
        // placeholder for navigation - will be wired up later
        console.log('Logo clicked')
    }

    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left: Logo + Name */}
                    <div className="flex items-center">
                        <a href="#" onClick={handleLogoClick} className="flex items-center space-x-3">
                            {/*
                                Logo: place a file named `codeimagify-logo.png` (no spaces, lowercase) into your project's `public/` folder.
                                Vite serves files from `public/` at the root, so `/codeimagify-logo.png` will resolve correctly.
                            */}
                            {/* LOGO HERE */}
                            {/* <img
                                src={codeimagifyLogo}
                                alt="CodeImagify logo"
                                className="h-10 w-10 rounded-lg shadow-sm"
                            /> */}
                            <span className="text-xl font-bold text-gray-900 dark:text-white">CODEIMAGIFY</span>
                        </a>
                    </div>

                    {/* Desktop actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-[#ffffff] text-base font-medium shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out">Try for Free</a>
                        <button className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ease-in-out">Login</button>
                        <button className="px-5 py-2 rounded-full border border-blue-500 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out">Sign Up</button>

                        <button
                            onClick={() => setDark(prev => !prev)}
                            aria-label="Toggle dark mode"
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out">
                            {/* simple sun/moon svg */}
                            {dark ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h1M3 12H2m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile: menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMenuOpen(prev => !prev)} aria-expanded={menuOpen} aria-label="Open menu" className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out">
                            {menuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pb-3">
                    <div className="px-2 pt-2 space-y-1">
                        <a href="#" className="block w-full px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 ease-in-out text-center">Try for Free</a>
                        <a href="#" className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out text-center">Login</a>
                        <a href="#" className="block w-full px-3 py-2 rounded-md text-base font-medium text-blue-600 dark:text-blue-300 border border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out text-center">Sign Up</a>
                        <button onClick={() => setDark(prev => !prev)} className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out text-center">Toggle theme</button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
