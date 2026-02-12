import React from 'react'
import Container from './Container'
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';


const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <Container>
                <div className=" text-gray-300 py-10 mt-16">

                    {/* Top Section */}
                    <div className=" flex gap-8 justify-between">

                        {/* About */}
                        <div className='w-2/5'>
                            <h2 className="font-INT text-2xl font-bold text-white mb-4">
                                Md Jashim Uddin
                            </h2>
                            <p className="text-sm leading-relaxed font-INT">
                                Frontend Developer skilled in React, JavaScript, <br /> and Tailwind CSS.
                                Passionate about building clean and <br /> responsive web applications.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className='w-2/5'>
                            <h3 className="text-xl font-semibold text-white mb-4 font-INT">
                                Quick Links
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#about" className="hover:text-white transition font-INT">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects" className="hover:text-white transition font-INT">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-white transition font-INT">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className='w-1/5'>
                            <h3 className="text-xl font-semibold text-white mb-4 font-INT">
                                Connect With Me
                            </h3>

                            <div className="py">
                                <div className="flex gap-3 items-center pb-5">
                                    <h2 className='p-[7px] border-2 rounded-full'>
                                        <MdEmail className='text-[18px]  ' />
                                    </h2>
                                    <h2 className='text-[18px] hover:underline hover:text-red-500'>gjrmd953@gmail.com</h2>
                                </div>
                            </div>

                            <div className="flex space-x-4 text-2xl">
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition"
                                >
                                    <FaLinkedin />
                                </a>

                                <a
                                    href="https://facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href="https://x.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition"
                                >
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
                        © {new Date().getFullYear()} Md Jashim Uddin. All Rights Reserved.
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer