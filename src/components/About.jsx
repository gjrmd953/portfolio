import React from "react";
import Container from "./Container";

const About = () => {
  return (
    <section className="bg-black py-24">
      <Container>
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-teal-500 relative inline-block">
            Know Me More
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-teal-500"></span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side */}
          <div className="md:w-1/2">
            <h3 className="text-3xl text-white font-bold mb-5">
              I'm <span className="text-teal-500">Jashim Uddin,</span> a Frontend Developer
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I build responsive, modern, and user-focused web applications.
              My goal is to create websites that are functional, visually engaging,
              and easy to use. I focus on clean code, scalability, and delivering
              seamless user experiences across all devices.
            </p>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2">
            <ul className="space-y-4 text-gray-300">
              <li className="border-b border-gray-700 pb-2">
                <span className="font-semibold text-white">Name:</span> Jashim Uddin
              </li>
              <li className="border-b border-gray-700 pb-2">
                <span className="font-semibold text-white">Email:</span> gjr953@gmail.com
              </li>
              <li className="border-b border-gray-700 pb-2">
                <span className="font-semibold text-white">Age:</span> 22
              </li>
              <li className="border-b border-gray-700 pb-2">
                <span className="font-semibold text-white">From:</span> Dhala, Bangladesh
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;