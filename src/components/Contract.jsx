import Container from "./Container";
import React from "react";

const Contact = () => {
  return (
    <section className="bg-slate-900 text-white py-24">
      <Container>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-blue-500">Me</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12">

          {/* Left Side */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-6">
              Let’s Build Something Amazing Together
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              I’m currently available for freelance work, collaborations,
              and full-time opportunities. Let’s turn your ideas into
              modern, high-performing web experiences.
            </p>

            <div className="space-y-4 text-lg text-gray-300">
              <p>
                📧 <span className="font-semibold text-white">Email:</span> gjr953@gmail.com
              </p>
              <p>
                <span className="font-semibold text-white">Based in:</span> Bangladesh
              </p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2">
            <form className="bg-slate-800 p-8 rounded-2xl space-y-6 shadow-xl">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-semibold"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;