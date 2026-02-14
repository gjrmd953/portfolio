import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Contract from '../components/Contract'

const Home = () => {
  return (
    <>
      <div className='bg-red-950'>
        <Navbar />
        <Banner />
        <Projects />
        <Blog />
        <Contract />
        <Footer />
      </div>

    </>
  )
}

export default Home