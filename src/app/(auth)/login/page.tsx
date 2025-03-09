"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, MoveLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-orange-100 relative overflow-hidden">
            {/* Back to Home Button */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-4 left-4 z-20"
            >
                <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2"
                >
                    <MoveLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Back to Home</span>
                </Link>
            </motion.div>

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.5] z-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
                    backgroundSize: '4rem 4rem'
                }}
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Branding & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 text-center lg:text-left"
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold italic text-deep-blue mb-2">
                                NyaayVaani
                            </h1>
                            <p className="text-orange-500 text-xl">Voice of Justice</p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-gray-800">
                                Welcome Back to Legal Innovation
                            </h2>
                            <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
                                Access your account to create, manage, and transform legal documents with the power of voice and AI.
                            </p>
                        </div>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                                <div className="text-2xl font-bold text-orange-500 mb-1">22+</div>
                                <div className="text-gray-600">Languages Supported</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                                <div className="text-2xl font-bold text-orange-500 mb-1">98%</div>
                                <div className="text-gray-600">Accuracy Rate</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Login Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Main Form Card */}
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 relative z-10">
                            <h2 className="text-2xl font-bold text-deep-blue mb-6 text-center">Sign In to Your Account</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email Field */}
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email address"
                                        className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                                        required
                                    />
                                </div>

                                {/* Password Field */}
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors duration-300"
                                >
                                    Sign In
                                </button>

                                {/* Divider */}
                                <div className="relative my-8">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                {/* Google Sign In */}
                                <button
                                    type="button"
                                    className="w-full cursor-not-allowed flex items-center justify-center gap-3 bg-white border border-gray-300 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                    Sign up with Google
                                </button>
                            </form>

                            {/* Footer Links */}
                            <div className="mt-8 text-center text-gray-600">
                                <a href="#" className="hover:text-orange-500 transition-colors">
                                    Forgot password?
                                </a>
                                <p className="mt-2">
                                    Don&apos;t have an account?{" "}
                                    <Link href="/signup" className="text-orange-500 hover:text-orange-600 font-medium">
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Voice Processing Animation */}
            <motion.div
                className="absolute h-16 bottom-8 right-8 bg-white/80 backdrop-blur-sm rounded-full p-4 px-8 shadow-lg hidden lg:flex items-center gap-3"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                            key={i}
                            className="w-1 bg-orange-500 rounded-full"
                            animate={{
                                height: ["15px", "30px", "15px"],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.1,
                            }}
                        />
                    ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">Voice Enabled</span>
            </motion.div>
        </div>
    );
}