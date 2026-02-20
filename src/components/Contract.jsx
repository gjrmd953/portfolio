import Container from './Container'
import React from 'react'

const Contact = () => {
    return (
        <section className="bg-slate-900 text-white py-20">
            <Container>
                <div className="text-center mb-14">
                    <h2 className="font-INT text-3xl md:text-4xl font-bold">
                        Contact <span className="text-blue-500">Me</span>
                    </h2>
                </div>

                <div className="flex gap-12">

                    <section className="bg-gray-900 text-white py-16 px-6">
                        <div className="max-w-4xl mx-auto text-center">

                            <h2 className="text-4xl font-bold mb-6">
                                Let’s Build Something Amazing Together 🚀
                            </h2>

                            <p className="text-gray-400 mb-8">
                                I’m currently available for freelance work, collaborations, and full-time roles.
                                Let’s turn your ideas into modern, high-performing web experiences.
                            </p>

                            <div className="space-y-3 text-lg">
                                <p>
                                    📧 <span className="font-semibold">Email:</span> mdjashimuddin@example.com
                                </p>
                                <p>
                                    📍 <span className="font-semibold">Based in:</span> Bangladesh
                                </p>
                            </div>

                            <div className="mt-8">
                                <a
                                    href="mailto:mdjashimuddin@example.com"
                                    className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                                >
                                    Send Message
                                </a>
                            </div>
                        </div>
                    </section>

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
