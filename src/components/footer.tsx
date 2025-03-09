"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' },
        { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
        { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
        { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
        { name: 'Youtube', icon: <Youtube className="w-5 h-5" />, href: '#' },
    ];

    return (
        <footer className="bg-[#1c1c1c] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {/* Newsletter Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 pr-12"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-400 hover:text-orange-300 transition-colors">
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Contact Us</h3>
                        <div className="space-y-4 text-gray-300">
                            <p className="flex items-center space-x-2">
                                <span>Email:</span>
                                <a href="mailto:info@nyaayvaani.com" className="hover:text-orange-400 transition-colors">
                                    info@nyaayvaani.com
                                </a>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>Address:</span>
                                <span>123 Legal Tech Park, Bangalore, India</span>
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white/10 p-2 rounded-full hover:bg-orange-400/20 transition-colors"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Logo and Copyright */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold italic"
                        >
                            NyaayVaani
                            <div className="text-sm font-normal text-gray-400 mt-1">
                                Voice of Justice
                            </div>
                        </motion.div>

                        {/* Copyright */}
                        <div className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} NyaayVaani. All rights reserved.
                        </div>
                    </div>
                </div>

                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Grid Pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
                            backgroundSize: '4rem 4rem'
                        }}
                    />

                    {/* Decorative Circles */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-white/5 transform rotate-45" />
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full border border-orange-400/5 -rotate-12" />
                </div>
            </div>
        </footer>
    );
};

export default Footer; 