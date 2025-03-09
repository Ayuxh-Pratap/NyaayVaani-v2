"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Add this interface near the top of the file, after the imports
interface Step {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    demo: "voice-input" | "processing" | "document";
}

const Step = ({ step, index }: { step: Step; index: number }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <motion.div
            key={step.id}
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative"
        >
            {/* Step Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 relative z-10">
                <div className="bg-deep-blue/5 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {step.icon}
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-2">
                    {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                    {step.description}
                </p>

                {/* Interactive Demo Area */}
                <div className="bg-gray-50 rounded-lg p-4 h-32 flex items-center justify-center">
                    {step.demo === "voice-input" && (
                        <div className="flex items-center space-x-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 bg-orange-400 rounded-full"
                                    initial={{ height: "15px" }}
                                    animate={{
                                        height: ["15px", "45px", "15px"],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {step.demo === "processing" && (
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full"
                        />
                    )}

                    {step.demo === "document" && (
                        <motion.div
                            className="w-full max-w-[200px] space-y-2"
                            initial={{ opacity: 0.5 }}
                            animate={{
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="h-1 bg-orange-400 rounded w-full" />
                            <div className="h-1 bg-orange-400 rounded w-2/3" />
                            <div className="h-1 bg-orange-400 rounded w-3/4" />
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Step Number */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 text-white rounded-full flex items-center justify-center font-bold">
                {step.id}
            </div>
        </motion.div>
    );
};

const HowItWorks = () => {
    const steps: Step[] = [
        {
            id: 1,
            title: "Speak Naturally",
            description: "Simply speak in your preferred language. Our system understands 22+ Indian languages and regional dialects.",
            icon: (
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-deep-blue to-orange-400 opacity-20 rounded-full" />
                    <svg className="w-full h-full text-deep-blue" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" fill="currentColor" opacity="0.2" />
                        <path d="M19 10v2a7 7 0 01-14 0v-2M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 19v4M8 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            ),
            demo: "voice-input"
        },
        {
            id: 2,
            title: "Smart Processing",
            description: "Advanced AI processes your speech, understanding context and legal requirements automatically.",
            icon: (
                <div className="relative w-12 h-12">

                    <div className="absolute inset-0 bg-gradient-to-br from-deep-blue to-orange-400 opacity-20 rounded-full" />

                    <svg className="w-full h-full text-deep-blue" viewBox="0 0 24 24" fill="none">

                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                    </svg>

                </div>
            ),
            demo: "processing"
        },
        {
            id: 3,
            title: "Document Generation",
            description: "Your speech is transformed into professionally formatted, court-valid legal documents with the help of AI.",
            icon: (
                <div className="relative w-12 h-12">

                    <div className="absolute inset-0 bg-gradient-to-br from-deep-blue to-orange-400 opacity-20 rounded-full" />

                    <svg className="w-full h-full text-deep-blue" viewBox="0 0 24 24" fill="none">

                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                    </svg>

                </div>
            ),
            demo: "document"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-deep-blue mb-4">
                        How NyaayVaani Empowers You
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transform the way you handle legal documentation with our voice-powered platform.
                        Simple, accurate, and designed for everyone.
                    </p>
                </motion.div>

                {/* Process Flow */}
                <div className="relative mb-12">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-deep-blue/20 via-orange-400/20 to-deep-blue/20 transform -translate-y-1/2 hidden lg:block" />

                    {/* Steps */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                        {steps.map((step, index) => (
                            <Step key={step.id} step={step} index={index} />
                        ))}
                    </div>
                </div>

                {/* Benefits Grid */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => {
                        const [ref, inView] = useInView({
                            threshold: 0.2,
                            triggerOnce: true
                        });

                        return (
                            <motion.div
                                key={benefit.title}
                                ref={ref}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="text-3xl mb-4">{benefit.icon}</div>
                                <h3 className="text-lg font-semibold text-deep-blue mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div> */}
            </div>
        </section>
    );
};

export default HowItWorks; 