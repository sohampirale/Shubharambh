'use client';

import React from 'react';
import { Phone, Heart, Star, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  const handlePhoneClick = () => {
    window.open('tel:+918180939260', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918180939260', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        {/* Placeholder for Mandap Decoration Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-white/30 backdrop-blur-sm">
            <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg bg-white/50">
              <div className="text-6xl mb-4">🏛️</div>
              <p className="text-lg font-medium">Mandap Decoration Image</p>
              <p className="text-sm">(Beautiful Golden Stage with Floral Backdrop)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-purple-400 to-red-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Shubharambh
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Events & Management
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            "We Build Your Dream Around You"
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Creating magical moments for your special occasions with premium Indian wedding planning, 
            traditional decorations, and unforgettable celebrations across Maharashtra.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={handleContactClick}
              className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={handlePhoneClick}
              className="group bg-white text-gray-800 border-2 border-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-orange-400 hover:text-orange-600 transition-all duration-300 flex items-center space-x-2 shadow-lg"
            >
              <Phone size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Call Now</span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-gray-700 font-medium">Happy Couples</p>
            </div>

            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                5+
              </div>
              <p className="text-gray-700 font-medium">Years Experience</p>
            </div>

            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
                1000+
              </div>
              <p className="text-gray-700 font-medium">Events Organized</p>
            </div>

            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                50+
              </div>
              <p className="text-gray-700 font-medium">Vendor Partners</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center justify-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-1">
              <Heart className="text-red-500 fill-current" size={20} />
              <span className="font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="text-yellow-500 fill-current" size={20} />
              <span className="font-medium">5-Star Service</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="text-green-500" size={20} />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
          </svg>
        </div>
      </button>
    </section>
  );
};

export default Hero;