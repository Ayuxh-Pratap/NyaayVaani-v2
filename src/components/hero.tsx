"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {

    const legalTerms = [
        { en: 'Affidavit', hi: 'शपथ पत्र' },
        { en: 'Petition', hi: 'याचिका' },
        { en: 'Witness', hi: 'गवाह' },
        { en: 'Evidence', hi: 'सबूत' }
    ];

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-orange-100">
                <div className='max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 md:pt-40 mt-14 overflow-hidden pb-32'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="flex-1  space-y-8">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Create Legal Documents
                                <span className="block text-orange-500">With Your Voice</span>
                            </h1>

                            <p className="text-gray-600 text-lg md:text-xl">
                                Transform your legal documentation process with voice commands.
                                Simply speak, and watch your documents fill themselves.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                    Start Recording
                                </button>
                                <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300">
                                    Learn More
                                </button>
                            </div>

                            <div className="flex items-center gap-8 pt-8">
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold">1000+</h3>
                                    <p className="text-gray-600">Documents</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold">50+</h3>
                                    <p className="text-gray-600">Templates</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold">24/7</h3>
                                    <p className="text-gray-600">Support</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Image/Illustration */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Main Interface Frame */}
                            <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-10">
                                {/* Before & After Transformation */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {/* Before - Complex Form */}
                                    <motion.div
                                        className="relative overflow-hidden rounded-lg bg-gray-50 p-4"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        <div className="text-xs text-gray-500 mb-2">Before</div>
                                        <div className="space-y-2">
                                            <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                                            <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                                        </div>
                                        <div className="absolute top-0 left-0 w-full h-full bg-red-500/10"></div>
                                    </motion.div>

                                    {/* After - Clean Document */}
                                    <motion.div
                                        className="relative overflow-hidden rounded-lg bg-gray-50 p-4"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                                    >
                                        <div className="text-xs text-gray-500 mb-2">After</div>
                                        <div className="space-y-2">
                                            <div className="h-2 bg-green-200 rounded w-3/4"></div>
                                            <div className="h-2 bg-green-200 rounded w-1/2"></div>
                                            <div className="h-2 bg-green-200 rounded w-2/3"></div>
                                        </div>
                                        <motion.div
                                            className="absolute bottom-2 right-2"
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                                            </svg>
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Voice Processing Visualization */}
                                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <motion.div
                                            className="flex items-center space-x-2"
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                            <span className="text-sm text-gray-600">Processing Voice Input</span>
                                        </motion.div>
                                    </div>

                                    {/* Voice Waves */}
                                    <div className="flex items-center justify-center space-x-1 h-12">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <motion.div
                                                key={i}
                                                className="w-1 rounded-full"
                                                animate={{
                                                    height: ["15px", "45px", "15px"],
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                    delay: i * 0.1,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Legal Terms Translation */}
                                <div className="grid grid-cols-2 gap-2">
                                    {legalTerms.map((term, index) => (
                                        <motion.div
                                            key={term.en}
                                            className="bg-gray-50 p-2 rounded-lg text-sm"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="text-gray-600">{term.en}</div>
                                            <div className="text-gray-600 font-medium">{term.hi}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Processing Stats */}
                                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                                    <motion.div
                                        className="bg-orange-400 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
                                        animate={{ x: [50, 0, 50] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                        98% Accuracy
                                    </motion.div>
                                </div>
                            </div>

                            {/* Background Decorative Elements */}
                            {/* <div className="absolute -right-4 -bottom-4 w-full h-full bg-orange-400 rounded-2xl ease-in-out duration-1000 transition-all -z-10 opacity-80"></div>
            <div className="absolute -left-4 -top-4 w-full h-full bg-deep-blue rounded-2xl ease-in-out duration-1000 transition-all -z-20 opacity-80"></div> */}
                        </motion.div>
                    </div>
                </div>
                <div className=" inset-0 opacity-[0.5] z-0"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
                        backgroundSize: '4rem 4rem'
                    }}
                />
            </div>
    );
}