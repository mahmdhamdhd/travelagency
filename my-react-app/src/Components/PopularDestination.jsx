import React from 'react';

const Destinations = [
  {
    image: '/gal1.jpg',
    title: 'Paris, France',
    description: 'Discover Paris, France, the city of love and artistic expression and the city of light.',
  },
  {
    image: '/gal2.jpg',
    title: 'New York, USA',
    description: 'Experience New York City, the cultural, financial, and entertainment capital of the United States.',
  },
  {
    image: '/London.jpg.jpg',
    title: 'Tokyo, Japan',
    description: "Discover Tokyo, Japan, the capital of East Asia and the world's second-largest metropolitan area.",
  },
  {
    image: '/jaban.jpg',
    title: 'jaban, tokyo',
    description: 'Experience Sydney, Australia, the capital of the Australian Capital Territory and the most populous city in the world.',
  },
];

const PopularDestination = () => {
  return (
    <div className='py-12 bg-gray-100' >
      <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold text-center mb-8'>Popular Destinations</h2>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {Destinations.map((city, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer' >
            <img src={city.image} alt={city.title} className='w-full h-48 object-cover 
            transform transaction duration-300 hover:scale-110' />
            <div className='p-4'>
            
              <h4 className='py-4 font-bold mx-2 '>{city.title}</h4>
              <p className='text-gray-600 py-2 mx-1'>{city.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PopularDestination;
