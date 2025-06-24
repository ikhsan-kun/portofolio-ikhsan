import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => setIsOpen(false);

    return (
        <nav className="bg-white/90 backdrop-blur-md w-full z-20 shadow-md fixed top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 text-2xl font-extrabold text-blue-700 tracking-tight">
                        Ikhsan
                    </div>
                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-blue-700 font-semibold transition">Home</a>
                        <a href="#about" className="text-gray-700 hover:text-blue-700 font-semibold transition">About</a>
                        <a href="#skills" className="text-gray-700 hover:text-blue-700 font-semibold transition">My Skill</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-700 font-semibold transition">Contact</a>
                    </div>
                    {/* Hamburger icon */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-700 hover:text-blue-700 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 shadow-md">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#home" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-blue-700 transition">Home</a>
                        <a href="#about" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-blue-700 transition">About</a>
                        <a href="#skills" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-blue-700 transition">My Skill</a>
                        <a href="#contact" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-blue-700 transition">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;