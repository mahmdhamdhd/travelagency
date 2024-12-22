import React from 'react'

const images=[
    '/gal1.jpg',
    '/gal2.jpg',
    '/gal3.png',
    '/gal4.jpg',
    '/gal1.jpg',
    '/hero.png',
    '/download.jpg',
    '/gal2.jpg'

]

const Gallery = () => {
  return (
    <div>
        <div>

        <div className='relative h-screen bg-cover bg-center h-26' style={{
        backgroundImage: 'url("/hero.png")'
    }}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
        <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>Gallery</h4>
        </div>
    </div>
    </div>
    <div className='container mx-auto px-4 py-12'>
    <div className='gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {images.map(image =>(
            <div className='rounded-lg overflow-hidden shadow-md'>
                <img src={image} alt=""  className='transform transaction duration-300 hover:scale-110 w-full h-full object-cover'/>
            </div>
        ))}
    </div>
    </div>
    </div>
  )
}

export default Gallery
