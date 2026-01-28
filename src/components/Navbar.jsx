import React from 'react'
import Container from './Container'

const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between">

          <div className="w-1/4">
            <h1>GJR</h1>
          </div>

          <div className="w-2/4">
            <ul className='flex justify-between'>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Servic</li>
              <li>Blog</li>
              <li>Contract</li>
            </ul>
          </div>

          <div className="w-1/4">
            <div className="text-end">
              <h2>LET'S TALK</h2>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Navbar