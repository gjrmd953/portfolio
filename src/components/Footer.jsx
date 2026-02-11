import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <div className='py-4 bg-[#d1d1]'>
        <Container>
            <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Md Jashim Uddin
            </h2>
            <p className="text-sm leading-relaxed">
              Frontend Developer skilled in React, JavaScript, and Tailwind CSS.
              Passionate about building clean and responsive web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect With Me
            </h3>
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
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Md Jashim Uddin. All Rights Reserved.
        </div>
      </div>
    </footer>
        </Container>
    </div>
  )
}

export default Footer