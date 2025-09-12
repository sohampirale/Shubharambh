'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Heart, Star, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('/images/hero.jpg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.3}px)`,
          filter: 'brightness(0.3)',
        }}
      />
      
      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10" />
      
      {/* Decorative Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-orange-400/20 to-pink-400/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-40 h-40 rounded-full bg-gradient-to-r from-pink-400/20 to-purple-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-red-400/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Floating Decorative Icons */}
      <div className="absolute top-1/4 left-1/4 text-4xl opacity-20 animate-float">🌸</div>
      <div className="absolute top-1/3 right-1/4 text-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>✨</div>
      <div className="absolute bottom-1/3 left-1/3 text-5xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🎊</div>
      <div className="absolute bottom-1/4 right-1/3 text-3xl opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>💐</div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading with Enhanced Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fadeInUp">
            <span className="block bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl animate-shimmer">
              Shubharambh
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-fadeInUp delay-200">
            Events & Management
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light drop-shadow-lg animate-fadeInUp delay-400">
            "We Build Your Dream Around You"
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md animate-fadeInUp delay-600">
            Creating magical moments for your special occasions with premium Indian wedding planning, 
            traditional decorations, and unforgettable celebrations across Maharashtra.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fadeInUp delay-800">
            <button
              onClick={handleContactClick}
              className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 btn-hover"
            >
              <span>Contact Us</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={handlePhoneClick}
              className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center space-x-2 shadow-2xl hover:scale-105"
            >
              <Phone size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Call Now</span>
            </button>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 animate-fadeInUp delay-1000">
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 card-hover">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                500+
              </div>
              <p className="text-white/90 font-medium mt-2">Happy Couples</p>
            </div>

            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 card-hover">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                5+
              </div>
              <p className="text-white/90 font-medium mt-2">Years Experience</p>
            </div>

            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 card-hover">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                1000+
              </div>
              <p className="text-white/90 font-medium mt-2">Events Organized</p>
            </div>

            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 card-hover">
              <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
                50+
              </div>
              <p className="text-white/90 font-medium mt-2">Vendor Partners</p>
            </div>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 animate-fadeInUp delay-1200">
            <div className="flex items-center space-x-2 group">
              <Heart className="text-red-400 fill-current group-hover:scale-110 transition-transform duration-300" size={24} />
              <span className="font-medium text-lg">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <Star className="text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" size={24} />
              <span className="font-medium text-lg">5-Star Service</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <Phone className="text-green-400 group-hover:scale-110 transition-transform duration-300" size={24} />
              <span className="font-medium text-lg">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Enhanced Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce group"
        style={{ animationDuration: '2s' }}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current group-hover:scale-110 transition-transform duration-300">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
          </svg>
        </div>
        {/* WhatsApp pulse effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </button>
    </section>
  );
};

export default Hero;