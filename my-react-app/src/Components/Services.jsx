import React from 'react';
import { FaConciergeBell, FaHotel, FaUmbrella } from 'react-icons/fa';
import { FaPlane } from 'react-icons/fa6';

const services = [
  {
    icon: <FaPlane className="text-4xl text-blue-500" />,
    title: "Flight Booking",
    description: "We provide easy and quick booking services to make your travel good and safe for you and your family."
  },
  {
    icon: <FaHotel className="text-4xl text-blue-500" />,
    title: "Hotel Booking",
    description: "We provide easy and quick booking services to make your travel good and safe for you and your family."
  },
  {
    icon: <FaUmbrella className="text-4xl text-blue-500" />,
    title: "Flight Tours",
    description: "We provide easy and quick booking services to make your travel good and safe for you and your family."
  },
  {
    icon: <FaConciergeBell className="text-4xl text-blue-500" />,
    title: "Concierge Services",
    description: "We provide easy and quick booking services to make your travel good and safe for you and your family."
  }
];

const Services = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 transform transition duration-300 hover:scale-110 bg-white rounded-lg shadow-md cursor-pointer"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-lg font-bold mb-2 text-center">{service.title}</h4>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
