import React from 'react';

const Client = [
  {
    name: 'John smith',
    image: '/me.png',
    text: 'this Travel agency provided excellent services and helped us plan the perfect vacation.',
    location: "New York ,Usa"
},
  {
    name:"Alice John",
    image: '/me2.png',
    text: 'this Travel agency provided excellent services and helped us plan the perfect vacation.',
    location: 'London ,Uk',
  },
  {
    name: "Bob mark  ",
    image: '/London.jpg.jpg',
    text: 'this Travel agency provided excellent services and helped us plan the perfect vacation.',
    location:" Jaban ,Tokyo"
  }
]
const Clients = () => {
  return (
    
        <div className='py-12 bg-gray-100' >
          <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-8'>What Our Clients Say</h2>
          <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {Client.map((Client, index) => (
              <div key={index} className='   transform transaction duration-300 p-6 hover:scale-110 bg-white rounded-lg shadow-md text-center  items-center cursor-pointer py-5' >
                    <img src={Client.image} alt="" className='w-24 h-24 rounded-full mx-auto mb-4' />               
                  <h4 className='py-2 font-bold mb-2 '>{Client.title}</h4>
                  <p className='text-gray-600 py-2'>{Client.location}</p>
                  <p className='text-gray-600 py-2 italic'>{Client.text}</p>


              </div>
            ))}
          </div>
        </div>
        </div>
      );
    };
    
    export default  Clients;
    