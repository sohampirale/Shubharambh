'use client';

import React from 'react';
import { Phone, Mail, MapPin, Heart, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const services = [
    'Wedding Planning',
    'Birthday & Baby Shower Events',
    'Rangoli & Floral Decorations',
    'Beauty & Makeup Services',
    'Engagement Planning',
    'Destination Weddings'
  ];

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact Us', id: 'contact' }
  ];

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const handlePhoneClick = () => {
    window.open('tel:+918180939260', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@shubharambh.com', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918180939260', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    Shubharambh
                  </h3>
                  <p className="text-gray-400 text-sm">Event & Management</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "We Build Your Dream Around You"
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating magical moments for your special occasions with premium Indian wedding planning and unforgettable celebrations across Maharashtra.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavigation(link.id)}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation('services')}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300 hover:translate-x-2 transform inline-block text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone size={16} />
                </div>
                <div>
                  <button
                    onClick={handlePhoneClick}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium"
                  >
                    +91 8180939260
                  </button>
                  <p className="text-gray-500 text-sm">Call us anytime</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail size={16} />
                </div>
                <div>
                  <button
                    onClick={handleEmailClick}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium"
                  >
                    info@shubharambh.com
                  </button>
                  <p className="text-gray-500 text-sm">Send us an email</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Maharashtra, India</p>
                  <p className="text-gray-500 text-sm">Serving across the state</p>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <div className="w-5 h-5">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                  </svg>
                </div>
                <span className="font-medium">WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2025 Shubharambh Event & Management. Made with</span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span>for your special moments.</span>
            </div>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <button className="hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-pink-400 transition-colors duration-300">
                Terms of Service
              </button>
              <button className="hover:text-purple-400 transition-colors duration-300">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;