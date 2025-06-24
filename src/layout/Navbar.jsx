import React, { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => setIsOpen(false);

    return (
        <nav className="bg-white w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 text-xl font-bold text-gray-800">
                        Ikhsan
                    </div>
                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                        <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
                        <a href="#skills" className="text-gray-700 hover:text-blue-600 font-medium">My Skill</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
                    </div>
                    {/* Hamburger icon */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#home" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Home</a>
                        <a href="#about" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">About</a>
                        <a href="#skills" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">My Skill</a>
                        <a href="#contact" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;