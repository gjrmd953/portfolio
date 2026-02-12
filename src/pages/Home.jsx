import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Projects/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default Home