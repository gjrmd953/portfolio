import Container from './Container'
import React from 'react'

const Contact = () => {
    return (
        <section className="bg-slate-900 text-white py-20">
            <Container>
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Contact <span className="text-blue-500">Me</span>
                    </h2>
                </div>

                <div className="flex gap-12">

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Let's work together 🚀
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            I'm open to freelance projects, collaborations,
                            and full-time opportunities.
                        </p>

                        <div className="space-y-3 text-gray-300">
                            <p>Email: mdjashimuddin@example.com</p>
                            <p>Location: Bangladesh</p>
                        </div>
                    </div>

                    <form className="bg-slate-800 p-8 rounded-2xl space-y-6 shadow-lg">

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
            </Container>
        </section>
    )
}

export default Contact
