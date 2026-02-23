import React, { useState } from 'react'
import Container from './Container'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='py-4 bg-teal-500'>
      <Container>
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div>
            <h1 className='font-INT font-semibold text-[18px] text-white cursor-pointer'>
              GJR
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className='hidden md:flex gap-x-10'>
            <li className='font-INT font-semibold text-[18px] text-white cursor-pointer'>Home</li>
            <li className='font-INT font-semibold text-[18px] text-white cursor-pointer'>About</li>
            <li className='font-INT font-semibold text-[18px] text-white cursor-pointer'>Service</li>
            <li className='font-INT font-semibold text-[18px] text-white cursor-pointer'>Projects</li>
            <li className='font-INT font-semibold text-[18px] text-white cursor-pointer'>Contact</li>
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className='font-INT font-semibold text-[18px] text-white py-1 px-3 border-2 border-white hover:bg-white hover:text-teal-500 transition cursor-pointer '>
              LET'S TALK
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiMenu />}
          </div>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 bg-teal-600 p-4 rounded-lg">
            <ul className='flex flex-col gap-y-4 text-center'>
              <li className='font-INT font-semibold text-white cursor-pointer'>Home</li>
              <li className='font-INT font-semibold text-white cursor-pointer'>About</li>
              <li className='font-INT font-semibold text-white cursor-pointer'>Service</li>
              <li className='font-INT font-semibold text-white cursor-pointer'>Projects</li>
              <li className='font-INT font-semibold text-white cursor-pointer'>Contact</li>
              <button className='mt-3 font-INT font-semibold text-white py-1 px-3 border-2 border-white'>
                LET'S TALK
              </button>
            </ul>
          </div>
        )}

      </Container>
    </div>
  )
}

export default Navbar