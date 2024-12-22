import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-gray-100 '>
        <div>

<div className='relative h-screen bg-cover bg-center h-26' style={{
backgroundImage: 'url("/hero.png")'
}}>
<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
<h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>Contact</h4>
</div>
</div>
</div>
<div className='container mx-auto px-4 py-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 '>
    <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
    <div className='bg-white rounded-lg shadow-md p-6 w-full h-full'>
        <h3 className='flex items-center mb-4'>contact Details</h3>
        <div className='flex items-center mb-4' >
        <FaEnvelope className='text-blue-500 mr-2'/>
        <p>info@travelagency.com</p>
    </div>
    <div className='flex items-center mb-4'>
        <FaPhone className='text-blue-500 mr-2' />
        <p>+123 456 7890</p>
    </div> 
    <div className='flex items-center mb-4'>
        <FaMapMarkedAlt className='text-blue-500 mr-2'/> 
        <p>123 travel st,city,countr</p>
    </div>
    </div>
</div>
<div className='bg-white rounded-lg shadow-md p-6'>
    <h2 className='text-xl font-bold mb-4'>Get in touch</h2>
    <form >
       <div>
        <label className='block text-gray-700 mb-2' htmlFor="Name"> Name</label>
        <input type="text" className='w-full p-2 border border-gray-300 rounded' placeholder='Enter Name' />
       </div>
       <div>
        <label className='block text-gray-700 mb-2' htmlFor="Email"> Email</label>
        <input className='w-full p-2 border border-gray-300 rounded' type="text" placeholder='Enter Email' />
       </div>
       <div>
        <label className='block text-gray-700 mb-2' htmlFor="Name">Message</label>
        <textarea className='w-full p-2 border border-gray-300 rounded' name="" placeholder=''Write message id=""></textarea>
       </div>
       <button type='submit' className='py-3 px-5 my-4 bg-blue-500 text-white rounded' >send Message</button>


    </form>
</div>
      
    </div>
    </div>
  )
}

export default Contact
