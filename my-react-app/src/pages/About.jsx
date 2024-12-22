import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-100 '>
    <div>

<div className='relative h-screen bg-cover bg-center h-26' style={{
backgroundImage: 'url("/hero.png")'
}}>
<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
<h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>About

</h4>
</div>
</div>
</div>
<div className='container mx-auto px-4 py-12'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
       <div className='flex items-center justify-center'>
        <img src="./hero.png" alt="About us" className='rounded-lg shadow-md w-full h-auto' />
       </div>
       <div className='flex flex-col justify-center'>
        <h3 className='text-2xl font-bold mb-4'>Who We Are</h3>
        <p className='text-gray-700 mb-4'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque culpa necessitatibus modi, quisquam dolores in.
        </p>
        <h3 className='text-2xl mb-2 font-bold'>Our Mission        </h3>
        <p className='text-gray-700 mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse quaerat recusandae voluptas qui necessitatibus voluptatibus fuga! Recusandae, vitae neque.
        </p>
       </div>
    </div>
</div>

    </div>
  )
}

export default About
