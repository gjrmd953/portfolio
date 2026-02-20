
import React from 'react'
import Container from './Container'

const About = () => {
  return (
    <div className='bg-black py-25'>
        <Container>
            <div className="flex justify-center">
                <div className="pb-10 w-1/3">
                <h2 className='text-[36px] pb-10 text-teal-500 font-bold font-INT text-center  after:absolute after:top-15 after:left-37 after:w-30 after:h-1 after:bg-teal-500 relative'>Know Me More</h2>
            </div>
            </div>
            <div className="flex ">
                <div className="w-1/2 ">
                <h3 className='text-[32px] text-white pb-5 font-INT font-bold '>I'm <span className='text-teal-500'>Jashim Uddin,</span> a Frontend Developer</h3>
                <p className='text-[17px] text-white'>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
            </div>
            <div className="w-1/2 flex justify-center">
                <ul>
                    <li className='text-white pb-2 mb-3 text-[17px] border-b-2 border-gray-gray-300'><span className='font-bold'>Name:</span> Jashim Uddin</li>
                    <li className='text-white pb-2 mb-3 text-[17px] border-b-2 border-gray-gray-300'><span className='font-bold'>Email:</span> gjr953@gmail.com</li>
                    <li className='text-white pb-2 mb-3 text-[17px] border-b-2 border-gray-gray-300'><span className='font-bold'>Age:</span> 22</li>
                    <li className='text-white pb-2 mb-3 text-[17px] border-b-2 border-gray-300'><span className='font-bold'>From:</span> Dhala, Bangladesh</li>
                </ul>
            </div>
            </div>
            <div className="">

            </div>
        </Container>
    </div>
  )
}

export default About