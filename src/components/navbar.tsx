"use client";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 right-0 bg-white z-50">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 md:py-0 py-4 md:py-4">
                <div className="w-full md:w-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        <span className="text-black">Nyaay</span>
                        <span className="text-orange-500">Vaani</span>
                    </h1>
                    
                    {/* Hamburger Menu Button */}
                    <button 
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navigation Links */}
                <div 
                    className={`${
                        isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    } md:max-h-full md:opacity-100 overflow-hidden transition-all duration-500 ease-in-out flex flex-col md:flex-row items-end md:items-center gap-6 w-full md:w-auto mt-4 md:mt-0`}
                >
                    <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:pl-0 bg-orange-100 md:p-0 md:bg-transparent p-8 rounded-2xl">
                        <h1 className="cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-orange-500 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Home</h1>
                        <h1 className="cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-orange-500 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">About</h1>
                        <h1 className="cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-orange-500 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Contact</h1>

                        <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

