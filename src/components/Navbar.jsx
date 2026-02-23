import React from 'react'
import Container from './Container'

const Navbar = () => {
  return (
    <div className='py-4 bg-teal-500'>
      <Container>
        <div className="flex justify-between items-center">

          <div className="w-1/4">
            <h1 className='font-INT font-semibold text-[18px] text-white cursor-pointer'>GJR</h1>
          </div>

          <div className="w-2/4">
            <ul className='flex gap-x-14'>
              <li className='font-INT font-semibold text-[18px] text-white cursor-pointer'>Home</li>
              <li className='font-INT font-semibold text-[18px] text-white cursor-pointer'>About</li>
              <li className='font-INT font-semibold text-[18px] text-white cursor-pointer'>Service</li>
              <li className='font-INT font-semibold text-[18px] text-white cursor-pointer'>Projects</li>
              <li className='font-INT font-semibold text-[18px] text-white cursor-pointer'>Contact</li>
            </ul>
          </div>
          <div className="w-1/4">
            <div className="text-end">
              <h2 className='font-INT font-semibold text-[18px] text-white cursor-pointer py-1 px-2 border-2 inline-block'>LET'S TALK</h2>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Navbar