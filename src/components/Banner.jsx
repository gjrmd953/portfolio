import React from 'react'
import Container from './Container'
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Banner = () => {
    return (
        <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
            <Container>
                <div className="min-h-screen flex items-center justify-center  text-white px-6">
                    <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Hi, I'm <span className="text-blue-500">Your Name</span>
                            </h1>


                            <p className="text-lg text-gray-300 max-w-lg">
                                Frontend Developer focused on building modern, responsive,
                                and high-performance web applications using React & Tailwind CSS.
                            </p>


                            <div className="flex flex-wrap gap-4">
                                <button className="rounded-2xl px-6 py-3 text-base">
                                    View Projects
                                </button>


                                <button variant="outline" className="rounded-2xl px-6 py-3 text-base">
                                    Download CV
                                </button>
                            </div>


                            <div className="flex gap-4 pt-4">
                                <a href="#" className="hover:text-blue-500 transition">
                                    <Github />
                                </a>
                                <a href="#" className="hover:text-blue-500 transition">
                                    <Linkedin />
                                </a>
                                <a href="#" className="hover:text-blue-500 transition">
                                    <Mail />
                                </a>
                            </div>
                        </motion.div>


                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-600 p-1 shadow-2xl">
                                <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center text-gray-400">
                                    Your Image Here
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner