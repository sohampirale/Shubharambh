"use client"

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Clock } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show button after page loads and user scrolls a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Show tooltip after 3 seconds when component mounts
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 4000); // Hide after 4 seconds
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your event planning services. Can you please provide more details?");
    window.open(`https://wa.me/918180939260?text=${message}`, '_blank');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && !isExpanded && (
          <div className="absolute bottom-full right-0 mb-3 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap animate-bounce shadow-lg">
            💬 Need help? Chat with us!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
          </div>
        )}

        {/* Expanded Chat Widget */}
        {isExpanded && (
          <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Shubharambh Events</h4>
                    <p className="text-sm opacity-90">Usually replies instantly</p>
                  </div>
                </div>
                <button 
                  onClick={toggleExpanded}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="bg-gray-100 rounded-2xl p-3 mb-4">
                <p className="text-gray-800 text-sm">
                  👋 Hi there! Welcome to Shubharambh Events & Management.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  How can we help make your special day perfect?
                </p>
              </div>

              {/* Quick Options */}
              <div className="space-y-2 mb-4">
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full text-left bg-green-50 hover:bg-green-100 rounded-xl p-3 transition-colors border border-green-200"
                >
                  <div className="font-semibold text-green-800 text-sm">💒 Wedding Planning</div>
                  <div className="text-green-600 text-xs">Plan your dream wedding</div>
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full text-left bg-pink-50 hover:bg-pink-100 rounded-xl p-3 transition-colors border border-pink-200"
                >
                  <div className="font-semibold text-pink-800 text-sm">🎂 Birthday Events</div>
                  <div className="text-pink-600 text-xs">Celebrate in style</div>
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full text-left bg-purple-50 hover:bg-purple-100 rounded-xl p-3 transition-colors border border-purple-200"
                >
                  <div className="font-semibold text-purple-800 text-sm">💍 Engagement Planning</div>
                  <div className="text-purple-600 text-xs">Perfect proposal setup</div>
                </button>
              </div>

              {/* Contact Info */}
              <div className="border-t pt-3">
                <div className="flex items-center space-x-2 text-gray-600 text-sm mb-2">
                  <Phone size={14} />
                  <span>+91 8180939260</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                  <Clock size={14} />
                  <span>Mon-Sun: 9:00 AM - 8:00 PM</span>
                </div>
              </div>

              {/* Main CTA Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <MessageCircle size={18} />
                <span>Start WhatsApp Chat</span>
              </button>
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={isExpanded ? handleWhatsAppClick : toggleExpanded}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 relative group"
        >
          {/* Ripple Animation */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-30"></div>
          
          {/* Icon */}
          <MessageCircle size={28} className="relative z-10" />
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-bounce">
            !
          </div>
        </button>
      </div>

      {/* Backdrop for expanded state */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={toggleExpanded}
        />
      )}
    </>
  );
};

export default WhatsAppFloat;