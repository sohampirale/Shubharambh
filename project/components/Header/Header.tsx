'use client';

import React, { useState } from 'react';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home', onNavigate }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    'Wedding Planning',
    'Birthday & Baby Shower Events',
    'Rangoli & Floral Decorations',
    'Beauty & Makeup Services',
    'Engagement Planning',
    'Destination Weddings',
    'Reception Planning',
    'Catering Services',
    'DJ & Sound Systems',
    'Professional Photography',
    'Cinematic Videography'
  ];

  const menuItems = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SERVICES', id: 'services', hasDropdown: true },
    { name: 'GALLERY', id: 'gallery' },
    { name: 'CONTACT US', id: 'contact' }
  ];

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleServiceSelect = (service: string) => {
    if (onNavigate) {
      onNavigate('services');
    }
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Shubharambh
              </h1>
              <p className="text-sm text-gray-600">Event & Management</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 font-medium transition-colors duration-300 hover:text-orange-500 ${
                        currentPage === item.id ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-700'
                      }`}
                      onClick={() => handleNavigation(item.id)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Services Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-xl border border-gray-100 py-4 z-50">
                        <div className="grid grid-cols-1 gap-2">
                          {services.map((service, index) => (
                            <button
                              key={index}
                              onClick={() => handleServiceSelect(service)}
                              className="text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 transition-all duration-200 border-l-4 border-transparent hover:border-orange-400"
                            >
                              <span className="font-medium">{service}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
                      currentPage === item.id ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Phone Number & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Phone Number */}
            <a 
              href="tel:+918180939260"
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <Phone size={18} />
              <span className="font-medium">+91 8180939260</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      if (item.hasDropdown) {
                        setIsServicesOpen(!isServicesOpen);
                      } else {
                        handleNavigation(item.id);
                      }
                    }}
                    className={`flex items-center justify-between w-full text-left font-medium py-2 transition-colors duration-300 ${
                      currentPage === item.id ? 'text-orange-500' : 'text-gray-700'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown size={16} className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  
                  {/* Mobile Services Dropdown */}
                  {item.hasDropdown && isServicesOpen && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-orange-200">
                      {services.map((service, index) => (
                        <button
                          key={index}
                          onClick={() => handleServiceSelect(service)}
                          className="block w-full text-left py-2 text-gray-600 hover:text-orange-500 transition-colors duration-200"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Phone Number */}
              <a 
                href="tel:+918180939260"
                className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg w-fit"
              >
                <Phone size={18} />
                <span className="font-medium">+91 8180939260</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;