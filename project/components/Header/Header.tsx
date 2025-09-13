'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get current page from pathname if not provided
  const getCurrentPage = () => {
    if (currentPage) return currentPage;
    if (pathname === '/') return 'home';
    return pathname.slice(1); // Remove leading slash
  };

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
    { name: 'HOME', id: 'home', path: '/' },
    { name: 'ABOUT', id: 'about', path: '/about' },
    { name: 'SERVICES', id: 'services', path: '/services', hasDropdown: true },
    { name: 'GALLERY', id: 'gallery', path: '/gallery' },
    { name: 'CONTACT US', id: 'contact', path: '/contact' }
  ];

  const handleNavigation = (page: string, path?: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      // Use Next.js router for navigation
      const targetPath = path || `/${page === 'home' ? '' : page}`;
      router.push(targetPath);
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleServiceSelect = (service: string) => {
    if (onNavigate) {
      onNavigate('services');
    } else {
      router.push('/services');
    }
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Improved dropdown hover handlers with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a delay before closing to prevent accidental closure
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // 150ms delay
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !event.target) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const activePage = getCurrentPage();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigation('home', '/')}
          >
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
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center space-x-1 font-medium transition-colors duration-300 hover:text-orange-500 py-2 ${
                        activePage === item.id ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-700'
                      }`}
                      onClick={() => handleNavigation(item.id, item.path)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Services Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white shadow-xl rounded-xl border border-gray-100 py-4 z-50 animate-fadeIn">
                        <div className="grid grid-cols-1 gap-1">
                          {services.map((service, index) => (
                            <button
                              key={index}
                              onClick={() => handleServiceSelect(service)}
                              className="text-left px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 transition-all duration-200 border-l-4 border-transparent hover:border-orange-400 font-medium text-sm"
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                        {/* Add a small arrow pointing up */}
                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.id, item.path)}
                    className={`font-medium transition-colors duration-300 hover:text-orange-500 py-2 ${
                      activePage === item.id ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-700'
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
          <div className="lg:hidden border-t border-gray-200 py-4 animate-slideDown">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      if (item.hasDropdown) {
                        setIsServicesOpen(!isServicesOpen);
                      } else {
                        handleNavigation(item.id, item.path);
                      }
                    }}
                    className={`flex items-center justify-between w-full text-left font-medium py-2 transition-colors duration-300 ${
                      activePage === item.id ? 'text-orange-500' : 'text-gray-700'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown size={16} className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  
                  {/* Mobile Services Dropdown */}
                  {item.hasDropdown && isServicesOpen && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-orange-200 animate-slideDown">
                      {services.map((service, index) => (
                        <button
                          key={index}
                          onClick={() => handleServiceSelect(service)}
                          className="block w-full text-left py-2 text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm"
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