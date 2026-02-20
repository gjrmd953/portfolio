import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Contract from '../components/Contract'
import About from '../components/About'

const Home = () => {
  return (
    <>
      <div className=''>
        <Navbar />
        <Banner />
        <About/>
        <Projects />
        <Blog />
        <Contract />
        <Footer />
      </div>
    </>
  )
}

export default Home