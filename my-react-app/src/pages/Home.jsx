import React from 'react'
import PopularDestination from '../Components/PopularDestination'
import OurServices from '../Components/Services'
import Clients from '../Components/Clients'

const Home = () => {
  return (
    <>
    <div className='relative h-screen bg-cover bg-center' style={{
        backgroundImage: 'url("/hero.png")'
    }}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Explore the world with us</h1>
        <p className='text-lg md:text-2xl font-bold text-white mb-8'>Discover amazing places at exclusive deals </p>
        <button className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500
        transform transaction duration-300 hover:scale-105
        '>Get started</button>
        </div>
    </div>
    <PopularDestination />
    <OurServices/>
    <Clients/>
    
    </>

    
  )
}

export default Home
