import React from 'react'
import about from '../assets/about.png'

const About = () => {
  return (
    <div>
        <main>
        <div className="p-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 md:mr-10">
            <h1 className="text-4xl font-bold mt-0 mb-10">About Us</h1>
            <p className="text-lg mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-orange-500 text-white p-6 rounded-lg">
              <p className="text-center font-semibold mb-2">Our Vision</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bg-white border-2 border-orange-500 text-orange-500 p-6 rounded-lg flex flex-col items-center">
                <p className="text-center font-semibold mb-2">Our Mission</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-10 md:mt-0">
            <img src={about} alt="About Us" className="w-full h-auto rounded-full" />
          </div>
        </div>
      </div>
        </main>
      
    </div>
  )
}

export default About